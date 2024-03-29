import React from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { withStyles } from '@material-ui/core/styles';
import Paper from '../components/styling/Paper';
import { shadows } from '@material-ui/system';

const styles = theme => ({
  root: {
    display: 'flex',
    backgroundImage: 'url(./tech.jpg)',
    backgroundRepeat: 'no-repeat',
    
  },
  paper: {
    padding: theme.spacing(4, 3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(0, -21),
    },
    
  },
});

function AppForm(props) {
  const { children, classes } = props;

  return (
    <div className={classes.root}>
      <Container maxWidth="sm">
        <Box mt={20} mb={20}  boxShadow={3}>
          <Paper className={classes.paper}>{children} </Paper>
        </Box>
      </Container>
    </div>
  );
}

AppForm.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppForm);