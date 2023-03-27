import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './MusicCard.Styles';

const MusicCard = props => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: props.song.imageUrl}} />
      <View style={styles.inner}>
        <Text style={styles.title}>{props.song.title}</Text>
        <View style={styles.contentcontainer}>
          <View style={styles.info}>
            <Text>{props.song.artist}</Text>
            <Text style={styles.year}>{props.song.year}</Text>
          </View>
          {props.song.isSoldOut && (
            <View style={styles.soldout}>
              <Text style={styles.soldoutText}>Tükendi</Text>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

export default MusicCard;
