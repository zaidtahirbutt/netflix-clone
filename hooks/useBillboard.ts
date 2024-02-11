import useSwr from 'swr';

import fetcher from '@/lib/fetcher';

const useBillboard = () => {
    const {data, error, isLoading} = useSwr('/api/random', fetcher, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false
    });

    console.log("inside useBillboards")
    console.log(data?.title)  // if no ? then it gives error

    return {
        data,
        error,
        isLoading
    }
}

export default useBillboard;