import { createContext, useContext } from "react";
// import FakeYoutube from "../api/fakeYoutubeClient";
import Youtube from "../api/yotube";
import YoutubeClient from "../api/youtubeClient";
// import FakeYoutubeClient from "../api/fakeYoutubeClient";

export const YoutubeApiContext = createContext();
    const client = new FakeYoutubeClient();
    // const client = new YoutubeClient(); 
    const youtube = new Youtube(client);
    // const youtube = new FakeYoutube();
    console.log(youtube)

export function YoutubeApiProvider({children}){
    return(
        <YoutubeApiContext.Provider value={{youtube}}>
            {children}
        </YoutubeApiContext.Provider>
    )
}

export function useYoutubeApi(){
    return useContext(YoutubeApiContext)
}
