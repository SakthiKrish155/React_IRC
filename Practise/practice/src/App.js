// import HelloWorld from './components/HelloWorld';

// function App() {
//   return (
//     <div className="App">
//      <HelloWorld/>
//      </div>
//   );
// }
// export default App;

import React from "react";
import { Provider } from "react-redux";
import { ThemeStore } from "./redux/ThemeStore";
import Theme from "./components/Theme";
function App() {
    return (
        <div>
            <Provider store={ThemeStore}>
                <Theme/>
            </Provider>
        </div>
    )
}
export default App

// import {Routes,Route} from 'react-router-dom'
// import Home from './components/Home';
// import About from './components/About';
// import Navbar from './components/Navbar';
// function App() {
//   return (
//     <div className="App">
//      <Navbar/>
//      <Routes>
//       <Route path = "/" element = {<Home/>}/>
//       <Route path = "/about" element = {<About/>}/>
//      </Routes>
//     </div>
//   );
// }
// export default App;


// import Counter from './components/Counter';
// function App() {
//   return (
//     <div className="App">
//        <Counter/>
//     </div>
//   );
// }
// export default App;


// import React from 'react'
// import InlineStyling from './components/InlineStyling'

// function App() {
//   return (
//     <div>
//       <InlineStyling/>
//     </div>
//   )
// }
// export default App

// import React from 'react'
// import Form from './components/Form'

// function App() {
//   return (
//     <div>
//       <Form/>
//     </div>
//   )
// }

// export default App


// import React from 'react'
// import ErrorBoundary from './components/ErrorBoundary'
// import Hero from './components/Hero'
// function App() {
//   return (
//     <div>
//       <ErrorBoundary>
//         <Hero heroName = "Sri Sakthi Sneha"/>
//       </ErrorBoundary>
//       <ErrorBoundary>
//         <Hero heroName = "Joker"/>
//       </ErrorBoundary>
//     </div>
//   )
// }
// export default App

// import React from 'react'
// import UserList from './components/UserList'

// function App() {
//   return (
//     <div>
//       <UserList/>
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import { Provider } from 'react-redux'
// import CounterRedux from './components/CounterRedux'
// import {Store} from './redux/Store'

// function App() {
//   return (
//     <div>
//         <Provider store={Store}>
//           <CounterRedux/>
//         </Provider>
//     </div>
//   )
// }
// export default App


// import React from 'react'
// import './App.css'
// import DisplayData from './components/DisplayData'
// function App() {
//   const dynamicData = new Date().toLocaleString();
//   return (
//     <div>
//       <h1>Props Demo</h1>
//       <DisplayData staticData = "Hello, I am static data!" dynamicData = {dynamicData}/>
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import Card from './components/CustomCard'

// function App() {
//   return (
//     <div>
//       <Card/>
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import {Provider} from 'react-redux'
// import { ThemeStore } from './redux/ThemeStore'
// import Theme from './components/Theme'
// function App() {
//   return (
//     <div>
//       <Provider store = {ThemeStore}>
//         <Theme/>
//       </Provider>
//     </div>
//   )
// }

// export default App