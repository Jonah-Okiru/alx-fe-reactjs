const UserProfile =(props)=>{
    return (
        <div style={{border:'1px solid gray', padding:'10px', margin:'10px'}}>
            <h2 style={{color:'greenyellow'}}>{props.name}</h2>
            <p>Age: <span style={{color:'blue'}}>{props.age}</span></p>
            <p>Bio: <span style={{color:'darkkhaki'}}>{props.bio}</span></p>
        </div>
    );
};
export default UserProfile;