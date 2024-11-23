import { useQuery } from "react-query";
// define the fetch function that can be used to fetch data from API
const fetchPosts = async () =>{
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!res.ok){
        throw new Error("Network respose was not ok");
    }
        
    return res.json();

};
const PostsComponent = () => {
    // use the query hook to handle data fetching and caching
    const {data, error, isError, isLoading} = useQuery(
        'fetchPosts', 
        fetchPosts,
        {
            cacheTime: 5*60*1000, // cache data for 5 minutes
            staleTime: 1*60*1000, // Consider data refresh for one minute
            refetchOnWindowFocus: false, // disable refetching on window focus
            keepPreviousData: true // keep previous data while refetching new data

        });
    // handle loading state
    if (isLoading) return <div>Loading...</div>
    // handle error state
    if (isError) return <div>Error loading: {error.message}</div>
    // Ensure data is an array before mapping
    if (!Array.isArray(data)) {
        return <div>No data available</div>;
    }
    // render the fetch data
    return (
        <div>
            {data.map(item =>(
                <div key={item.id}>{item.title}</div>
            ))}
            <button onClick={fetchPosts}>Refetch Data</button>
        </div>
    );
};
export default PostsComponent;