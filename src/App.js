import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from './component/home';
import { Introduction } from './component/introduction';
import  { Chapter } from './component/chapter';
import  { Conclusion } from './component/conclusion';
import  { Extrablessing  }from './component/extrablessing';
import { About } from './component/about';
import  { Donate } from './component/donate';
import { Layout } from './component/layout';
import { Navigation } from './component/navigation';
import { Jumbotron } from './component/Jumbotron'
 




class App extends Component{
  render(){
    return(
      <React.Fragment> 
        <Jumbotron />
        <Navigation />
        <Layout>
        <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route  path="/introduction" component={Introduction} />
          <Route  path="/chapter" component={Chapter} />
          <Route  path="/conclusion" component={Conclusion} />
          <Route  path="/extrablessing" component={Extrablessing} />
          <Route  path="/about" component={About} />
          <Route  path="/donate" component={Donate} />
        </Switch>
        </Router>
        </Layout>
      </React.Fragment>
    )
  }
}
export default App;