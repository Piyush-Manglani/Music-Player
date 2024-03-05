import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Artist from '../components/Artist';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import {artistSong} from '../utils/jsonData';
import TrackPlayer, {RepeatMode, isPlaying} from 'react-native-track-player';

const listOfSongs = (artistId: string) => {
  return artistSong[artistId];
};

const MusicList = ({route, navigation}: any) => {
  const [list, setList] = useState([]);

  useEffect(() => {
    if (route.params.artistId) {
      setList(listOfSongs(route.params.artistId));
    }
  }, [route.params.artistId]);

  const renderItem = ({item, index}: any) => {
    return (
      <TouchableOpacity
        style={styles.particularSongContainer}
        onPress={() => {
          navigation.navigate('PlaySong', {
            index: index,
            currentSong: item,
            wholeList: list,
          });
        }}>
        <View style={styles.imageContainer}>
          <Image source={item.artwork} style={styles.image} />
        </View>
        <View style={{width: '72%'}}>
          <Text style={styles.title}>{item.title}</Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={{backgroundColor: '#acb0ad', paddingHorizontal: 4}}>
              <Text style={styles.lyrics}>LYRICS</Text>
            </View>
            <Text style={{color: 'gray', marginLeft: 10}}>{item.artist}</Text>
          </View>
        </View>
        <View>
          <Entypo name="dots-three-vertical" color="gray" size={25} />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <LinearGradient
      colors={['#734706', '#1c1b1b', '#000000']}
      style={styles.linearGradient}>
      <SafeAreaView>
        <View style={styles.mainContainer}>
          <View style={styles.subContainer}>
            <TouchableOpacity
              style={{width: '15%'}}
              onPress={() => navigation.goBack()}>
              <Ionicons name="arrow-back" size={25} color="white" />
            </TouchableOpacity>
            <View style={styles.artistImageContainer}>
              <Artist
                artistImage={route.params.artistImage}
                uniqueColor={route.params.uniqueColor}
                artistName={route.params.artistName}
                style={styles.topArtistContainer}
              />
            </View>
            <View style={{width: '15%'}} />
          </View>
          {/* list of songs */}
          <View style={{marginTop: 30}}>
            <FlatList
              data={list}
              keyExtractor={(item, index) => index.toString()}
              renderItem={renderItem}
            />
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default MusicList;

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
  mainContainer: {
    width: '90%',
    alignSelf: 'center',
  },
  topArtistContainer: {
    height: 250,
    width: '100%',
    borderRadius: 10,
    position: 'relative',
  },
  subContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  particularSongContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 25,
  },
  imageContainer: {width: 50, height: 50, borderRadius: 10},
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    borderRadius: 10,
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  lyrics: {
    color: 'black',
    fontSize: 10,
    letterSpacing: 2,
  },
  artistImageContainer: {
    width: '60%',
    shadowColor: 'black',
    shadowOffset: {width: 30, height: 30},
    shadowRadius: 5,
    shadowOpacity: 0.2,
  },
});
