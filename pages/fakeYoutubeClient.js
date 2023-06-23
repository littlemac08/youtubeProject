import axios from 'axios';


export default class FakeYoutubeClient {
    constructor(){}



    async search({params}){        
        // return params.relatedToVideoId 
        // ? axios.get('/videos/related.json')
        // : axios.get('/videos/search.json')
        return axios.get(`/videos/${params.relatedToVideoId ? 'related' : 'search'}.json`);
    }

    async videos(){
        return axios
        .get('/videos/popular.json')
    }

    async channelImageURL(){
        return axios
        .get('/videos/channel.json')
    }
}
