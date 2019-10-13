import React from 'react';
import { withStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    root: {
        flexGrow:1,
    }, 
    menuButton: {
        marginRight: 30,
    },
    title:{
        flexGrow:1,
    },
});



class Header extends React.Component {
    render(){
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton edge="start" className={classes.menuButton}>
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            Processus
                        </Typography>
                        <Button 
                        component={Link} 
                        to='/lawerForm'
                        color="inherit">
                            Sou advogado
                        </Button>
                        {/* <Button 
                        component={Link} 
                        to='/login'
                        color="inherit">
                            Não sou Advogado
                        </Button> */}
                    </Toolbar>
                </AppBar>
            </div>
        );
}};

export default withStyles(styles)(Header);