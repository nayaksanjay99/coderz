import React from 'react'
import NavBar from '../../Reusables/NavBar'
import ListBar from '../../Reusables/ListBar'
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Home from '../Home/index'
import Tender from '../Tender/index'
import About from '../About/index'
import Footer from '../../Reusables/footer'

export default class LandingPage extends React.Component{
    render(){
        return(
            <BrowserRouter>
                <div>
                    {/*<div style={{position:"absolute",zIndex:"-1",width:"100%",height:"100%",background: "linear-gradient(135deg, rgb(200,200,200) 0%,  #283593 100%)"}}>
                    <Particles width="100%" height="100%" style={{top:'0', bottom:'0', left:'0', right:'0', position: 'absolute'}}
                    params={{
                        "particles": {
                            "number": {
                                "value": 150
                            },
                            "size": {
                                "value": 3
                            }
                        },
                        "interactivity": {
                            "events": {
                                "onhover": {
                                    "enable": true,
                                    "mode": "repulse"
                                }
                                // "onclick": {
                                //     "enable": true,
                                //     "mode": "repulse"
                                // }
                            }
                        }
                    }} />
                </div>*/}
                    <NavBar/>
                    <ListBar/>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/tender" component={Tender}/>
                        <Route exact path="/about" component={About}/>
                    </Switch>
                    <Footer/>
                </div>
            </BrowserRouter>
        )
    }
}