import React, {useEffect, useState} from 'react';
import {View, Text, PermissionsAndroid} from 'react-native';

export const PermissionsView = () => {
  const [permissionGranted, setPermissionGranted] = useState(false);
  useEffect(async () => {
    const granted = await requestCameraPermission();
    setPermissionGranted(granted);
  }, []);
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <Text>{`Permissions granted? ${permissionGranted}`}</Text>
    </View>
  );
};

async function requestCameraPermission() {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
      {
        title: 'Cool Photo App Camera Permission',
        message:
          'Cool Photo App needs access to your camera ' +
          'so you can take awesome pictures.',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('You can use the camera');
      return true;
    } else {
      console.log('Camera permission denied');
    }
  } catch (err) {
    console.warn(err);
  }
  return false;
}
