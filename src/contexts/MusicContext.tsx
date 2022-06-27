//**CORE */
import { Asset } from "expo-media-library";
import { useContext, createContext, useState } from "react";
import { Audio } from "expo-av";

export type CurrentMusicTypes = {
  name: string;
  durationTotal: number;
  currentTimer: number;
  isPlay: boolean;
  uri: string;
};

type MusicContextTypes = {
  musicList: Asset[];
  setMusicList: React.Dispatch<React.SetStateAction<Asset[]>>,
  currentMusic: CurrentMusicTypes;
  setCurrentMusic: React.Dispatch<React.SetStateAction<CurrentMusicTypes>>;
  audioObject: Audio.Sound;
}

const MusicContext = createContext({} as MusicContextTypes);

type MusicProviderProps = {
  children: JSX.Element | JSX.Element[];
}

export function MusicProvider({ children }: MusicProviderProps) {
  const sound = new Audio.Sound();

  const [ musicList, setMusicList ] = useState([] as Asset[]);
  const [ currentMusic, setCurrentMusic ] = useState({} as CurrentMusicTypes);

  return (
    <MusicContext.Provider 
      value={{
        musicList,
        setMusicList,
        currentMusic,
        setCurrentMusic,
        audioObject: sound
      }}
    >
      { children }
    </MusicContext.Provider>
  )
};

export function useMusic() {
  return useContext(MusicContext);
};