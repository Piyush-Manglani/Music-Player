import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect} from 'react';
import {artistData, topCategory} from '../utils/jsonData';
import Artist from '../components/Artist';
import TrackPlayer from 'react-native-track-player';

const Home = ({navigation}: any) => {
  const setupFunction = async () => {
    await TrackPlayer.setupPlayer();
  };

  useEffect(() => {
    setupFunction();
  }, []);

  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar barStyle={'light-content'} />
      <View style={styles.subContainer}>
        <Text style={styles.topArtist}>Top Artist's</Text>
        <FlatList
          data={artistData}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.artistId}
          renderItem={({item}) => (
            <>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('MusicList', item);
                }}
                style={styles.btn}>
                <Artist
                  artistImage={item.artistImage}
                  uniqueColor={item.uniqueColor}
                  artistName={item.artistName}
                  style={styles.topArtistContainer}
                />
              </TouchableOpacity>
            </>
          )}
        />
        <View style={{marginTop: 20}}>
          <Text style={styles.categoryHeading}>Top categories's</Text>
          <FlatList
            data={topCategory}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.categoryId}
            renderItem={({item}) => (
              <View
                style={[
                  styles.categoryContainer,
                  {backgroundColor: item.categoryColor},
                ]}>
                <Text style={styles.categoryName}>{item.categoryName}</Text>
              </View>
            )}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  mainContainer: {flex: 1, backgroundColor: 'black'},
  subContainer: {
    width: '100%',
    paddingLeft: '5%',
    marginTop: '5%',
  },
  topArtist: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
    letterSpacing: 2,
  },
  topArtistContainer: {
    height: 150,
    width: '100%',
    borderRadius: 10,
    position: 'relative',
  },
  btn: {
    width: 150,
    marginRight: 35,
    marginTop: 20,
  },
  categoryHeading: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
    letterSpacing: 2,
  },
  categoryContainer: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginRight: 35,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  categoryName: {color: 'white', fontWeight: 'bold', fontSize: 22},
});
