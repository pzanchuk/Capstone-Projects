import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import About from "./About";
import Home from "./Home";
import Contact from "./Contact";
import { Switch, Route } from 'react-router-dom';


class App extends React.Component{
  
  constructor(props) {

    super(props);
    this.state = {
 
    }; 
  }

  render(){
    return (
      <div>
        <style jsx>{`

        `}</style>

        <div className="back">
          <Header/>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
          </Switch>
          <Footer/>
        </div>
      </div>
    );
  }
}

export default App;