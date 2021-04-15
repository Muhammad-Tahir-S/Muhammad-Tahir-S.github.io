import './App.css';
import React, {useState, useEffect} from 'react'
import Welcome from './Welcome'
import Footer from './Footer'
import Randomise from './Randomise'


function App() {
  const [isClicked, setIsClicked] = useState(false)
  function handleisClicked(){
    setIsClicked(true)
  }
  

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

return (
    isClicked ? 
    <div className='App'>  
        
      <Randomise />
      <br/>
      <br/>
      <br/>
       <Footer />
    </div>

   :   
    <div className="App">
      <Welcome clicked={()=>handleisClicked()}/>       
    </div>
)  
}
export default App
