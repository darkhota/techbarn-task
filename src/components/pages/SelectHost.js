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
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

const linkStyle = {
    color: '#2e7d32',
    textDecoration: 'none'
  }
const currencies = [
  {
    value: '',
    label: '',
  },
 
];
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
      menu: {
        width: 200,
      },
  }));
  const theme = createMuiTheme({
    palette: {
        primary: { main: '#2e7d32' },
        secondary: { main: '#006699' },
    },
    text:{
     
      fontWeight: "bold",
     
    },
  });

  export default function Capture() {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    const [currency, setCurrency] = React.useState('EUR');
    const handleChange = event => {
      setCurrency(event.target.value);
    };
    return (
      <MuiThemeProvider theme={theme}>
          <AppForm>
<Container component="main" maxWidth="xs"> 

      <CssBaseline />
      <div>
            <Typography variant="h4" gutterBottom style ={theme.text} color= "secondary">
             Select Host
            </Typography>
            <Typography variant="subtitle1" component="h2">
                Please select the employee you would like to see
            </Typography>
            <hr/>
            
        <form noValidate>
            
            <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            //id="email"
            select
            label="Select Employee"
            name="employee"
            autoComplete="employee"
            autoFocus
            value={currency}
            onChange={handleChange}
            SelectProps={{
              MenuProps: {
                className: classes.menu,
              },
            }}
            
            margin="normal"
          >
              {currencies.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>

        <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            //id="email"
            select
            label="select purpose of visit"
            name="purpose of visit"
            autoComplete="Purpose of visit"
            autoFocus
            value={currency}
            onChange={handleChange}
            SelectProps={{
              MenuProps: {
                className: classes.menu,
              },
            }}
            
            margin="normal"
          >
              {currencies.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            
            //id="email"
            label="Comment"
            name="Phone No"
            multiline
            rows="4"
            autoComplete="Phone no"
            autoFocus
           />
          </GridItem>
         
          </GridContainer>
          
          <div>
          <Grid container spacing={5}>
            <Grid item xs={6} sm={6} md={6} lg ={6} xl = {6}>
          <Button
            type="submit"
            
            variant="outlined"
            color="primary"
            
          >
            <Link style={linkStyle} to="/capture">Previous</Link>
            
          </Button>
          </Grid>
          
            <Grid item xs={6} sm={6} md={6} lg ={6} xl = {6}>
          <Button
            type="submit"
            
            variant="outlined"
            color="primary"
            
          >
            <Link style={linkStyle} to="/terms">Next</Link>
            
          </Button>
          </Grid>
          </Grid>
             </div>
        </form>
        
        </div>
            
          
     </Container>
     </AppForm>
        </MuiThemeProvider> 
      );
    }