import React, {useState, useEffect} from 'react'
import Overview from './components/Overview'
import Header from './components/Header'
import Loader from './components/Loader'
import './styles/App.css'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(function () { setLoading(false) }, 3000);
  }, [])

  return (
  <div>
    {loading
    ?
    <Loader />
    :
    <div className = "App">
      <Header />
      <Overview />
    </div >
      }
  </div>
  );
}

export default App;
