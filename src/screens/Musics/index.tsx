/**CORE */
import { useEffect, useState } from "react";
import { getAssetsAsync, requestPermissionsAsync, Asset } from "expo-media-library";
import { Audio } from "expo-av";

/**COMPONENTS */
import { Screen, ListItemMusics } from "./styles";
import { ItemMusic } from "../../components";

// type ListRenderItemsProps = {
//   item: Asset;
// }

const MusicsScreen = () => {
  const [assets, setAssets] = useState([] as Asset[]);

  async function getAssetsAll() {
    const result = await getAssetsAsync({
      mediaType: 'audio',
      
    });

    console.log(result.assets);

    setAssets(result.assets);
  }

  useEffect(() => {
    requestPermissionsAsync()
    getAssetsAll();
  }, []);
  
  return (
    <Screen>
      <ListItemMusics
        data={assets}
        keyExtractor={(item, index) => String(index)}
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