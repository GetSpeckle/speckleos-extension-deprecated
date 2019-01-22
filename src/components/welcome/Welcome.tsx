import browser from 'webextension-polyfill'
import React from 'react';
import { Button } from 'semantic-ui-react'

interface AppProps {}

interface AppState {}

export default class Welcome extends React.Component<AppProps, AppState> {
  constructor(props: AppProps, state: AppState) {
    super(props, state);
  }

  render() {
    let welcome = browser.i18n.getMessage('welcome')
    let welcomeMessage = browser.i18n.getMessage('welcomeMessage')
    return (
      <div>
        <div className="header">
          { welcome }
        </div>
        <div className="info">
          { welcomeMessage}
        </div>
        <Button content='Continue' />
      </div>
    )
  }
}
