import {
  SafeAreaView,
  ScrollView,
  View,
  FlatList,
  StyleSheet,
} from 'react-native';
import music from './music.json';
import {useState} from 'react';
import MusicCard from './components/MusicCard/MusicCard';
import SearchBar from './components/SearchBar/Searchbar';

const App = () => {
  const [list, setList] = useState(music);

  const renderSong = ({item}) => <MusicCard song={item} />;
  const renderComponents = () => <View style={styles.seperator} />;

  const handleSearch = text => {
    const filteredList = music.filter(song => {
      const searchText = text.toLowerCase();
      const currentTitle = song.title.toLowerCase();
    return  currentTitle.indexOf(searchText) > -1;
    });

    setList(filteredList);
  };

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar onSearch={handleSearch} />
      <FlatList
        keyExtractor={item => item.id}
        data={list}
        renderItem={renderSong}
        ItemSeparatorComponent={renderComponents}
      />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {flex: 1},
  seperator: {borderWidth: 1},
});
