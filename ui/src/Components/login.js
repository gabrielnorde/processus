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
import axios from 'axios';


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
  state = {
    senha:'',
    email:'',
    valido: true,
    validUser:null,
  }

  handleChange = (name) => event => {
    console.log(name)
    this.setState({ [name]: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();
    
    const user = {
      senha:this.state.senha,
      email:this.state.email,
    };
     
    
    if(user.senha == ''){
        alert("Senha precisa ser preenchido")
        this.state.valido = false;
    }
  
    if(user.email == ''){
        alert("E-mail precisa ser preenchido")
        this.state.valido = false;
    }
   

    if (this.state.valido == true){
        axios.post(`http://127.0.0.1:5000/checkAccess`, { user })
        .then(res => {
            console.log(res);
            console.log(res.data);

            const response = res.data;
            console.log(response)
            
        }).catch(err => {console.log(err);
        });
    }

        
    this.state.valido = true;
    console.log(user);
  }

  render(){
    const {classes} = this.props;

    return (
      <Card component="main" className={classes.root}>
        <CssBaseline />
        <div >
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form  onSubmit={this.handleSubmit}>
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
              onChange={this.handleChange("email")}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Senha"
              type="password"
              id="senha"
              autoComplete="current-password"
              onChange={this.handleChange("senha")}
            />
            <Button
              component={Link} 
              to={{
                pathname:'/updateLawyerForm',
                state:{
                  email:this.state.email,
                }
            }}
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
              to='/lawyerForm'
              fullWidth
              variant="contained"
              color="primary"
              className={classes.signIn}
            >
              Cadastre-se
            </Button>
          </form>
        </div>

      </Card>
    );
  }
}

export default withStyles(styles)(LoginBox)
