import React from 'react'
import { useYoutubeApi } from '../context/YoutubeApiContext'
import { useQuery } from '@tanstack/react-query';
import VideoCard from './VideoCard';

const RelatedVideos = ({id}) => {
    const { youtube } = useYoutubeApi();
    const {
        isLoading,
        error,
        data:videos
    } = useQuery(['videos',id], ()=> youtube.relatedVideos(id))



  return (
    <>
      {isLoading && <p>data Loading...</p>}
      {error && <p>videos json data Error ⚠️</p>}
      {videos && (
        <ul className=''>
          {videos.map((video)=>(
            <VideoCard key={video.id} id={video.id} video={video}/>
          ))}
        </ul>
      )}
    </>
  )
}

export default RelatedVideos