import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AppForm from '../../views/AppForm';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import GridContainer from "../styling/GridContainer.js";
import GridItem from "../styling/Griditem";
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CancelIcon from '@material-ui/icons/Cancel';


const linkStyle = {
    color: '#2e7d32',
    textDecoration: 'none'
  }
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  input: {
    display: 'none',
  },
    card: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
      },
      container: {
        display: 'flex',
        flexWrap: 'wrap',
      },
      button:{
        background: 'linear-gradient(to right, #336600 37%, #336699 120%)',

    },
    paper: {
      padding: theme.spacing(9),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));
  const theme = createMuiTheme({
    palette: {
        primary: { main: '#2e7d32' },
        secondary: { main: '#006699' },
        accent: { main: '#2e7d32' },
    },
    text:{
        marginTop: 10,
        marginBottom: 50,
        fontWeight: "bold",
      },
      text2:{
        marginTop: 0,
        marginBottom: 30,
        fontSize: 12,
      },
      button1:{
        marginTop: 20,
        marginLeft: 120,
        
        
      },
      button2:{
        marginTop: -250,
        //marginLeft: 120,
       // paddingRight: 25,
        
      },
      button3:{
        marginLeft: 125,
        paddingRight: 39,
        
      },
      
    });
    

  export default function Capture() {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
      <MuiThemeProvider theme={theme}>
          <AppForm>
<Container component="main" maxWidth="xs"> 

      <CssBaseline />
      <div>
            <Typography variant="h4" gutterBottom style ={theme.text} color= "secondary">
              Take a picture
            </Typography>
            <Typography variant="subtitle1" component="h2">
                Please select the employee you would like to see
            </Typography>
            <hr/>
            
        <form noValidate>
            
        <div style={{ width: '100%' }}>
      <Grid container spacing={5}>
        <Grid item xs={6} sm={6} md={6}>
        <Paper className={classes.paper}></Paper>
      
         </Grid>
        
        
        <Grid item xs={6} sm={6} md={6}>
        <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
      <label htmlFor="icon-button-file">
        <IconButton color="primary" aria-label="upload picture" component="span">
          <PhotoCamera />
        </IconButton>
      </label>
         </Grid>
         <Grid item xs={6} sm={6} md={6} lg ={6} xl = {6}>

         </Grid>
         <Grid item xs={6} sm={6} md={6} lg ={6} xl = {6}>
          
          

       
       <IconButton aria-label="cancel" style ={theme.button2}>
        <CancelIcon />
      </IconButton> 
          </Grid>
          </Grid>
          </div>
          
          <div>
          <Grid container spacing={5}>
            <Grid item xs={6} sm={6} md={6} lg ={6} xl = {6}>
          <Button
            type="submit"
            
            variant="outlined"
            color="primary"
            
          >
            <Link style={linkStyle} to="/checkin">Previous</Link>
            
          </Button>
          </Grid>
          
            <Grid item xs={6} sm={6} md={6} lg ={6} xl = {6}>
          <Button
            type="submit"
            //style ={theme.button3}
            variant="outlined"
            color="primary"
            
          >
            <Link style={linkStyle} to="/selecthost">Next</Link>
            
          </Button>
          </Grid>
          </Grid>
             </div>
        </form>
        
        </div>
            
          <Box mt={8}>
       
       </Box>
     </Container>
     </AppForm>
     </MuiThemeProvider>
         
      );
    }