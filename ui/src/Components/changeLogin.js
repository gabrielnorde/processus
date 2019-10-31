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

class ChangeLogin extends React.Component {
  state = {
    confirmpassword:'',
    newpassword:'',
    email:'',
    valido: false,
  }
  
  componentDidMount(){
      const {email} = this.props.location.state
      this.setState({email:email})
      console.log(email)
      
  }
  handleChange = (name) => event => {
    console.log(name)
    this.setState({ [name]: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();
    const user = {
      newpassword:this.state.newpassword,
      confirmpassword:this.state.confirmpassword,
      email:this.state.email,
    };
     
  
    if(user.newpassword == ''){
        alert("Nova Senha precisa ser preenchida")
        this.state.valido = false;
    }

    if(user.confirmpassword ==''){
        alert('Confirmação de senha precisa ser preenchida')
        this.state.valido = false;
    }
   

    if (this.state.valido == true){
        axios.post(`http://127.0.0.1:5000/updateAccess`, { user })
        .then(res => {
            console.log(res);
            console.log(res.data);
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
            Change password
          </Typography>
          <form  onSubmit={this.handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="newpassword"
              label="Nova Senha"
              type="password"
              id="senha"
              autoComplete="current-password"
              onChange={this.handleChange("newpassword")}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="confirmpassword"
              label="Confirmação Nova Senha"
              type="password"
              id="confirmacao senha"
              autoComplete="current-password"
              onChange={this.handleChange("confirmpassword")}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.signIn}
            >
              Mudar a senha
            </Button>
          </form>
        </div>

      </Card>
    );
  }
}

export default withStyles(styles)(ChangeLogin)
