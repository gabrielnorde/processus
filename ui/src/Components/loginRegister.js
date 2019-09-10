import React from 'react';
import { withStyles } from '@material-ui/styles';   
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'


const styles = theme => ({
    root:{
        marginLeft: '280px',
        marginTop: '40px',
        height: '350px',
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

class LoginRegister extends React.Component{
    render(){
        const {classes} = this.props;

        return(
            <Card className={classes.root}>
                <h2 className={classes.title}>Cadastro de Advogado</h2>
                <form className={classes.forms}>
                    <TextField
                        id="standard-name"
                        label="E-mail"
                        margin="normal"
                        fullWidth
                        variant="filled"
                    />
                    <TextField
                        id="standard-name"
                        label="Senha"
                        margin="normal"
                        className={classes.mediumField}
                        variant="filled"
                    />
                    <TextField
                        id="standard-name"
                        label="Confirmação de senha"
                        margin="normal"
                        variant="filled"
                    />
                    <Button 
                    component={Link} 
                    to='/lawerForm'
                    className={classes.menuButton}>
                        Próximo
                        </Button>
                </form>
            </Card>
        );
    }
}

export default withStyles(styles)(LoginRegister);