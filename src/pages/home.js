import * as React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button
        title='Ir para Detalhes'
        onPress={() => navigation.navigate('Details')}
      />
      <Button
        title='Ir para Filmes'
        onPress={() => navigation.navigate('Movies')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;
