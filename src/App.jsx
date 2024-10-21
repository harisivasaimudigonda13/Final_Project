import './App.css'
import Menu_bar from './Menu_bar'
// import Chating from './Chating'
import Loading from './Loader'
import Prompt_Area from './Prompt_area'


function App() {

  return(
    <div className="Page">
      <Menu_bar></Menu_bar>
      {/* <Chating></Chating> */}
      <Prompt_Area></Prompt_Area>
    </div>
  )
}

export default App
