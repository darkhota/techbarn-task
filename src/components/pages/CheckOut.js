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

const useStyles = makeStyles({
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
  });

  export default function CheckOut() {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
        
          <AppForm>
<Container component="main" maxWidth="xs"> 

      <CssBaseline />
      <div>
            <Typography variant="h4" gutterBottom>
              Thank You For Visiting TechBarn
            </Typography>
            <Typography variant="subtitle1" component="h2">
              KINDLY FILL YOUR DETAILS BELOW TO CHECK-OUT
            </Typography>
            
        <form noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            //id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <div>
          <Button
            type="submit"
            
            variant="contained"
            color="primary"
            
          >
            check-out
            
          </Button>
             </div>
        </form>
        
        </div>
            
          <Box mt={8}>
       
       </Box>
     </Container>
     </AppForm>
         
      );
    }