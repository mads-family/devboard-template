using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

var builder = WebApplication.CreateBuilder(args);

// Register controllers
builder.Services.AddControllers();

var app = builder.Build();

// Use routing to map controllers
app.MapControllers();

// Simple /healthcheck endpoint
app.MapGet("/healthcheck", () =>
{
    return Results.Ok(new
    {
        status = "ok",
        uptime = (DateTime.UtcNow - System.Diagnostics.Process.GetCurrentProcess().StartTime.ToUniversalTime()).TotalSeconds
    });
});

app.Run();
