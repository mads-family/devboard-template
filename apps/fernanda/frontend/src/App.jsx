import { useState, useEffect } from 'react'
import './App.css'

const API_URL = 'http://localhost:3000'

function App() {
  const [loading, setLoading] = useState(true)
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    fetchMessage()
  }, [])

  const fetchMessage = async () => {
    try {
      setLoading(true)
      setError('')

      const response = await fetch(`${API_URL}/`)

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      setMessage(data.message || 'No message received')
    } catch (error) {
      setError(error.message || 'Failed to fetch message')
      console.error('Error fetching message:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>🚀 DevBoard Frontend</h1>

        <div className='message-container'>
          {loading && (
            <div className='loading'>
              <div className='spinner'></div>
              <p>Loading message from API...</p>
            </div>
          )}

          {error && (
            <div className='error'>
              <p>❌ Error: {error}</p>
              <button onClick={fetchMessage}>Try Again</button>
            </div>
          )}

          {!loading && !error && (
            <div className='success'>
              <p>✅ Message from backend:</p>
              <h2>"{message}"</h2>
            </div>
          )}
        </div>

        <button onClick={fetchMessage} disabled={loading}>
          {loading ? 'Loading...' : 'Refresh Message'}
        </button>
      </header>
    </div>
  )
}

export default App
