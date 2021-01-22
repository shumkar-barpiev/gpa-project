import React from 'react';
import Nav from './Nav';
import Homepage from './Homepage';
import About from './About';
import Calculate from './Calculate';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';


function App() {
  return (
    <Router>
    <div className="App">
      <div className="App-header">
      <img src={process.env.PUBLIC_URL+"/images/mylogo.jpg"} className="App-image1" alt="mylogo" />
      <img src={process.env.PUBLIC_URL+"/images/gerb-m.jpg"} className="App-image2" alt="manaslogo" />
          <h1 className="App-Head"><b>GPA CALCULATOR</b></h1>
      </div>
      <div className="App-main">
        <Nav />
          <Switch>
            <Route path="/" exact component={Homepage}/>
            <Route path="/homepage" component={Homepage}/>
            <Route path="/about" component={About}/>
            <Route path="/calculate" component={Calculate}/>
          </Switch>
      </div>
      <div className="col-md-6 col-sm-12">
           <div> <img src={process.env.PUBLIC_URL+"/images/placeholder.png"} className="App-icon" alt="applogo1" />
            56 Chyngyz Aitmatov avenue, Bishkek, Kyrgyz Republic</div>
           <div> <img src={process.env.PUBLIC_URL+"/images/telephone.png"} className="App-icon" alt="applogo2" />
            +996 (312) 54 19 41-47</div>
           <div> <img src={process.env.PUBLIC_URL+"/images/comment.png"} className="App-icon" alt="applogo3" />
            Fax: +996 (312) 54 19 35</div>
       </div>
      <div className="App-footer">
      &copy; Shumkar Barpyev
  <p>e-mail: barpievsh@gmail.com</p>
      </div>
    </div>
    </Router>
  );
}



export default App;
