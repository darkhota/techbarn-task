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
import GridContainer from "../styling/GridContainer.js";
import GridItem from "../styling/Griditem";
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

const linkStyle = {
    color: '#2e7d32',
    textDecoration: 'none'
  }
const useStyles = makeStyles(theme => ({
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
  }));

  const theme = createMuiTheme({
    palette: {
        primary: { main: '#2e7d32' },
        secondary: { main: '#2671b8' },
    },
    text:{
        marginTop: 10,
        marginBottom: 50,
       
      },
      text2:{
        marginTop: 0,
        marginBottom: 30,
        fontSize: 12,
      },
      button2:{
        marginLeft: 10,
        
      },
      
    });

  export default function Terms() {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <MuiThemeProvider theme={theme}>

          <AppForm>
<Container component="main" maxWidth="xs"> 

      <CssBaseline />
      <div>
            <Typography variant="h3" gutterBottom tyle ={theme.text} color= "secondary">
             Techbarn NDA
            </Typography>
            <Typography variant="subtitle" component="h2">
                Welcome to Techbarn!
            </Typography>
            <hr/>
        <form noValidate>
            
            <GridContainer spacing={3}>
            <GridItem xs={12} sm={6} md={6}>
          <Typography style ={theme.text} variant= "subtitle1" >
              We are an investment company set up to provide innovative and accessive financial
              services through our specialized subsidiaries. We are an investment company set up to provide innovative and accessive financial
              services through our specialized subsidiaries.

            
          </Typography>

     
          
          </GridItem>

          <GridItem xs={12} sm={6} md={6}>
          <Typography style ={theme.text} variant= "subtitle1">
              We are an investment company set up to provide innovative and accessive financial
              services through our specialized subsidiaries. We are an investment company set up to provide innovative and accessive financial
              services through our specialized subsidiaries.

             
          </Typography>

     
          
          </GridItem>
          
         
          </GridContainer>
          
          <div>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={12} md={6}>
          <Button
            type="submit"
           
            variant="outlined"
            color="primary"
            
          >
            <Link style={linkStyle} to="/selecthost">Previous</Link>
            
          </Button >
          </Grid>
          
            <Grid item xs={12} sm={12} md={6}>
          <Button
            type="submit"
            //style ={theme.button2}
            variant="contained"
            color="primary"
            className={classes.button}
          >
           I agree
            
          </Button>
          </Grid >
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