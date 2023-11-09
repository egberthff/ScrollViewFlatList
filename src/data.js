import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Alert } from 'react-native';

const students = [
  { firstName: 'John', lastName: 'Doe', nickname: 'JD', course: 'BS Computer Science', year: '1st Year' },
  { firstName: 'Jane', lastName: 'Smith', nickname: 'JS', course: 'BS Information Technology', year: '2nd Year' },
  // add more students as needed
];

const Item = ({ item, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <Text>{item.nickname}</Text>
  </TouchableOpacity>
);

export default function App() {
  const renderItem = ({ item }) => (
    <Item
      item={item}
      onPress={() => Alert.alert(
        'Student Information',
        `First Name: ${item.firstName}\nLast Name: ${item.lastName}\nNickname: ${item.nickname}\nCourse: ${item.course}\nYear: ${item.year}`
      )}
    />
  );

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <FlatList
        data={students}
        renderItem={renderItem}
        keyExtractor={item => item.nickname}
      />
    </View>
  );
}
