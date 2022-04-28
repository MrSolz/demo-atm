import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import ApplicationNavigator from './navigation'
import { LoginScreen } from 'demo-authen-me';
export default function App() {
  const [result, setResult] = React.useState();

  React.useEffect(() => {
  }, []);

  return (
    <ApplicationNavigator />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
