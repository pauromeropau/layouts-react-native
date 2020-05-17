import React from 'react';
import {StyleSheet, View, Text, SafeAreaView} from 'react-native';

const App = () => {
  return (
    <>
      <View style={styles.contenedor}>
        <View style={styles.caja1} />
        <View style={styles.caja2} />
        <View style={styles.caja3} />
        <View style={styles.caja4} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: '#ffcc99',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  caja1: {
    backgroundColor: '#b3d9ff',
    padding: 20,
    flex: 1,
  },
  caja2: {
    backgroundColor: '#cc99ff',
    padding: 20,
    flex: 1,
  },
  caja3: {
    backgroundColor: '#9fdf9f',
    padding: 20,
    flex: 1,
  },
  caja4: {
    backgroundColor: '#ffff66',
    padding: 20,
    flex: 1,
  },
});

export default App;
