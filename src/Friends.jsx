import { useEffect, useState } from "react";
import "./Friends.css"
import Friend from "./Friend";
export default function Friends() {
    const [friends, setFriends] = useState([]);
    useEffect(() => {
      try {
        const url = "https://jsonplaceholder.typicode.com/users";
        const fetchData = async () => {
            const res = await fetch(url);
            const data = await res.json();
            setFriends(data);
        }
        fetchData();
      } catch (error) {
        console.error(error);
        
      }
    
      
    }, [])
    
    
    return(
        <>
        <div className="box">
            <h3>Friends: {friends.length} </h3>
            {
                friends.map( friend => <Friend friend= {friend} ></Friend>)
            }
        </div>
        </>
    )
}