import { useQuery } from "react-query";
// define the fetch function that can be used to fetch data from API
const fetchData = async () =>{
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!res.ok){
        throw new Error("Network respose was not ok");
    }
        
    return res.json();

};
const PostsComponent = () => {
    // use the query hook to handle data fetching and caching
    const {data, error, isloading} = useQuery('fetchData', fetchData);
    // handle loading state
    if (isloading) return <div>Loading...</div>
    // handle error state
    if (error) return <div>Error loading: {error.message}</div>
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