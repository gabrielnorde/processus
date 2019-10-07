import React from 'react';
import { withStyles } from '@material-ui/styles';   
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const styles = theme => ({
    root:{
        marginLeft: '280px',
        marginTop: '40px',
        height: '600px',
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
    render(){
        const {classes} = this.props;

        return(
            <Card className={classes.root}>
                <h2 className={classes.title}>Cadastro de Usuário</h2>
                <form className={classes.forms}>
                    <TextField
                        id="standard-name"
                        label="Nome Completo"
                        margin="normal"
                        fullWidth
                        variant="filled"
                    />
                    <TextField
                        id="standard-name"
                        label="Rua"
                        margin="normal"
                        className={classes.mediumField}
                        variant="filled"
                    />
                    <TextField
                        id="standard-name"
                        label="Número"
                        margin="normal"
                        variant="filled"
                    />
                    <TextField
                        id="standard-name"
                        label="Bairo"
                        margin="normal"
                        className={classes.smallField}
                        variant="filled"
                    />
                    <TextField
                        id="standard-name"
                        label="CEP"
                        margin="normal"
                        className={classes.smallField}
                        variant="filled"
                    />
                    <TextField
                        id="standard-name"
                        label="Cidade"
                        margin="normal"
                        className={classes.smallField}
                        variant="filled"
                    />
                    <TextField
                        id="standard-name"
                        label="E-mail"
                        margin="normal"
                        className={classes.mediumField}
                        variant="filled"
                    />
                    <TextField
                        id="standard-name"
                        label="Telefone"
                        margin="normal"
                        variant="filled"
                    />
                    <TextField
                        id="standard-name"
                        label="RG"
                        margin="normal"
                        className={classes.mediumField}
                        variant="filled"
                    />
                    <TextField
                        id="standard-name"
                        label="CPF"
                        margin="normal"
                        variant="filled"
                    />
                    <TextField
                        id="standard-name"
                        label="Usuário"
                        margin="normal"
                        className={classes.mediumField}
                        variant="filled"
                    />
                    <TextField
                        id="standad-name"
                        label="Senha"
                        margin="normal"
                        variant="filled"
                    />
                    <Button className={classes.menuButton}>Enviar Cadastro</Button>
                </form>
            </Card>
        );
    }
}

export default withStyles(styles)(Register);