/**CORE */
import { useEffect, useState } from "react";
import { getAssetsAsync, requestPermissionsAsync, Asset } from "expo-media-library";

/**COMPONENTS */
import { Screen, ListItemMusics } from "./styles";
import { ItemMusic } from "../../components";

/**CONTEXTS */
import { useMusic, CurrentMusicTypes } from "../../contexts/MusicContext";

const MusicsScreen = () => {
  const [ isPlayMusic, setIsPlayMusic ] = useState(false);
  const { 
    audioObject, 
    currentMusic, 
    musicList, 
    setMusicList,
    soundStatus,
    setSoundStatus
  } = useMusic();

  async function getAssetsAll() {
    const result = await getAssetsAsync({
      mediaType: 'audio',
    });

    setMusicList(result.assets);
  }

  async function playMusicCurrent(currentMusic: CurrentMusicTypes) {
    try {
      if (!soundStatus.isLoaded) {
        const status = await audioObject.loadAsync({
          uri: currentMusic.uri,
        }, {
          shouldPlay: true
        });
        

        setSoundStatus(status);

      } else {
        console.log("Passou");

        audioObject.stopAsync();
        await audioObject.setStatusAsync({
          shouldPlay: false
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  // async function pauseMusicCurrent() {
  //   try {
  //     await audioObject.stopAsync();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  useEffect(() => {
    requestPermissionsAsync()
    getAssetsAll();
  }, []);

  useEffect(() => {
    playMusicCurrent(currentMusic);
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