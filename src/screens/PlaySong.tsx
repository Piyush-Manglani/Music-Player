import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Video from 'react-native-video';
import TrackPlayer, {useProgress, RepeatMode} from 'react-native-track-player';
import Slider from '@react-native-community/slider';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Octicons from 'react-native-vector-icons/Octicons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import LinearGradient from 'react-native-linear-gradient';
import {useIsFocused} from '@react-navigation/native';

const PlaySong = ({route}: any) => {
  const [isPlay, setIsPlay] = useState(false);
  let {position, duration} = useProgress(200);
  const [change, setChange] = useState<any>({});
  const [thumbIcon, setThumbIcon] = useState();

  const isFocused = useIsFocused();

  const setup = async () => {
    await TrackPlayer.reset();
    await TrackPlayer.add(route.params.wholeList);
    await TrackPlayer.skip(route.params.index);

    setChange(route.params.currentSong);

    // check();
    setIsPlay(true);

    await TrackPlayer.setRepeatMode(RepeatMode.Queue);
  };

  function format(seconds: any) {
    let mins = parseInt((seconds / 60).toString(), 10)
      .toString()
      .padStart(2, '0');
    let secs = (Math.trunc(seconds) % 60).toString().padStart(2, '0');
    if (Number(mins) < 10) {
      mins = mins.toString().slice(-1); // Remove leading zero
    } else {
      mins = mins.toString();
    }
    return `${mins}:${secs}`;
  }

  const start = async () => {
    await TrackPlayer.play();
  };

  const pause = async () => {
    await TrackPlayer.pause();
  };

  useEffect(() => {
    Octicons.getImageSource('dot-fill', 25, 'white').then(setThumbIcon);
  }, []);

  const playSong = () => {
    setIsPlay(!isPlay);
  };

  useEffect(() => {
    if (isPlay) {
      start();
    } else {
      pause();
    }
  }, [isPlay]);

  const songComplete = async () => {
    const change1 = await TrackPlayer.getActiveTrack();
    setChange(change1);
  };

  useEffect(() => {
    if (isFocused) {
      setup();
    }
  }, [isFocused]);

  useEffect(() => {
    songComplete();
  }, [duration]);

  return (
    <View style={{flex: 1}}>
      <StatusBar translucent />
      <Video
        source={change?.videourl}
        resizeMode="cover"
        muted={true}
        style={styles.backgroundVideo}
      />
      <LinearGradient
        colors={['rgba(0,0,0,0.5)', 'rgba(0,0,0,0.5)', 'rgba(0,0,0,1)']}
        style={styles.overlay}
      />
      <View style={styles.runningContainer}>
        <Text style={styles.title}>{change?.title}</Text>
        <Text style={styles.artistName}>{change?.artist}</Text>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={duration}
          value={position}
          minimumTrackTintColor="white"
          maximumTrackTintColor="#424242"
          tapToSeek={true}
          onValueChange={async value => {
            await TrackPlayer.seekTo(value);
          }}
          thumbImage={thumbIcon}
        />
        <View style={styles.durationContainer}>
          <Text style={{color: '#bfbfbf'}}>{format(position)}</Text>
          <Text style={{color: '#bfbfbf'}}>{format(duration)}</Text>
        </View>
        <View style={styles.manageContainer}>
          <TouchableOpacity onPress={() => TrackPlayer.skipToPrevious()}>
            <FontAwesome6 name="backward-step" size={30} color="white" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => playSong()} style={styles.playBtn}>
            {isPlay ? (
              <AntDesign name="pause" size={40} color="black" />
            ) : (
              <Entypo name="controller-play" size={40} color="black" />
            )}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => TrackPlayer.skipToNext()}>
            <FontAwesome6 name="forward-step" size={30} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default PlaySong;

const styles = StyleSheet.create({
  backgroundVideo: {
    flex: 1,
    position: 'relative',
  },
  overlay: {position: 'absolute', width: '100%', height: '100%'},
  runningContainer: {
    position: 'absolute',
    bottom: 20,
    width: '95%',
    alignSelf: 'center',
  },
  title: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
  },
  artistName: {
    color: 'gray',
    fontSize: 18,
    marginTop: 5,
    fontWeight: '400',
  },
  slider: {
    width: '100%',
    height: 40,
    marginTop: 30,
  },
  durationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  manageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 30,
    width: 300,
    alignSelf: 'center',
  },
  playBtn: {
    width: 70,
    height: 70,
    borderRadius: 70,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
