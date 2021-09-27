import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  Text,
  StyleSheet
} from 'react-native';
import SongCard from './components/SongCard'
import data from './store/db.json'
function App() {
  const renderSong = ({ item }) => <SongCard song={item} />
  const renderSeperator = () =>  <View style={styles.seperator} />
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <FlatList
          keyExtractor={(item) => item.id}
          data={data}
          renderItem={renderSong}
          ItemSeparatorComponent={renderSeperator}
        />
      </View>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  seperator:{
    borderWidth:1,
    borderColor: '#e0e0e0'
  }
});

export default App;
