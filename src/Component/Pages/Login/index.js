import React, { Component } from 'react';
import {Grid, Paper, MuiThemeProvider} from '@material-ui/core';
import LgForm from './LgForm';
import './index.css'
import Display from '../../../images/satyamevjayate_Logo.png'

class LoginPage extends Component {
    state = { data:null }
    render() { 
        return ( 
            <div id="lgbg">                   
                <Paper style={{margin:"5vw 16vw",paddingTop:"5vw",borderRadius: 10,background:"rgba(255,255,255,0.6)",borderRadius:"20px",zIndex:"1",float: "left",marginBottom:"3vw",width:"65vw",height:"40vw",overflow:"hidden"}} >
                    <div style={{margin:"3vw 4vw",float:"left"}}>
                        <img style={{width:"15vw",height:"22vw"}} src={Display} alt="display"/>
                    </div>
                    <div style={{float:"left",width:"60%",borderLeft:"2px solid black"}}>
                        <LgForm  myFetch={this.props.myFetch} loginProp={this.props} />
                    </div>
                </Paper>
                {/*<div style={{background: "linear-gradient(135deg, rgb(96, 108, 136) 0%, rgb(63, 76, 107) 100%)"}}>
                <Particles width="100%" height="100%"/>
        </div>*/}
            </div>
         );
    }
}
 
export default LoginPage;