import crashlytics from '@react-native-firebase/crashlytics';
import React, {useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

export default function App() {
  const [enabled, setEnabled] = useState(
    crashlytics().isCrashlyticsCollectionEnabled,
  );

  async function toggleCrashlytics() {
    await crashlytics()
      .setCrashlyticsCollectionEnabled(!enabled)
      .then(() => setEnabled(crashlytics().isCrashlyticsCollectionEnabled));
  }

  return (
    <View style={styles.container}>
      <Button title="Toggle Crashlytics" onPress={toggleCrashlytics} />
      <Button title="Crash" onPress={() => crashlytics().crash()} />
      <Text>Crashlytics is currently {enabled ? 'enabled' : 'disabled'}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
