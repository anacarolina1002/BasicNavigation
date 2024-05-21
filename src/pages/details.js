import * as React from 'react';
import { View, Text, Button } from 'react-native';

export default function DetailScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Detail Screen</Text>
        <Button
          title='Voltar para Home'
          onPress={() => navigation.goBack()}
        />
      </View>
    );
  }