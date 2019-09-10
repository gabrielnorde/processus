import React from 'react';
import { withStyles } from '@material-ui/styles';   
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const styles = theme => ({
    root:{
        marginLeft: '280px',
        marginTop: '40px',
        height: '460px',
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

class Profile extends React.Component{
    render(){
        const {classes} = this.props;

        return(
            <Card className={classes.root}>
                <h2 className={classes.title}>Cadastro de Advogado</h2>
                <form className={classes.forms}>
                    <TextField
                        id="standard-name"
                        label="Área de Atuação"
                        margin="normal"
                        fullWidth
                        variant="filled"
                    />
                    <TextField
                        id="standard-name"
                        label="Nome do Escritório"
                        margin="normal"
                        className={classes.mediumField}
                        variant="filled"
                    />
                    <TextField
                        label="Cidade do Escritório"
                        margin="normal"
                        variant="filled"
                    />
                    <TextField
                        id="standard-name"
                        label="Descrição"
                        margin="normal"
                        fullWidth
                        variant="filled"
                    />
                    <TextField
                        id="standard-name"
                        label="Foto"
                        margin="normal"
                        fullWidth
                        variant="filled"
                    />
                    <Button 

                    className={classes.menuButton}
                    >
                        Finalizar Cadastro
                    </Button>
                </form>
            </Card>
        );
    }
}

export default withStyles(styles)(Profile);