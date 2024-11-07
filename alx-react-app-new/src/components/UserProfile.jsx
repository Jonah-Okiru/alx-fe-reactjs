const UserProfile =(props)=>{
    return (
        <div style={{border:'0.1em solid gray', padding:'0.5em', margin:'o.5em'}}>
            <h2 style={{color:'greenyellow'}}>{props.name}</h2>
            <p style={{color:'blue'}}>Age: {props.age}</p>
            <p style={{color:'darkkhaki'}}>Bio: {props.bio}</p>
        </div>
    );
};
export default UserProfile;