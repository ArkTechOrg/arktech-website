import React from 'react';
import Navbar from './components/navbar.jsx';
import Body from './components/body.jsx';

function App() {
  //const [count, setCount] = useState(0)

  return (
    <div className="App">
      <React.Fragment>
        <Navbar/>
        <Body/>
      </React.Fragment>
    </div>
  )
}

export default App
