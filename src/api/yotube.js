// import axios from 'axios';


export default class Youtube {
    constructor(apiClient){
        this.apiClient = apiClient;
    }
    // constructor(){
    //     this.httpClient = 
        // axios.create({
        //     baseURL :'https://youtube.googleapis.com/youtube/v3',
        //     params:{ key:process.env.REACT_APP_YOUTUBE_API_KEY }
        // })
    
    // }

    async search(keyword){
        return keyword ? this.#searchByKeyword(keyword) : this.#popular()
    }

// channel info call function
    async channelImageURL(id) {
        return this.httpClient
        .channels({
            params: {
            part: 'snippet',
            id
            }
        })
        .then((res) => res.data.items[0].snippet.thumbnails.default.url);
    }
    //channel info call function
    async relatedVideos(id){
        return this.apiClient
        .search({
            params:{
                part:'snippet',
                maxResult:25,
                typ:'video',
                relatedToVideoId:id
            }})
            .then((res)=>res.data.items) 
            .then((items)=>items.map((item)=>({...item, id:item.id.videoid})
            )) 
    }


    //배열 내부에 배열이 또있으므로 id값을 내부에 id값으로 변경하기위해서 작동
    async #searchByKeyword(keyword){
        return this.apiClient
        .search({
            params:{
                part:'snippet',
                maxResults: 25,
                type:'video',
                q:keyword,
            }})
        .then((res)=>res.data.items) 
        .then((items)=>items.map((item)=>({...item, id:item.id.videoid})
        )) 
    }

    async #popular(){
        return this.apiClient
        .videos({
                params:{
                    part:'snippet',
                    maxResults: 25,
                    chart: 'mostPopular',
                }})
        .then((res)=>res.data.items) 
    }
}


