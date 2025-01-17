
import DarkMode from '../../Redux-counter/src/components/DarkMode'
import './App.css'
import Byamount from './components/Byamount'
import Footer from './components/Footer'
import Header from './components/Header'
import Increment from './components/Increment'
import RandomColor from './components/RandomColor'
import Signup from './components/Signup'

import Login from './components/Login'
import Profile from './components/Profile'
// import Apiproduct from './components/Apiproduct'
// import Apiproducts from './components/Apiproducts'
function App() {
  

  return (
    <>
     
    <Increment/>
    <Byamount/>
    <Header/>
    <Footer/>
    <DarkMode/>
    <RandomColor/>
    <Signup/>
    <Login/>
    <Profile/>
    {/* <Apiproduct/>
    <Apiproducts/> */}

   
     
    </>
  )
}

export default App
