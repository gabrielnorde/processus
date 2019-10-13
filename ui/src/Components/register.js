import React from 'react';
import { withStyles } from '@material-ui/styles';   
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';


const styles = theme => ({
    root:{
        marginLeft: '280px',
        marginTop: '40px',
        height: '450px',
        width: '650px',
        padding: '50px',
    },
    forms:{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    mediumField:{
        width: '400px',
    },
    smallField:{
        width: '190px',
    },
    menuButton: {
        marginLeft: '500px',
        marginTop: '30px',
        padding: '15px',
        width: '200px',
    },
    title:{
    display:'flex',
    justifyContent:'center',
    color:'blue',
        
    },
});

class Register extends React.Component{
    state = {
        nome: '',
        rua: '',
        bairro:'',
        CEP: '',
        cidade:'',
        cpf:'',
      }

      handleChange = (name) => event => {
        console.log(name)
        this.setState({ [name]: event.target.value });
      }

      handleSubmit = event => {
        event.preventDefault();
     
        const user = {
          nome: this.state.nome,
          rua: this.state.rua,
          bairro:this.state.bairro,
          CEP: this.state.CEP,
          cidade:this.state.cidade,
          cpf:this.state.cpf,
        };
    
        axios.post(`http://127.0.0.1:5000/addUser`, { user })
          .then(res => {
            console.log(res);
            console.log(res.data);
          }).catch(err => {console.log(err);
        });
          
      }
    
    render(){
        const {classes} = this.props;

        return(
            <Card className={classes.root}>
                <h2 className={classes.title}>Cadastro de Usuário</h2>
                <form onSubmit={this.handleSubmit} className={classes.forms}>
                    <TextField
                        id="standard-name"
                        label="Nome Completo"
                        margin="normal"
                        fullWidth
                        variant="filled"
                        onChange={this.handleChange("nome")}
                    />
                    <TextField
                        id="standard-name"
                        label="Rua"
                        margin="normal"
                        className={classes.mediumField}
                        variant="filled"
                        onChange={this.handleChange("rua")}
                    />
                    <TextField
                        id="standard-name"
                        label="Bairro"
                        margin="normal"
                        variant="filled"
                        onChange={this.handleChange("bairro")}
                    />
                    <TextField
                        id="standard-name"
                        label="CEP"
                        margin="normal"
                        className={classes.mediumField}
                        variant="filled"
                        onChange={this.handleChange("CEP")}
                    />
                    <TextField
                        id="standard-name"
                        label="Cidade"
                        margin="normal"
                        variant="filled"
                        onChange={this.handleChange("cidade")}
                    />
                    <TextField
                        id="standard-name"
                        label="E-mail"
                        margin="normal"
                        className={classes.mediumField}
                        variant="filled"
                        onChange={this.handleChange("email")}
                    />
                    <TextField
                        id="standard-name"
                        label="CPF"
                        margin="normal"
                        variant="filled"
                        onChange={this.handleChange("cpf")}
                    />
                    <Button 
                    className={classes.menuButton}
                    type="submit">
                        Enviar Cadastro</Button>
                </form>
            </Card>
        );
    }
}

export default withStyles(styles)(Register);