
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Form from './Form/Form'
// import Simple from './Form/Simple'



// import Home from './React-Router-Dom/Home'
// import About from './React-Router-Dom/About'
// import Products from './Dynamic-Routing/Products'
// import ProductDetails from './Dynamic-Routing/ProductDetails'
// import Navbar from './Nested-Routing/Navbar'
// import Home from './Nested-Routing/Pages/Home'
// import About from './Nested-Routing/Pages/About'
// import Services from './Nested-Routing/Pages/Services'
// import WebDev from './Nested-Routing/Pages/Services/WebDev'
// import AppDev from './Nested-Routing/Pages/Services/AppDev'





// import Nav from './Task/Nav'
// import Homes from './Task/Folders/Homes'
// import About from './Task/Folders/About'
// import Contact from './Task/Folders/Contact'
// import Footer from './Task/Footer'




// import Person from './embedding-expression/Person'
// import Items from './React-Keys/Items'
// import AllProducts from './React-Keys/AllProducts'
// import { UserApiProvider } from './Functional-Components/Hooks/UseContext/User-List/UserApiContext'
// import Home from './Functional-Components/Hooks/UseContext/Theme/Home'
// import { ThemeProvider } from './Functional-Components/Hooks/UseContext/Theme/ThemeContext'
// import { UserApiProvider } from './Functional-Components/Hooks/UseContext/User-List/UserApiContext'
// import UserList from './Functional-Components/Hooks/UseContext/User-List/UserList'
// import UserList from './Functional-Components/Hooks/UseEffect/UserList'
// import UseEFF from './Functional-Components/Hooks/UseEffect/UseEFF'
// import UserList from './Functional-Components/Hooks/UseEffect/UserList'
// import Counter from './Functional-Components/Hooks/Counter'
// import BooleanState from './Functional-Components/Hooks/useState/BooleanState'
// import ProfileForm from './Functional-Components/Hooks/useState/ProfileForm'
// import TextInput from './Functional-Components/Hooks/useState/TextInput'
// import Basic from './Functional-Components/Basic'
// import Props from './Functional-Components/Props'
// import State from './Functional-Components/State'
// import Conditional from './embedding-expression/Conditional'
// import CallingFuntion from './embedding-expression/CallingFuntion'
// import Welcome from './embedding-expression/Welcome'
// import Basic from './Basic'

function App() {

  return (
    <>
      {/*----------embedding expression-----------*/}
      {/* <Basic /> */}
      {/* <Welcome/> */}
      {/* <CallingFuntion/> */}
      {/* <Conditional/> */}
      {/* <Person/> */}

      {/*------------Functional-Components--------------*/}
      {/* <Basic/> */}
      {/* <State/> */}
      {/* <Props/> */}
      {/* <Counter/> */}
      {/* <TextInput/>
      <BooleanState/>
      <ProfileForm/> */}
      {/* <UseEFF/> */}
      {/* <UserList/> */}


      {/* --------UseContext------- */}
      {/* 1. Theme */}
      {/* <ThemeProvider>
        <Home/>
      </ThemeProvider> */}
      {/* <UserApiProvider>
        <UserList/>
      </UserApiProvider> */}


      {/* --------React-Router-Dom------- */}
      {/* 1.basic */}
      {/* <div>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
        </nav>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
        </Routes>
      </div> */}

      {/* 2. Dynamic routing */}
      {/* <Routes>
        <Route path='/' element={<Products/>}/>
        <Route path='/Products/:id' element={<ProductDetails/>}/>
      </Routes> */}

      {/* 3. Nested routing */}
      {/* <Navbar /> */}
      {/* <Routes> */}
        {/* <Route path='/' element={<Home />} 
        <Route path='/About' element={<About />} />  */}
        

        {/* NESTED ROUTE */}
        {/* <Route path='/Services' element={<Services />}>
        <Route path='Web-dev' element={<WebDev />} />
        <Route path='app-dev' element={<AppDev />} />
        </Route>
      </Routes> */}

      {/* task */}

      {/* <Nav/>

      <Routes>
        <Route path='/' element={<Homes/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Contact' element={<Contact/>}/>
      </Routes>

      <Footer/> */}

      {/* ----react-keys---- */}
      {/* <Items/> */}
      {/* <AllProducts/> */}


      {/* -----Form----- */}
      {/* <Simple/> */}
      <Form/>
    </>
  )
}

export default App



// Class-Components
// import React, { Component } from 'react'
// import BasicClass from './Class-Component/BasicClass'

// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         <BasicClass/>
//       </div>
//     )
//   }
// }

// import React, { Component } from 'react'
// import ShouldUpdate from './Class-Component/life-cycle-method/ShouldUpdate'
// import List from './embedding-expression/List'
// import UnMounting from './Class-Component/life-cycle-method/UnMounting'
// import Counter from './Class-Component/Counter'
// import Mounting from './Class-Component/life-cycle-method/Mounting'
// import Update from './Class-Component/life-cycle-method/Update'

// export default class App extends Component {
//   render() {
//     return (
//       <div>
{/* <Counter/> */ }

{/* life cycle methods */ }
{/* <Mounting/> */ }
{/* <ShouldUpdate/> */ }
{/* <Update/> */ }
{/* <List/> */ }
{/* <UnMounting/>
      </div>
    )
  }
} */}


