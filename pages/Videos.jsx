import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query';
import VideoCard from '../componets/VideoCard';
// import Youtube from '../api/yotube'
import FakeYoutube from '../api/fakeYoutubeClient';
import { useYoutubeApi } from '../context/YoutubeApiContext';
// import { YoutubeApiContext } from '../context/YoutubeApiContext';


const Videos = () => {
  const {keyword} = useParams();
  // const ctx = useContext(YoutubeApiContext);
  const {youtube} = useYoutubeApi();
  //const aa = useParams();
  //const bb = aa.keyword;
  // useParams => call object, and if use the data exchange to object -> keyword
  const { isLoading, error, data:videos } = useQuery(['videosCache',keyword],async ()=>
    // // const youtube = new Youtube();
    // const youtube = new FakeYoutube();
    await youtube.search(keyword)

  // async () => {
  //     return axios.get(`/videos/${keyword ? 'search' : 'popular'}.json`)
  //     .then((res)=>res.data.items) 
      // return fetch(`/videos/${keyword ? 'search' : 'popular'}.json`)
      // .then((res)=>res.json()) 
      // .then((aa) =>aa.items)
      // }
  )
      // console.log('data???',videos)
/*
  //useQuery basic code
  const { isLoading, error, data } = useQuery([cacheKey],fnc(fetch),options);
*/

  return (
    <div className='w-full max-w-screen-2xl m-auto'>
      <div>{keyword ? `${keyword} 키워드를 가지고있습니다` : `Main Page 입니다`}</div>
      {isLoading && <p>data Loading...</p>}
      {error && <p>videos json data Error ⚠️</p>}
      {videos && (
        <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-4 gap-y-6 p-4'>
          {videos.map((video)=>(
            <VideoCard key={video.id} id={video.id} video={video}/>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Videos