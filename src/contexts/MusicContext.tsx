//**CORE */
import { Asset } from "expo-media-library";
import { useContext, createContext, useState, useEffect } from "react";
import { Audio, AVPlaybackStatus } from "expo-av";

export type CurrentMusicTypes = {
  id: string;
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
  soundStatus: AVPlaybackStatus;
  setSoundStatus: React.Dispatch<React.SetStateAction<AVPlaybackStatus>>;
}

const MusicContext = createContext({} as MusicContextTypes);

type MusicProviderProps = {
  children: JSX.Element | JSX.Element[];
}

export function MusicProvider({ children }: MusicProviderProps) {
  const sound = new Audio.Sound();

  const [ soundStatus, setSoundStatus ] = useState({} as AVPlaybackStatus);
  const [ musicList, setMusicList ] = useState([] as Asset[]);
  const [ currentMusic, setCurrentMusic ] = useState({} as CurrentMusicTypes);
  
  return (
    <MusicContext.Provider 
      value={{
        musicList,
        setMusicList,
        currentMusic,
        setCurrentMusic,
        audioObject: sound,
        soundStatus,
        setSoundStatus
      }}
    >
      { children }
    </MusicContext.Provider>
  )
};

export function useMusic() {
  return useContext(MusicContext);
};