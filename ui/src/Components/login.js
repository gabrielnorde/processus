import React from 'react';
import { withStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';

const styles = theme => ({
  root:{
    marginLeft: '380px',
    marginTop: '40px',
    height: '450px',
    width: '550px',
    padding: '50px',
  },
  signIn:{
    marginBottom: '10px',
  },
});

class LoginBox extends React.Component {
  render(){
    const {classes} = this.props;

    return (
      <Card component="main" className={classes.root}>
        <CssBaseline />
        <div >
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form  noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Senha"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Lembrar a Senha"
            />
            <Button
              component={Link} 
              to='/answer'
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.signIn}
            >
              Logar
            </Button>
            <Button
              component={Link} 
              to='/loginRegister'
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.signIn}
            >
              Cadastre-se
            </Button>
            <Button
              component={Link} 
              to='/loginRegister'
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
            >
              Cadastre-se com o Google
            </Button>
          </form>
        </div>

      </Card>
    );
  }
}

export default withStyles(styles)(LoginBox)
