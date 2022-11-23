import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const AddItem = ({addItem}) => {
  const [name, setName] = useState('');
  let textInput = '';

  const onChange = text => {
    setName(text);
  };

  const addName = () => {
    addItem(name);
    setName('');
    textInput.clear();
  };
  return (
    <View>
      <TextInput
        editable
        maxLength={40}
        style={styles.input}
        onChangeText={onChange}
        clearButtonMode="always"
        placeholder="Add new item..."
        ref={input => {
          textInput = input;
        }}
      />
      <TouchableOpacity style={styles.button} onPress={addName}>
        <Text style={styles.buttonText}>Add Item + </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 60,
    padding: 8,
    fontSize: 16,
    borderColor: 'purple',
    borderWidth: 1,
  },
  button: {
    backgroundColor: '#c2bad8',
    padding: 9,
    margin: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: 'darkslateblue',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default AddItem;
