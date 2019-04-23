import React, {Component} from "react";
import { Route, Switch, Redirect } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './components/homepage/Home';
import NoMatch from './components/util/NoMatch';
import Journey from './components/journey/Journey';
import SoicalHelpPage from './components/socialhelp/SocialHelpPage';


class App extends Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div className="App">
                <Navbar />
                
                <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route path="/journey" component={Journey}></Route>
                    <Route path="/map" component={SoicalHelpPage}></Route>
                </Switch>
            </div>
        )
    }
}

export default App;
