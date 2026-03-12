import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.row}>
        <View style={[styles.box, styles.blue]} />
        <View style={[styles.box, styles.green]} />
        <View style={[styles.box, styles.yellow]} />
      </View>

      <View style={styles.row}>
        <View style={[styles.box, styles.white]} />
        <View style={[styles.box, styles.green]} />
        <View style={[styles.box, styles.yellow]} />
      </View>

      <View style={styles.row}>
        <View style={[styles.box, styles.white]} />
        <View style={[styles.box, styles.white]} />
        <View style={[styles.box, styles.yellow]} />
      </View>

      <StatusBar style="auto" />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  row: {
    flex: 1,
    flexDirection: 'row',
  },

  box: {
    flex: 1,
  },

  blue: {
    backgroundColor: 'blue',
  },

  green: {
    backgroundColor: 'green',
  },

  yellow: {
    backgroundColor: 'orange',
  },

  white: {
    backgroundColor: '#eee',
  },
});