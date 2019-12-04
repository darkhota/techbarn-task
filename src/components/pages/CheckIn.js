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
const linkStyle = {
    color: '#fff',
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
        primary: { main: '#ffffff' },
        secondary: { main: '#006699' },
    },
    text:{
     
      fontWeight: "bold",
     
    },
  });

  export default function CheckIn() {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
      <MuiThemeProvider theme={theme}>
          <AppForm>
<Container component="main" maxWidth="xs"> 

      <CssBaseline />
      <div>
            <Typography variant="h4" gutterBottom color= "secondary" style ={theme.text} >
              Welcome To TechBarn
            </Typography>
            <Typography variant="subtitle1" component="h2">
              KINDLY FILL YOUR DETAILS BELOW TO CHECK-OUT
            </Typography>
            
        <form noValidate>
            
            <GridContainer>
            <GridItem xs={12} sm={12} md={6} lg ={6} xl = {6}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            //id="email"
            label="Phone Number"
            name="Phone No"
            autoComplete="Phone no"
            autoFocus
          />
          </GridItem>
          <GridItem xs={12} sm={12} md={6} lg ={6} xl = {6}>
           <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            //id="email"
            label="First Name"
            name="First Name"
            autoComplete="First Name"
            autoFocus
          />
          </GridItem>
          <GridItem xs={12} sm={12} md={6} lg ={6} xl = {6}>
           <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            //id="email"
            label="Last Name"
            name="Last Name"
            autoComplete="Last Name"
            autoFocus
          />
          </GridItem>
          
          
          
            <GridItem xs={12} sm={12} md={6} lg ={6} xl = {6}>
           <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            //id="email"
            label="Select Employee"
            name="email"
            autoComplete="email"
            autoFocus
          />
          </GridItem>
          
            <GridItem xs={12} sm={12} md={6} lg ={6} xl = {6}>
           <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            //id="email"
            label="Company"
            name="email"
            autoComplete="email"
            autoFocus
          />
          </GridItem>
          
            <GridItem xs={12} sm={12} md={6} lg ={6} xl = {6}>
           <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            //id="email"
            multiline
          rows="4"
            label="Comments"
            name="email"
            autoComplete="email"
            autoFocus
          />
          </GridItem>
          </GridContainer>
          
          <div>
          <Button
            type="submit"
            
            variant="contained"
            color="primary"
            className={classes.button}
          >
            <Link style={linkStyle} to="/capture">check-in</Link>
            
          </Button>
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