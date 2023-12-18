// import './Assets/App.css';
import WithLoading from './Components/WithLoading';
import MyComponent from './Components/MyComponent';

const WrappedComponentWithoutLoading = WithLoading(MyComponent)
function App() {
  return (
    <div className="App">
      <WrappedComponentWithoutLoading/>
    </div>
  );
}

export default App;
