import React,{Redirect} from 'react';
import { withStyles } from '@material-ui/styles';   
import TextField from '@material-ui/core/TextField';
import Answer from './answer';

import axios from 'axios';


const styles = theme => ({
    root: {
        flexGrow:1,
        width: '78%',
        marginLeft: '390px',
        marginTop: '50px',
    },
    textField: {
        width: '50%',
        backgroung:"blue",
        marginLeft: '400px',
        marginTop: '50px',
    },
    title:{
        marginLeft: '388px',
        marginTop: '80px',
        color: 'blue',
    },
});

class Search extends React.Component {

    state = {
        area: '',
        visible:false,
        lawyers:[],
      }

      handleChange = (name) => event => {
        console.log(name)
        this.setState({ [name]: event.target.value.substr(0,20) });
      }

      handleSubmit = event => {
        event.preventDefault();

        const user = {
            area:this.state.area,
          };

        axios.post(`http://127.0.0.1:5000/getLawyer`, {user})
        .then(res => {
          console.log(res)
          const lawyers = res.data;
          this.setState({ lawyers });
          this.setState({visible :true})
        })          
        .catch(err => {console.log(err);
        });
      } 


    render(){
        const {classes} = this.props;
        return(
            <div >
                <h1 className={classes.title}>Ache um advogado com Processus</h1>
                <form onSubmit={this.handleSubmit} className={classes.root}>  
                    <TextField
                        className={classes.textField}
                        id="outlined-name"
                        label="Área do Direito"
                        margin="center"
                        variant="outlined"
                        onChange={this.handleChange("area")}
                    />
                </form>
                
            
                {this.state.visible ? 
                this.state.lawyers.map((lawyer) =>
                <Answer nome={lawyer.nome} escritorio={lawyer.escritorio}
                desc={lawyer.desc} cidade={lawyer.cidadeEscritorio} telefone={lawyer.telefone}
                rua={lawyer.rua} numero={lawyer.numero} bairro={lawyer.bairro}/>) : null  }
            </div>
        );
}}

export default withStyles(styles)(Search);