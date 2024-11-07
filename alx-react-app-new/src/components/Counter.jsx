import React, {useState} from "react";
// Define the counter function
function Counter(){
    // initialize the state using useState to keep track of the count
    const [count, setCount] = useState(0);
    // create the buttons for the counter options
    return(
        <div>
            <p>Current count: {count}</p>
            <button onClick={()=>{setCount(count+1)}}>Count Increement</button>
            <button onClick={()=>{setCount(0)}}>Reset Count</button>
            <button onClick={()=>{setCount(count-1)}}>Deacrease Count</button>
        </div>
    );
    
}
export default Counter;