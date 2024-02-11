import useSwr from 'swr'
import fetcher from '@/lib/fetcher';

// error was here.. I was doing useSwr instead of useSWR .. nahh error is still here

// we can send a movieId string here or empty string 
  // if movieId string is sent then "Dynamic Handling" will and that particular movie will be extracted from DB
  // if empty string is sent then index.js will be used under movies folder
const useMovie = (id?: string) => {
  const { data, error, isLoading } = useSwr(id ? `/api/movies/${id}` : null, fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  console.log("inside useMovie")
  console.log(id) // id is coming out but data.title is undefined
    // 6472e6daa2272c3575784f6e
  console.log(data?.title)  // if no ? then it gives error
    // getting undefined here
    console.log("error = ")
    console.log(error)


  return {
    data,
    error,
    isLoading
  }
};

export default useMovie;