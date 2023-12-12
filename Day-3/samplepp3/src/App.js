//import logo from './logo.svg';
// import './App.css';
import Nav from './components/Nav';
import Name from './components/Footer';
import './assets/Css/Nav.css';
import './assets/Css/Search.css';
import './assets/Css/Carousel.css';
import Img from './assets/Img/ImageForArticle_22019_16430188554602375.webp';
import Carousel from './components/Carousel';
function App() {
  return (
    <div>
      <Nav/>
      <h1 style={{marginTop:'3cm', marginLeft:'12cm',color:'Black',FontFace:'Lucid Sans'}}>
      Hello Language Learners
      </h1>
      <img src={Img} alt='languages in the world' style={{opacity:'10%',height:'100%',width:'35.25cm',objectFit:'cover'}} class= 'img'/>
      <Name/>
    <Carousel/>
    </div>
  )
}
export default App;
