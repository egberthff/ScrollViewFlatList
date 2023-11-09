import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Alert , StyleSheet, ScrollView} from 'react-native';
import {Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const students = [
  {"id":1,"first_name":"Isadora","last_name":"Willoughby","nick_name":"Yale","course":"BSIT","year":1},
  {"id":2,"first_name":"Olly","last_name":"Cashell","nick_name":"Rodolph","course":"BSIT","year":2},
  {"id":3,"first_name":"Clare","last_name":"Mathes","nick_name":"Nan","course":"BSIT","year":3},
  {"id":4,"first_name":"Ariana","last_name":"Towne","nick_name":"Brear","course":"BSIT","year":4},
  {"id":5,"first_name":"Mickey","last_name":"Roache","nick_name":"Dante","course":"BSIT","year":1},
  {"id":6,"first_name":"Irita","last_name":"Gatland","nick_name":"Miner","course":"BSIT","year":2},
  {"id":7,"first_name":"Sonny","last_name":"Wylie","nick_name":"Matty","course":"BSIT","year":3},
  {"id":8,"first_name":"Galvin","last_name":"Wimbridge","nick_name":"Kevan","course":"BSIT","year":4},
  {"id":9,"first_name":"Tommi","last_name":"Pencott","nick_name":"Patricio","course":"BSIT","year":1},
  {"id":10,"first_name":"Guglielma","last_name":"Flaunier","nick_name":"Gusty","course":"BSIT","year":2},
  {"id":11,"first_name":"Montgomery","last_name":"Pettiford","nick_name":"Tonnie","course":"BSIT","year":3},
  {"id":12,"first_name":"Karyn","last_name":"Vader","nick_name":"Elijah","course":"BSIT","year":4},
  {"id":13,"first_name":"Abbie","last_name":"Sweetzer","nick_name":"Chickie","course":"BSIT","year":1},
  {"id":14,"first_name":"Cassandra","last_name":"Gianotti","nick_name":"Cami","course":"BSIT","year":2},
  {"id":15,"first_name":"Delmor","last_name":"Burriss","nick_name":"Kev","course":"BSIT","year":3},
  {"id":16,"first_name":"Alfons","last_name":"Axton","nick_name":"Gavan","course":"BSIT","year":4},
  {"id":17,"first_name":"Cindy","last_name":"Murden","nick_name":"Martie","course":"BSIT","year":1},
  {"id":18,"first_name":"Willdon","last_name":"Feldfisher","nick_name":"Valerye","course":"BSIT","year":2},
  {"id":19,"first_name":"Yuri","last_name":"Bolland","nick_name":"Randie","course":"BSIT","year":3},
  {"id":20,"first_name":"Caesar","last_name":"Densell","nick_name":"Somerset","course":"BSIT","year":4},
 
];

const Item = ({ item, onPress }) => (
  <TouchableOpacity onPress={onPress} style = {styles.item}>
    <Text style = {{fontSize: 50}}>{item.nick_name}</Text>
  </TouchableOpacity>
);

export default function App() {
  const renderItem = ({ item }) => (
    <Item
      item={item}
      onPress={() => Alert.alert(
        'Student Information',
        `First Name: ${item.first_name}\nLast Name: ${item.last_name}\nNickname: ${item.nick_name}\nCourse: ${item.course}\nYear: ${item.year}`
      )}
    />
  );

  return (
    <ScrollView> 
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <FlatList
        data={students}
        renderItem={renderItem}
        keyExtractor={item => item.nick_name}
      />
       
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    width: windowWidth,
    height: windowHeight,
  },
  item: {
    fontSize: 18,
    borderColor: 'gray',
    borderStyle: 'solid',
    borderWidth: 1,
    width: windowWidth,
    //height: windowHeight,


  },
});
