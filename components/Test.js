import { View, Text, Image, ScrollView, TextInput, StyleSheet } from 'react-native';
import { useState } from 'react';

export const Test = () => {
  const [text, setText] = useState('');

  const changeHandler = (value) => {
    setText(value);
  };

  return (
    <ScrollView style={{
      padding: 10
    }}>
      <Text>Hello Test with Image</Text>
      <View>
        <Text>Some more text</Text>
        <Image 
          source={require('../assets/test.jpg')}
          style={{
            width: 200, 
            height: 200,
            marginTop: 10,
            marginBottom: 10,
            backgroundColor: '#666',
          }}
        />
      </View>
      <TextInput 
        onChangeText={changeHandler}
        defaultValue="type your name..." 
        style={{
          height: 40,
          borderWidth: 1,
          borderColor: 'gray',
          padding: 5,
        }}
      />
      <Text>{text}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});