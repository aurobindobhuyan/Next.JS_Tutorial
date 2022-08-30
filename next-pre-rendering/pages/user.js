import React from "react";
import Users from "../components/Users";

const User = ({ data }) => {
  return (
    <>
      <h1>This is all users page</h1>
      <table border={3}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>

        <tbody>
          {data.map((ele) => (
            <Users key={ele.id} {...ele} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default User;

export async function getStaticProps() {
  const result = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await result.json();
  return {
    props: {
      data,
    },
  };
}
