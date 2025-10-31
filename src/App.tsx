import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './styles/App.scss'

/**
 * Main application component
 * @returns {JSX.Element} The root application component
 */
function App(): JSX.Element {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<div>Welcome to Charlatón</div>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
