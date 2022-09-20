import React, { useState } from "react";
import useSWR from "swr";

const fetcher = async () => {
   try {
      const response = await fetch("http://localhost:3000/api/users");
      const data = await response.json();
      return data;
   } catch (error) {
      return error;
   }
};

const Home = () => {
   const [isFetch, setIsFetch] = useState(false);
   const { data = [], error } = useSWR(isFetch ? "api/users" : null, fetcher);

   return (
      <div>
         <h4>Total Users - {data.length}</h4>
         <button onClick={() => setIsFetch(true)}>Fetch users</button>
         <ul>
            {!error &&
               data &&
               data.map((ele) => {
                  return <li key={ele.id}>{ele.name}</li>;
               })}
         </ul>
      </div>
   );
};

export default Home;
