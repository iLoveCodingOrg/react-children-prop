import React from 'react'
import ReactDOM from 'react-dom'
import Box from '../components/Wrapper'

function App() {
  return (
    <div>
      <Box>
        <h1>Hello</h1>
        <p>This is some content</p>
      </Box>
      <Box>
        <h1>Bye</h1>
        <p>This is some content</p>
      </Box>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)