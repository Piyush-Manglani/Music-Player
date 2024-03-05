import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const Artist = ({artistImage, uniqueColor, artistName, style}: any) => {
  return (
    <>
      <View style={style}>
        <Image source={artistImage} style={styles.artistImage} />
        <View style={styles.artistNameContainer}>
          <View style={[styles.someDesign, {backgroundColor: uniqueColor}]} />
          <Text style={styles.artistName}>{artistName}</Text>
        </View>
        <View
          style={[styles.artistBottomBorder, {backgroundColor: uniqueColor}]}
        />
      </View>
      {/* <Text style={styles.artistNamebelow}>{artistName}</Text> */}
    </>
  );
};

export default Artist;

const styles = StyleSheet.create({
  artistImage: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  artistNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    bottom: 20,
    width: '100%',
  },
  artistName: {
    color: 'white',
    marginLeft: 10,
    fontSize: 20,
    fontWeight: 'bold',
    textShadowColor: 'black',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 10,
  },
  artistBottomBorder: {
    position: 'absolute',
    bottom: 0,
    height: 7,
    width: '100%',
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  someDesign: {
    height: 25,
    width: 7,
  },
  artistNamebelow: {
    color: 'gray',
    marginTop: 10,
    letterSpacing: 5,
    width: '100%',
  },
});
