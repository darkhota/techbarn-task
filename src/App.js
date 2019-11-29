import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import LandingPage from './components/pages/LandingPage';
import CheckOut from './components/pages/CheckOut';
import CheckIn from './components/pages/CheckIn';
import Capture from './components/pages/Capture';
import SelectHost from './components/pages/SelectHost';
import Terms from './components/pages/Terms';
import Background from './views/robot2.jpg';

const styles = theme => ({
	"@global": {
		body: {
			backgroundImage: "url('/media/robot.jpg')",
			backgroundRepeat: "no-repeat",
			backgroundPosition: "center center",
			backgroundSize: "cover",
			backgroundAttachment: "fixed",
			height: "100%"
		},
		html: {
			height: "100%"
		},
		"#componentWithId": {
			height: "100%"
		}
	}
});
function App() {
  
  return (
    <Router>
      <div className="App" style={{backgroundImage: `url(${Background })`  }}>
      <header className="App-header">
      <Route exact path = "/" render={props => (
     <React.Fragment><LandingPage />
     </React.Fragment>)}/>
     <Route path = "/checkIn" component={CheckIn} />
     <Route path = "/capture" component={Capture} />
     <Route path = "/checkout" component={CheckOut} />
     <Route path = "/selecthost" component={SelectHost} />
     <Route path = "/terms" component={Terms} />
    
       
      </header>
    </div>
    </Router>
  );
}

export default App;
