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
  const [input, setInput] = useState("");
  const [isFetch, setIsFetch] = useState(false);
  const { data = [], error } = useSWR(isFetch ? "api/users" : null, fetcher);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/users", {
        method: "POST",
        body: JSON.stringify({
          id: Date.now(),
          name: input,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await response.json();
      data.push(result)
      setInput("");
    } catch (error) {
      return error;
    }
  };

  return (
    <div>
      <h4>Total Users - {data.length}</h4>
      <button onClick={() => setIsFetch(true)}>Fetch users</button>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add Users"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button tupe="submit">Submit</button>
      </form>
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
