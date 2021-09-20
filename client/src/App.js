import './App.css';
// import { socket } from './service/socket'
import { useEffect } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import NotFound from './components/Errors/NotFound'
import Join from './components/Join/Join';

function App() {
    // useEffect(() => {
    //     socket.emit('HELLO');
    // }, [])

    return (
        <div className="App">
            <HashRouter>
                <Switch>
                    <Route path="/" component={Home} exact /> 
                    <Route path="/join" component={Join} exact />
                    <Route component={NotFound} />
                </Switch>
            </HashRouter>
        </div>
    );
}

export default App;

// https://coolors.co/eded2b-4a4a05-8ccfcf-363675-212138
// https://coolors.co/03071e-370617-6a040f-9d0208-d00000-dc2f02-e85d04-f48c06-faa307-ffba08
// https://coolors.co/f8f9fa-e9ecef-dee2e6-ced4da-adb5bd-6c757d-495057-343a40-212529