import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import GridContainer from "../styling/GridContainer.js";
import GridItem from "../styling/Griditem";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const linkStyle = {
    color: '#fff',
    textDecoration: 'none'
  }
const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
     flexgrow: 1,
    },
    bigAvatar: {
      width: 750,
      height: 750,
    },
  }));
const theme = createMuiTheme({
    palette: {
        primary: { main: '#ffffff' },
        secondary: { main: '#808080' },
    },
    text:{
        marginTop: 196,
        marginBottom: 100,
        fontSize: 30,
      },
      text2:{
        marginTop: 0,
        marginBottom: 30,
        fontSize: 12,
      },
  
      
    });

export default function LandingPage () {
   // const matches = useMediaQuery('(min-width:600px)');

    
    const classes = useStyles();
    
        
 
        
  return (
    
    <MuiThemeProvider theme={theme}>
    <div >
<Container fixed>
<GridContainer>
            <GridItem xs={12} sm={12} md={6}>
            <Typography style ={theme.text}  variant="h1">
            
            
           
Welcome!
</Typography>
<Typography style ={theme.text2}  variant="h6" color = "secondary">
We are an Investment company, set up to provide innovative and accessive 
financial services through our specialized subsidiaries
</Typography>
<Button variant="contained" color="secondary">
<Link style={linkStyle} to="/checkin"> CHECK IN</Link></Button>
</GridItem>

</GridContainer>
</Container>
</div>
</MuiThemeProvider>

    );
  //  return <span>{`(min-width:600px) matches: ${matches}`}</span>;
}

  