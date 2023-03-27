import React from 'react';
import {TextInput, View} from 'react-native';
import styles from './SearchbarStyles';

const searchBar = props => {
  return (
    <View style={styles.textinput}>
      <TextInput placeholder="Ara.." onChangeText={props.onSearch} />
    </View>
  );
};

export default searchBar;
