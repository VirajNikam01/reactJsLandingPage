import './App.css'
import Card from './Components/Card'
import Nav from './Components/Nav'
import Foot from './Components/Foot'

function App() {
 

  return (
   <>
    <Nav/>
<div className='flex flex-wrap gap-10 items-center justify-center'>

<Card model = "Asus" btn="More"/>
    <Card model='Mackbook' />
    <Card model='HP'/>
    <Card model='DELL'/>

</div>


<Foot/>

   </>


  )
}

export default App
