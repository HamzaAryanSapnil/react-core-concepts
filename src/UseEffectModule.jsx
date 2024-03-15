import { useEffect, useState } from "react";

export default function UseEffectModule() {
  const [user, setuser] = useState([]);
  useEffect(() => {
    try {
      const fetchData = async () => {
        const url = "https://jsonplaceholder.typicode.com/users";
        const response = await fetch(url);
        const data = await response.json();
        setuser(data);
      }
      fetchData()
    } catch (error) {
      console.error(error);
    }
  }, []);
  console.log(user);
  return (
    <>
      <div>
        <h3>Users: {user?.length} </h3>
      </div>
    </>
  );
}
