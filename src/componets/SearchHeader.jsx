import React, { useEffect, useState } from 'react'
import { AiFillYoutube,AiOutlineSearch } from "react-icons/ai";
import { IoPersonCircleOutline } from "react-icons/io5";
import { Link,useNavigate,useParams  } from "react-router-dom"
import { BsThreeDotsVertical } from "react-icons/bs";


const SearchHeader = () => {

const navigate = useNavigate()
const [text,setText] = useState('');
const {keyword} = useParams(); //키워드 이렇게 구조분해해서 할수있음

const handleSubmit = (e) =>{
      e.preventDefault();
      navigate(`/videos/${text}`);
      // setText('')//리셋
}

  //키워드가 변경될때마다 서치인풋의 텍스트가 안보이게//한마디로 홈으로 갔을때 안보이게를 이렇게 어렵게 주석을달아주셨네 어휴
useEffect(()=>{
      setText( keyword || '')
},[keyword])
      return (
            <>
            <div className="border-b border-zinc-500"> 
                  <div className='w-full max-w-screen-2xl m-auto'>
                        <header className='flex justify-between p-4'>
                              <Link to='/' className='flex items-center'>
                                    <AiFillYoutube className='text-7xl text-brand text-main'/>   
                                    <h1  className='hiiden sm:text-5xl font-LeagueGothic ml-3 tracking-wide'>Youtube</h1>
                                    <sup className='text-xs text-zinc-400 ml-2'>kr</sup>
                              </Link>
                              <form onSubmit={handleSubmit} className='flex justify-between border border-zinc-600 rounded-full pl-6 w-1/2 max-w-2xl '>
                                    <input 
                                          type="text" 
                                          placeholder='검색' 
                                          value={text}
                                          onChange={(e)=>setText(e.target.value)}
                                          className='bg-zinc-900 text-zinc-400 px-4 outline-0 rounded-full w-full'/>
                                          <button className='border-l border-zinc-600 px-6 bg-zinc-700 rounded-r-full'  >
                                          <AiOutlineSearch />
                                          </button>
                              </form>
                              <div className='hidden sm:flex items-center'>
                                    <BsThreeDotsVertical />
                                    <button className='flex items-center border border-zinc-600 rounded-full p-2 text-zinc-500 ml-4 hover:bg-sky-900'>
                                          <IoPersonCircleOutline/>
                                          <span className='text-sm pl-2'>로그인</span>
                                    </button>
                              </div>
                        </header>
                  </div>
            </div>
            </>
      )
}

export default SearchHeader