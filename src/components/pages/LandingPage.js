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
import Box from '@material-ui/core/Box';


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
    button:{
        background: 'linear-gradient(to right, #336600 37%, #336699 120%)',

    },
    bigAvatar: {
      width: 750,
      height: 750,
    },
  }));
const theme = createMuiTheme({
    palette: {
        primary: { main: '#ffffff' },
        secondary: { main: '#008f11' },
    },
    text:{
        marginTop: 196,
        marginBottom: 100,
        fontSize: 30,
        fontWeight: "bold",
       
      },
      text2:{
        marginTop: -70,
        marginBottom: 30,
        fontSize: 16,
      },
  
      
    });

export default function LandingPage () {
   // const matches = useMediaQuery('(min-width:600px)');

    
    const classes = useStyles();
    
        
 
        
  return (
    
    <MuiThemeProvider theme={theme}>
    <div >
<Container fixed>
<Grid container wrap="nowrap" spacing={2}>
            <Grid item xs={6} sm={6} md={6}>
            <Typography component="div" style ={theme.text}  variant="h1" color = "textPrimary">
            
            
            <Box fontWeight="fontWeightBold" m={1}>          
Welcome!
</Box>
</Typography>
<Typography style ={theme.text2}  variant="h6" color = "textPrimary">
We are an Investment company, set up to provide innovative and accessive 
financial services through our specialized subsidiaries
</Typography>
<Button variant="contained" color="secondary" className={classes.button}>
<Link style={linkStyle} to="/checkin"> CHECK IN</Link></Button>
</Grid>

</Grid>
</Container>
</div>
</MuiThemeProvider>

    );
  //  return <span>{`(min-width:600px) matches: ${matches}`}</span>;
}

  