export const artistData = [
  {
    artistId: 'artist-001',
    artistName: 'AP Dhillon',
    artistImage: require('../../assets/apdhillon/images/apdhillon.png'),
    uniqueColor: '#f551b9',
  },
  {
    artistId: 'artist-002',
    artistName: 'Karan Aujla',
    artistImage: require('../../assets/karanaujla/images/admirinimage.png'),
    uniqueColor: '#09e8e1',
  },
];

export const topCategory = [
  {
    categoryId: 'category-001',
    categoryName: 'English',
    categoryColor: '#15523c',
  },
  {
    categoryId: 'category-002',
    categoryName: 'Punjabi',
    categoryColor: '#734706',
  },
  {
    categoryId: 'category-003',
    categoryName: 'Hindi',
    categoryColor: '#043575',
  },
];

export const artistSong: any = {
  'artist-001': [
    {
      id: 'songid-001',
      url: require('../../assets/apdhillon/audios/Brown-Munde.mp3'),
      videourl: require('../../assets/apdhillon/videos/Brown-Munde.mp4'),
      artwork: require('../../assets/apdhillon/images/Brown-Munde.png'),
      title: 'Brown Munde',
      artist: 'AP Dhillon',
    },
    {
      id: 'songid-002',
      url: require('../../assets/apdhillon/audios/Excuses.mp3'),
      videourl: require('../../assets/apdhillon/videos/Excuses.mp4'),
      artwork: require('../../assets/apdhillon/images/Excuses.png'),
      title: 'Excuses',
      artist: 'AP Dhillon',
    },
    {
      id: 'songid-003',
      url: require('../../assets/apdhillon/audios/With-You.mp3'),
      videourl: require('../../assets/apdhillon/videos/With-You.mp4'),
      artwork: require('../../assets/apdhillon/images/withyou.png'),
      title: 'With You',
      artist: 'AP Dhillon',
    },
  ],
  'artist-002': [
    {
      id: 'songid-001',
      url: require('../../assets/karanaujla/audios/Admirin-You.mp3'),
      videourl: require('../../assets/karanaujla/videos/Admirin-You.mp4'),
      artwork: require('../../assets/karanaujla/images/admirinimage.png'),
      title: 'Admirin You',
      artist: 'karan aujla',
    },
    {
      id: 'songid-002',
      url: require('../../assets/karanaujla/audios/Softly.mp3'),
      videourl: require('../../assets/karanaujla/videos/Softly.mp4'),
      artwork: require('../../assets/karanaujla/images/softly.png'),
      title: 'Softly',
      artist: 'karan aujla',
    },
    {
      id: 'songid-003',
      url: require('../../assets/karanaujla/audios/On-Top.mp3'),
      videourl: require('../../assets/karanaujla/videos/On-Top.mp4'),
      artwork: require('../../assets/karanaujla/images/on-top.png'),
      title: 'On Top',
      artist: 'karan aujla',
    },
  ],
};
