import React from 'react';
import { formatAgo } from '../utli/date';
import { useNavigate } from 'react-router-dom';
// import {format, register} from 'timeago.js'
// import koLocale from 'timeago.js/lib/lang/ko'
// //nodejs 파일연결 >  timeago.js(timeago API)/lib(라이브러리)/lang(언어팩)/ko(한국어)


const VideoCard = ({video, id}) => {

  const { title, channelTitle, publishedAt } = video.snippet //data root
  const { high } = video.snippet.thumbnails //data img root
  // register('ko',koLocale)

  const navigate = useNavigate()

  return (
    <li className='cursor-pointer' onClick={()=>{navigate(`/videos/watch/${video.id}`, {state:{video}})}}>
      {/* navigate = > 연결될 페이지 root 주소, option (state:{전달할 인자}) -> 페이지 연결 및 인자전달까지 가능 */}
      <img className='w-full rounded-lg'  src={high.url} alt={title} />
      <div>
        <p className='text-lg mb-2 leading-5'>{title}</p>
        <p className='text-sm opacity-70'>{channelTitle}</p>
        <p className='text-sm opacity-50'>{formatAgo(publishedAt, 'ko')}</p>
        {/* <p>{format(publishedAt, 'ko')}</p> */}
      </div>
    </li>
  )
}

export default VideoCard