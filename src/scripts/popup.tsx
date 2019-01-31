import React from 'react'
import ReactDOM from 'react-dom'
import { Provider as ReduxProvider } from 'react-redux'
import { install, ThemeProvider, useTheme } from "@material-ui/styles"
import Router from './router'
import configureStore from '../state/store';

install();

function App(){
  return <ReduxProvider store={configureStore()}>
      <ThemeProvider theme={useTheme()}>
        <Router />
      </ThemeProvider>
  </ReduxProvider>;
}

ReactDOM.render(<App />, document.getElementById('root'));
