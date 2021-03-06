import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/styles';


const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
});
class NavBar extends React.Component {
  constructor() {
    super();
    this.state = {activeLink: "home"};
  }


  
  renderNavBar() {
    const { classes } = this.props;
   
    return (
      <div className={classes.root}>
      <AppBar position="static">
      <Toolbar>
      <Typography variant="h6" className={classes.title}>
      N64 scraper
      </Typography>


      </Toolbar>
        </AppBar>
        </div>
    );
  }
  render() {
    return (
      <div>
      {this.renderNavBar()}
      </div>
    )
  }
}

export default withStyles(styles) (NavBar);