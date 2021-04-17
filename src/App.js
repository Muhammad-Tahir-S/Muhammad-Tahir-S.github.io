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
    document.title = "Writing Prompt Generator"
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
