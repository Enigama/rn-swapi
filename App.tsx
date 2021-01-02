import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import Navigation from "./src/navigation/Navigation";

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('./assets/bg-stars.png')}
                       style={styles.wallpaper}
      >
        <Navigation></Navigation>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  wallpaper: {
  width: '100%', height: '100%'
  }
});
