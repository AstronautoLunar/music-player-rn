/**CORE */
import { useEffect, useState } from "react";
import { getAssetsAsync, requestPermissionsAsync, Asset } from "expo-media-library";
import { Audio } from "expo-av";

/**COMPONENTS */
import { Screen, ListItemMusics } from "./styles";
import { ItemMusic } from "../../components";

/**CONTEXTS */
import { useMusic, CurrentMusicTypes } from "../../contexts/MusicContext";

const MusicsScreen = () => {
  // const [assets, setAssets] = useState([] as Asset[]);
  const { audioObject, currentMusic, musicList, setMusicList } = useMusic();

  async function getAssetsAll() {
    const result = await getAssetsAsync({
      mediaType: 'audio',
    });

    setMusicList(result.assets);
  }

  async function playMusicCurrent(currentMusic: CurrentMusicTypes) {
    try {
      if (currentMusic.uri) {
        await audioObject.unloadAsync();
        
        await audioObject.loadAsync({
          uri: currentMusic.uri
        });
  
        await audioObject.playAsync();
  
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    requestPermissionsAsync()
    getAssetsAll();
  }, []);

  useEffect(() => {
    playMusicCurrent(currentMusic);
  }, [ currentMusic ]);
  
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