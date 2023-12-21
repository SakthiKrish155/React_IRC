// import './Assets/App.css';
// import WithLoading from './Components/WithLoading';
// import MyComponent from './Components/MyComponent';
// const WrappedComponentWithoutLoading = WithLoading(MyComponent)
import Users from "./pages/Users";
import Adduser from './pages/Adduser';
import Edituser from './pages/Edituser';
import './Assets/css/Users.css';
import { Route, Routes } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      {/* <WrappedComponentWithoutLoading/>
      <Dashboard/> */}
      <Routes>
        <Route path='/' element={<Users />} />
        <Route path='/add' element={<Adduser />} />
        <Route path='/edit/:id' element={<Edituser />} />
      </Routes>
    </div>
  );
}

export default App;
