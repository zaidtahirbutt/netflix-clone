import React from 'react';
import { useRouter } from 'next/router';
import useMovie from '@/hooks/useMovie';
import { AiOutlineArrowLeft } from 'react-icons/ai';

// console.log("testing222");  //This console output comes in browser log ctrl+E
// console.log(movieId);
// const { data } = useMovie(movieId as string);
// console.log("Title");
// console.log(data.title);  // undefined

const Watch = () => {
    const router = useRouter();

    const { movieId } = router.query;
    console.log("testing222");  //This console output comes in browser log ctrl+E
    console.log(movieId);
    const { data } = useMovie(movieId as string);
    // console.log("inside watch movieId");
    // console.log(data?.title);  // undefined
    return (
        <div className='h-screen w-screen bg-black'>
            <nav className='
                fixed
                w-full
                p-4 
                z-10
                flex
                flex-row
                items-center
                gap-8
                bg-black
                bg-opacity-70
            '>
                <AiOutlineArrowLeft onClick={() => router.push('/')} className='text-white cursor-pointer' size={40}/>
                <p className='text-white text-1xl md:text-3xl font-bold'>
                    <span className='font-light'>
                    Watching:
                    </span>
                    {data?.title}
                </p>
            </nav>
            <video 
                autoPlay
                controls
                className='h-full w-full'
                src={data?.videoUrl}>
            </video>
        </div>
    )
}

export default Watch;
