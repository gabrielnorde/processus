import React from 'react';
import { withStyles } from '@material-ui/styles';   
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'
import axios from 'axios';


const styles = theme => ({
    root:{
        marginLeft: '280px',
        marginTop: '40px',
        height: '750px',
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
        
        marginLeft: '-100px',
        marginTop: '30px',
        padding: '300px',
        width: '200px',
    },
    title:{
    display:'flex',
    justifyContent:'center',
    color:'blue',
        
    },
});

class LawerForm extends React.Component{
    state = {
        search: '',
        nome: '',
        rua: '',
        bairro:'',
        CEP: '',
        cidade:'',
        telefone: '',
        cpf:'',
        area:'',
        numOAB:'',
        escritorio:'',
        cidadeEscritorio: '',
        desc:'',
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
          telefone: this.state.telefone,
          cpf:this.state.cpf,
          area:this.state.area,
          numOAB:this.state.numOAB,
          escritorio:this.state.escritorio,
          cidadeEscritorio: this.state.cidadeEscritorio,
          desc:this.state.desc,

        };
    
        axios.post(`http://127.0.0.1:5000/addLawyer`, { user })
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
                <h2 className={classes.title}>Cadastro de Advogado</h2>
                <form onSubmit={this.handleSubmit} className={classes.forms}>
                    <TextField
                        id="name"
                        label="Nome Completo"
                        margin="normal"
                        fullWidth
                        variant="filled"
                        onChange={this.handleChange("nome")}
                    />
                    <TextField
                        id="rua"
                        label="Rua"
                        margin="normal"
                        className={classes.mediumField}
                        variant="filled"
                        onChange={this.handleChange("rua")}
                    />
                    <TextField
                        id="bairro"
                        label="Bairro"
                        margin="normal"
                        className={classes.smallField}
                        variant="filled"
                        onChange={this.handleChange("bairro")}
                    />
                    <TextField
                        id="CEP"
                        label="CEP"
                        margin="normal"
                        className={classes.smallField}
                        variant="filled"
                        onChange={this.handleChange("CEP")}
                    />
                    <TextField
                        id="Cidade"
                        label="Cidade"
                        margin="normal"
                        className={classes.smallField}
                        variant="filled"
                        onChange={this.handleChange("cidade")}
                    />
                    <TextField
                        id="Telefone"
                        label="Telefone"
                        margin="normal"
                        className={classes.smallField}
                        variant="filled"
                        onChange={this.handleChange("telefone")}
                    />
                    <TextField
                        id="standard-name"
                        label="CPF"
                        margin="normal"
                        className={classes.mediumField}
                        variant="filled"
                        onChange={this.handleChange("cpf")}
                    />
                    <TextField
                        id="Area"
                        label="Área de Atuação"
                        margin="normal"
                        className={classes.smallField}
                        variant="filled"
                        onChange={this.handleChange("area")}
                    />
                    <TextField
                        id="numOAB"
                        label="Número OAB"
                        margin="normal"
                        variant="filled"
                        fullWidth
                        onChange={this.handleChange("numOAB")}
                    />
                    <TextField
                        id="standard-name"
                        label="Nome do Escritório"
                        margin="normal"
                        className={classes.mediumField}
                        variant="filled"
                        onChange={this.handleChange("escritorio")}
                    />
                    <TextField
                        label="Cidade do Escritório"
                        margin="normal"
                        variant="filled"
                        onChange={this.handleChange("cidadeEscritorio")}
                    />
                    <TextField
                        id="standard-name"
                        label="Descrição"
                        margin="normal"
                        fullWidth
                        variant="filled"
                        onChange={this.handleChange("desc")}
                    />
                    <Button 
                    // component={Link} 
                    // to='/profile'
                    className={classes.menuButton}
                    type="submit"
                    >
                        Enviar
                    </Button>
                </form>
            </Card>
        );
    }
}

export default withStyles(styles)(LawerForm);