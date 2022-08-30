import React from "react";

const Users = ({ data }) => {
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
          {data.map((ele) => {
            return (
              <tr key={ele.id}>
                <td>{ele.id}</td>
                <td>{ele.name}</td>
                <td>{ele.email}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Users;

export async function getStaticProps() {
  const result = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await result.json();
  return {
    props: {
      data,
    },
  };
}
