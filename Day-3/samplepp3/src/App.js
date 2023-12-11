//import logo from './logo.svg';
// import './App.css';
import Nav from './components/Nav';
import Name from './components/Footer';
import './assets/Css/Nav.css';
import './assets/Css/Search.css';
import Img from './assets/Img/ImageForArticle_22019_16430188554602375.webp';

function App() {
  return (
    <div>
      <Nav/>
      <h1 style={{marginTop:'5cm', marginLeft:'13cm',color:'Black',textDecorationThickness:'10cm',textUnderlineOffset:'5%'}}>
      Hello Language Learners
      </h1>
      <img src={Img} alt='languages in the world' style={{opacity:'10%',height:'100%',width:'35.25cm',objectFit:'cover'}} class= 'img'/>
      <Name/>
    </div>
  )
}
export default App;
