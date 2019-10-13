import React from 'react';
import { withStyles } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root:{
    marginLeft: '250px',
    marginTop: '40px',
    height: '100px',
    width: '700px',
    padding: '40px',
    '&:hover': {
      top: "-4px",
      boxShadow:"0 6px 6px #999",
      transition: "all .2s ease-in-out",
    },
  },
  div:{
    display:'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  cover:{
      width:151,
      height:121,
      marginTop:'-15px',
     }, 
  } );

class Answer extends React.Component {



  
  render(){
    const {classes} = this.props;

    return (
      <div>
      <Card className={classes.root}>
        <div className={classes.div}>
          <CardContent >
            <Typography component="h5" variant="h5">
              {this.props.nome}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {this.props.escritorio}
            </Typography>
            </CardContent>
              <CardMedia
              className={classes.cover}
              image={require("./tribunal.jpeg")}
              />
        </div>
      </Card>
      </div>
    );
  }
}

export default withStyles(styles)(Answer)
