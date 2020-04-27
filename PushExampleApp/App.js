import React, { Component } from 'react';

import { View } from 'react-native';

import OneSignal from 'react-native-onesignal';

// import { Container } from './styles';
//59f1f5c1-af66-4987-9b38-d9749414ad3f
export default class PushExampleApp extends Component {
  constructor(props) {
    super(props);
    OneSignal.init("59f1f5c1-af66-4987-9b38-d9749414ad3f");
    OneSignal.addEventListener('received',this.onReceived);
    OneSignal.addEventListener('opened', this.onOpened);
    OneSignal.addEventListener('ids', this.onIds);
  }
  componentWillUnmount() {
    OneSignal.removeEventListener('received', this.onReceived);
    OneSignal.removeEventListener('opened', this.onOpened);
    OneSignal.removeEventListener('ids', this.onIds);
  }

  onReceived(notification) {
    console.log("Notification received: ", notification);
  }

  onOpened(openResult) {
    console.log('Message: ', openResult.notification.payload.body);
    console.log('Data: ', openResult.notification.payload.additionalData);
    console.log('isActive: ', openResult.notification.isAppInFocus);
    console.log('openResult: ', openResult);
  }

  onIds(device) {
    console.log('Device info: ', device);
  }
  render() {
    return <View />;
  }
}
