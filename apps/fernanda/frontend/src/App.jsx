import { useState, useEffect } from 'react'
import './App.css'

const API_URL = 'http://localhost:3000'

function App() {
  const [loading, setLoading] = useState(true)
  const [message, setMessage] = useState('')
  const [tasks, setTasks] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    fetchMessage()
    fetchTasks()
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

  const fetchTasks = async () => {
    try {
      const response = await fetch(`${API_URL}/tasks`)

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      setTasks(data.data || [])
    } catch (error) {
      console.error('Error fetching tasks:', error)
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

        <div className='tasks-section'>
          <h2>📋 Tasks from Database</h2>
          {tasks.length > 0 ? (
            <div className='tasks-grid'>
              {tasks.map(task => (
                <div key={task.id} className='task-card'>
                  <div className='task-header'>
                    <h3>{task.title}</h3>
                    <span className={`status ${task.status}`}>
                      {task.status}
                    </span>
                  </div>
                  <p className='task-description'>{task.description}</p>
                  <div className='task-footer'>
                    <small>
                      Created: {new Date(task.created_at).toLocaleDateString()}
                    </small>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p>No tasks found</p>
          )}
        </div>
      </header>
    </div>
  )
}

export default App
