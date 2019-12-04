import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import LandingPage from './components/pages/LandingPage';
import CheckOut from './components/pages/CheckOut';
import CheckIn from './components/pages/CheckIn';
import Capture from './components/pages/Capture';
import SelectHost from './components/pages/SelectHost';
import Terms from './components/pages/Terms';
//import Background from './views/robot2.jpg';


const useStyles = makeStyles(theme => ({
  mainFeaturedPost: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: 'url(robot2.jpg)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height:'100vh'
    //backgroundAttachment: "fixed",
  },
}));
function App() {
  const classes = useStyles();
  return (
    
    <Router>
      <container>
      <div className={classes.mainFeaturedPost} >
    
      <Route exact path = "/" render={props => (
     <React.Fragment><LandingPage />
     </React.Fragment>)}/>
     <Route path = "/checkIn" component={CheckIn} />
     <Route path = "/capture" component={Capture} />
     <Route path = "/checkout" component={CheckOut} />
     <Route path = "/selecthost" component={SelectHost} />
     <Route path = "/terms" component={Terms} />
    
       
      
    </div>
    </container>
    </Router>

  );
}

export default App;
