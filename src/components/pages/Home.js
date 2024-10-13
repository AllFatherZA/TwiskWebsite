import '../../App.css'
import Hero from "../Hero.js"
import Card from "../Card/Card.js"
import Footer from '../Footer/Footer.js'






function Home(){
    return(
        <div className="App">
        <header className="App-header">
          <a href='http://twisk.co.za'>
          <img src={logo} className="App-logo" alt="logo"/>
          </a>
          <p>Site is down</p>
        </header>
      </div>

    );
}
export default Home;