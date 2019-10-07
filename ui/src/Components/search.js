import React from 'react';
import { withStyles } from '@material-ui/styles';   
import TextField from '@material-ui/core/TextField';
const styles = theme => ({
    root: {
        flexGrow:1,
    },
    // background:{
    //     backgroundImage: `url(${Image})`,
    //     backgroundPosition: 'center',
    //     backgroundRepeat: 'no-repeat',
    //     backgroundSize: '100%',
    //     // height: '100%',
    //     // width: '100%',
    // }, 

    textField: {
        width: '50%',
        marginLeft: '330px',
        marginTop: '50px',
    },
    title:{
        marginLeft: '388px',
        marginTop: '80px',
        color: 'blue',
    },
});

class Search extends React.Component {
    render(){
        const {classes} = this.props;
        return(
            <div >
                <h1 className={classes.title}>Ache um advogado com Processus</h1>
                <form className={classes.root}>  
                    <TextField
                        className={classes.textField}
                        id="outlined-name"
                        label="Área do Direito"
                        margin="center"
                        variant="outlined"
                    />
                </form>
            </div>
        );
}}

export default withStyles(styles)(Search);