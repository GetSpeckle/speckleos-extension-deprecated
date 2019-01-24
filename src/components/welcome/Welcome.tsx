import browser from 'webextension-polyfill'
import React from 'react';

interface AppProps {}

interface AppState {}

export default class Welcome extends React.Component<AppProps, AppState> {
  constructor(props: AppProps, state: AppState) {
    super(props, state);
  }

  render() {
    let welcome = browser.i18n.getMessage('welcome')
    let welcomeMessage = browser.i18n.getMessage('welcomeMessage')
    let cont = browser.i18n.getMessage('continue')
    return (
      <div className="container">
        <div className="logo">
        </div>
        <div className="header">
          { welcome }
        </div>
        <div className="info">
          { welcomeMessage }
        </div>
        <div className="action">
          <button>{ cont }</button>
        </div>
      </div>
    )
  }
}
