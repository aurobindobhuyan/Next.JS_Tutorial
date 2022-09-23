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
  const [render, setRender] = useState(false);
  const [input, setInput] = useState("");
  const [isFetch, setIsFetch] = useState(false);
  const { data = [], error } = useSWR(isFetch ? "api/users" : null, fetcher);

  const removeUser = async (id) => {
    try {
      const response = await fetch(`/api/users/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await response.json();
      if (result) {
        const index = data.findIndex((ele) => ele.id === result[0].id);
        data.splice(index, 1);
        setRender(!render);
      }
    } catch (error) {
      return error;
    }
  };

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
      data.push(result);
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
            return (
              <li key={ele.id}>
                {ele.name}
                <button onClick={() => removeUser(ele.id)}>Remove</button>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Home;
