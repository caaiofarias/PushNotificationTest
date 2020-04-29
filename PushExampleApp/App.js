import React, { Component } from 'react';
import OneSignal from 'react-native-onesignal'; // Import package from node modules
import {View,Text, Alert, PermissionsAndroid,Permission} from 'react-native';

//https://documentation.onesignal.com/docs/sending-notifications
export default class PushExampleApp extends Component {

constructor(properties) {
    super(properties);
    OneSignal.init('59f1f5c1-af66-4987-9b38-d9749414ad3f');// set kOSSettingsKeyAutoPrompt to false prompting manually on iOS
    OneSignal.addEventListener('received', this.onReceived);
    OneSignal.addEventListener('opened', this.onOpened);
    OneSignal.addEventListener('ids', this.onIds);
    //OneSignal.getPermissionSubscriptionState((value)=> console.warn(value)) // getID to send especific notifications
}

componentWillUnmount() {
  OneSignal.removeEventListener('received', this.onReceived);
  OneSignal.removeEventListener('opened', this.onOpened);
  OneSignal.removeEventListener('ids', this.onIds);
}

onReceived(notification) {
  console.warn("Notification received: ", notification);
}

onOpened(openResult) {
  const {alertData} = openResult.notification.payload.additionalData;
  if(alertData) {
      Alert.alert('Condicional',openResult.notification.payload.additionalData.foo);
  }
  console.warn('Message: ', openResult.notification.payload.body);
  console.warn('Data: ', openResult.notification.payload.additionalData);
  console.warn('isActive: ', openResult.notification.isAppInFocus);
  console.warn('openResult: ', openResult);
}

onIds(device) {
  console.warn('Device info: ', device);
} 

  render(){
    return <View><Text>PushExampleApp</Text></View>
  }
}