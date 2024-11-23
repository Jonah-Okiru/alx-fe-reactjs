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
    const {data, isError, isLoading} = useQuery('fetchPosts', fetchPosts);
    // handle loading state
    if (isLoading) return <div>Loading...</div>
    // handle error state
    if (isError) return <div>Error loading: {isError.message}</div>
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
        </div>
    );
};
export default PostsComponent;