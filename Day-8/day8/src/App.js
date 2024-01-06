// // import './Assets/App.css';
// // import WithLoading from './Components/WithLoading';
// // import MyComponent from './Components/MyComponent';
// // const WrappedComponentWithoutLoading = WithLoading(MyComponent)
// import Users from "./pages/Users";
// import Adduser from './pages/Adduser';
// import Edituser from './pages/Edituser';
// import './Assets/css/Users.css';
// import { Route, Routes } from 'react-router-dom'
// import NavBar from "./Components/Navbar";
// import './Assets/css/Style.css';
// function App() {
//   return (
//     <div className="App">
//       {/* <WrappedComponentWithoutLoading/>
//       <Dashboard/> */}
//       <NavBar/>
//       {/* <Routes>
//         <Route path='/' element={<Users />} />
//         <Route path='/add' element={<Adduser />} />
//         <Route path='/edit/:id' element={<Edituser />} />
//       </Routes> */}
//     </div>
//   );
// }

import Navbar from "./Components/Navbar";
import './Assets/css/Style.css'
// export default App;

function App (){
  return(
    <div>
      <Navbar/>
    </div>
  )
}
export default App;