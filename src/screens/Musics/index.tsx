/**CORE */
import { useEffect, useState } from "react";
import { getAssetsAsync, requestPermissionsAsync, Asset } from "expo-media-library";
import { Audio, AVPlaybackStatus } from "expo-av";

/**COMPONENTS */
import { Screen, ListItemMusics } from "./styles";
import { ItemMusic } from "../../components";

/**CONTEXTS */
import { useMusic, CurrentMusicTypes } from "../../contexts/MusicContext";

type MediaPlayerTypes = {
  sound: Audio.Sound;
  status: AVPlaybackStatus;
  mode: "play" | "pause";
}

const MusicsScreen = () => {
  const [ isPlayMusic, setIsPlayMusic ] = useState(false);
  const { 
    currentMusic, 
    musicList, 
    setMusicList,
  } = useMusic();
  const [ mediaPlayer, setMediaPlayer ] = useState({ 
    sound: new Audio.Sound(),
    status: {},
    mode: "pause"
  } as MediaPlayerTypes);

  async function getAssetsAll() {
    const result = await getAssetsAsync({
      mediaType: 'audio',
    });

    setMusicList(result.assets);
  }

  const sound = new Audio.Sound();

  async function pauseMusicCurrent() {
    try {
      await mediaPlayer.sound.setStatusAsync({
        shouldPlay: false
      });

      const status = await mediaPlayer.sound.unloadAsync();

      return setMediaPlayer({
        sound,
        status,
        mode: "pause"
      });
    } catch (error) {
      console.log(error);
    }
  }

  async function playMusicCurrent() {
    try {
      const status = await sound.loadAsync({
        uri: currentMusic.uri,
      }, {
        shouldPlay: true
      });
      
      return setMediaPlayer({
        sound,
        status,
        mode: "play"
      });
    } catch (error) {
      console.log(error);
    }
  }

  async function toggleModeMediaPlayer() {
    console.log(mediaPlayer.mode);

    if (mediaPlayer.mode === "play") {
      await pauseMusicCurrent();
    } else {
      await playMusicCurrent();
    }
  }

  useEffect(() => {
    requestPermissionsAsync()
    getAssetsAll();
  }, []);

  useEffect(() => {
    toggleModeMediaPlayer();
  }, [ currentMusic.id ]);
  
  return (
    <Screen>
      <ListItemMusics
        showsVerticalScrollIndicator={false}
        data={musicList}
        keyExtractor={(_item, index) => String(index)}
        renderItem={({ item }: any) => (
          <ItemMusic
            { ...item }
          />
        )}
      />
    </Screen>
  )
};

export default MusicsScreen;