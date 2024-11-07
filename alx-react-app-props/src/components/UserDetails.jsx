import { useContext } from "react";
import UserContext from "./UserContext";

function UserDetails() {
    const data = useContext(UserContext)
    return (
      <div>
        {data}
      </div>
    );
  }
  
  export default UserDetails;