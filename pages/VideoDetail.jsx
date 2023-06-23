import React from 'react'
import { useLocation } from 'react-router-dom'
import ChannelInfo from '../componets/ChannelInfo';
import RelatedVideos from '../componets/RelatedVideos';

const VideoDetail = () => {
  const {state:{video}} = useLocation();
  const {title, description, channelTitle, channelId} = video.snippet;

  console.log(video)

  return (
    <section className='flex flex-col lg:flex-row p-4 gap-x-4'>
      <article className='basis-2/3'>
      <iframe id="player" type="text/html" width="100%" height="640"
        src={`http://www.youtube.com/embed/${video.id}`}/>
        <div>
          <h2 className='text-xl font-bold pt-2'>{title}</h2>
          <ChannelInfo id={channelId} title={channelTitle}/>
          <div>
            <pre className='whitespace-pre-wrap'>{description}</pre>
          </div>
        </div>
      </article>
      <aside className='basis-1/3'>
        <RelatedVideos id={channelId}/>
      </aside>
    </section>
  )
}

export default VideoDetail