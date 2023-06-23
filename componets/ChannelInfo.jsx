import React from 'react'
import { useYoutubeApi } from '../context/YoutubeApiContext'
import { useQuery } from '@tanstack/react-query';

const ChannelInfo = ({id, title}) => {
    const {youtube} = useYoutubeApi();
    const { data:url } = useQuery(['channels',id], () => youtube.channelImageURL(id))
    console.log('mac',url)

  return (
    <div className='flex my-4 items-center'>
        {url && <img src={url} alt={title} />}
        <p>{title}</p>
    </div>
  )
}

export default ChannelInfo