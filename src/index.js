import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {TravelProvider} from './context/TravelContext'

ReactDOM.render(
  <React.StrictMode>
    <TravelProvider>
      <App />
    </TravelProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)

// import React from 'react'
// import ReactDOM from 'react-dom'

// function App() {
//   return 'Hello'
// }

// ReactDOM.render(<App />, document.getElementById('root'))
