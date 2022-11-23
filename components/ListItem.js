import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const ListItem = ({item, deleteItem}) => {
  return (
    <TouchableOpacity style={styles.listItem}>
      <View style={styles.listView}>
        <Text style={styles.listName}>{item.name}</Text>
        {/* <Icon name='remove' size={20} color='firebrick' onPress={() => deleteItem(item.id)} /> */}
        <Text style={styles.cancel} onPress={() => deleteItem(item.id)}>
          x
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 15,
    backgroundColor: '#f8f8f8',
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
  },
  listView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  listName: {
    fontSize: 18,
  },
  cancel: {
    color: 'brickred',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default ListItem;
