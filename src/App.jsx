
import './App.css'
// // import Conditional from './embedding-expression/Conditional'
// // import CallingFuntion from './embedding-expression/CallingFuntion'
// // import Welcome from './embedding-expression/Welcome'
// // import Basic from './Basic'

// function App() {

//   return (
//     <>
//       {/* embedding expression */}
//       {/* <Basic /> */}
//       {/* <Welcome/> */}
//       {/* <CallingFuntion/> */}
//       {/* <Conditional/> */}
//     </>
//   )
// }

// export default App



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

import React, { Component } from 'react'
// import Counter from './Class-Component/Counter'
// import Mounting from './Class-Component/life-cycle-method/Mounting'
import Update from './Class-Component/life-cycle-method/Update'

export default class App extends Component {
  render() {
    return (
      <div>
        {/* <Counter/> */}

        {/* life cycle methods */}
        {/* <Mounting/> */}
        <Update/>
      </div>
    )
  }
}


