import React from 'react'
import ReactDOM from 'react-dom'
import { Provider as ReduxProvider } from 'react-redux'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
import Router from './router'
import configureStore from '../state/store';

const muiTheme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
})

function App(){
  return <ReduxProvider store={configureStore()}>
      <MuiThemeProvider theme={muiTheme}>
        <Router />
      </MuiThemeProvider>
  </ReduxProvider>;
}

ReactDOM.render(<App />, document.getElementById('root'));
