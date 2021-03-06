import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core'



const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#009688',
        },
        secondary: {
            main: '#4dd0e1',
        },
        error: {
            main: '#f44336',
        },
        action: {
            main: '#fdd835'
        }
    },
    typography:{
        fontFamily: [
            "'Hepta Slab'", 'serif'
        ]
    }
})
ReactDOM.render(
    <MuiThemeProvider theme={theme}>
        <App />
    </MuiThemeProvider>, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
