import React from 'react';
import {StyleSheet, View, Image, Text, ScrollView} from 'react-native';

const App = () => {
  return (
    <>
      {/* <View style={styles.contenedor}>
        <View style={styles.caja1} />
        <View style={styles.caja2} />
        <View style={styles.caja3} />
        <View style={styles.caja4} />
      </View> */}
      <ScrollView>
        <View style={{flexDirection: 'row'}}>
          <Image
            style={styles.banner}
            source={require('./assets/img/bg.jpg')}
          />
        </View>
        <View style={styles.container}>
          <Text style={styles.titulo}>What's up on Paris?</Text>
          <ScrollView horizontal>
            <View>
              <Image
                style={styles.ciudad}
                source={require('./assets/img/actividad1.jpg')}
              />
            </View>
            <View>
              <Image
                style={styles.ciudad}
                source={require('./assets/img/actividad2.jpg')}
              />
            </View>
            <View>
              <Image
                style={styles.ciudad}
                source={require('./assets/img/actividad3.jpg')}
              />
            </View>
            <View>
              <Image
                style={styles.ciudad}
                source={require('./assets/img/actividad4.jpg')}
              />
            </View>
            <View>
              <Image
                style={styles.ciudad}
                source={require('./assets/img/actividad5.jpg')}
              />
            </View>
          </ScrollView>
          <Text style={styles.titulo}>Best places</Text>
          <View>
          <View>
              <Image
                style={styles.mejores}
                source={require('./assets/img/mejores1.jpg')}
              />
            </View>
            <View>
              <Image
                style={styles.mejores}
                source={require('./assets/img/mejores2.jpg')}
              />
            </View>
            <View>
              <Image
                style={styles.mejores}
                source={require('./assets/img/mejores3.jpg')}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  mejores: {
    width: '95%',
    height: 100, 
    padding: 5

  },
  banner: {
    height: 250,
    flex: 1,
  },
  titulo: {
    fontSize: 20,
    fontWeight: '200',
  },
  container: {
    paddingTop: 20,
    paddingLeft: 20,
  },
  ciudad: {
    width: 250,
    height: 300,
    marginRight: 10,
    marginTop: 20,
  },
  // contenedor: {
  //   backgroundColor: '#ffcc99',
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
  // caja1: {
  //   backgroundColor: '#b3d9ff',
  //   padding: 20,
  //   flex: 1,
  // },
  // caja2: {
  //   backgroundColor: '#cc99ff',
  //   padding: 20,
  //   flex: 1,
  // },
  // caja3: {
  //   backgroundColor: '#9fdf9f',
  //   padding: 20,
  //   flex: 1,
  // },
  // caja4: {
  //   backgroundColor: '#ffff66',
  //   padding: 20,
  //   flex: 1,
  // },
});

export default App;
