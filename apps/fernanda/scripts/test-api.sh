#!/bin/bash

# DevBoard API Health Check Script

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

# Configuration
BACKEND_URL="${BACKEND_URL:-http://localhost:3000}"
TIMEOUT="${TIMEOUT:-10}"

echo -e "${CYAN}🏥 DevBoard API Health Check${NC}"
echo -e "${CYAN}================================${NC}"
echo "Backend URL: $BACKEND_URL"
echo "Timeout: ${TIMEOUT}s"
echo ""

# Function to test endpoint
test_endpoint() {
    local endpoint=$1
    local expected_status=$2
    local description=$3

    echo -e "${YELLOW}Testing:${NC} $description"
    echo -e "${CYAN}URL:${NC} $BACKEND_URL$endpoint"

    # Make request and capture response
    response=$(curl -s -w "\n%{http_code}\n%{time_total}" --max-time $TIMEOUT "$BACKEND_URL$endpoint" 2>/dev/null || echo -e "\nERROR\n0")

    # Parse response
    body=$(echo "$response" | head -n -2)
    status_code=$(echo "$response" | tail -n 2 | head -n 1)
    time_total=$(echo "$response" | tail -n 1)

    # Check if request failed
    if [ "$status_code" = "ERROR" ] || [ "$status_code" = "0" ] || [ -z "$status_code" ]; then
        echo -e "${RED}❌ FAILED${NC} - Could not connect to server"
        return 1
    fi

    # Check status code
    if [ "$status_code" = "$expected_status" ]; then
        echo -e "${GREEN}✅ PASSED${NC} - Status: $status_code (${time_total}s)"
    else
        echo -e "${RED}❌ FAILED${NC} - Expected: $expected_status, Got: $status_code"
        return 1
    fi

    # Show response body (first 200 chars)
    if [ ${#body} -gt 0 ]; then
        echo -e "${CYAN}Response:${NC} $(echo "$body" | head -c 200)..."
    fi

    echo ""
    return 0
}

# Test results tracking
total_tests=0
passed_tests=0

# Test 1: Root endpoint
echo -e "${YELLOW}📍 Test 1: Root Endpoint${NC}"
if test_endpoint "/" "200" "Root endpoint should return 200"; then
    ((passed_tests++))
fi
((total_tests++))

# Test 2: Health check endpoint
echo -e "${YELLOW}🔍 Test 2: Health Check Endpoint${NC}"
if test_endpoint "/healthcheck" "200" "Health check should return 200 with status info"; then
    ((passed_tests++))
fi
((total_tests++))

# Test 3: Tasks endpoint
echo -e "${YELLOW}📋 Test 3: Tasks Endpoint${NC}"
if test_endpoint "/tasks" "200" "Tasks endpoint should return 200 with tasks data"; then
    ((passed_tests++))
fi
((total_tests++))

# Test 4: Non-existent endpoint (should return 404)
echo -e "${YELLOW}🚫 Test 4: Non-existent Endpoint${NC}"
if test_endpoint "/nonexistent" "404" "Non-existent endpoint should return 404"; then
    ((passed_tests++))
fi
((total_tests++))

# Summary
echo -e "${CYAN}📊 Test Summary${NC}"
echo -e "${CYAN}===============${NC}"
echo "Total tests: $total_tests"
echo "Passed: $passed_tests"
echo "Failed: $((total_tests - passed_tests))"

if [ $passed_tests -eq $total_tests ]; then
    echo -e "${GREEN}🎉 All tests passed!${NC}"
    exit 0
else
    echo -e "${RED}💥 Some tests failed!${NC}"
    exit 1
fi
