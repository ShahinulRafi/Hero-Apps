import { Outlet } from 'react-router'
import './App.css'
import Nav from './components/Header/Nav'
import Footer from './components/Footer/Footer'
function App() {
  
  return (
    <>
      <Nav></Nav>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  )
}

export default App
