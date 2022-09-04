import React from "react";
import Link from "next/link";
import Users from "../components/Users";

const User = ({ data }) => {
  return (
    <>
      <h1>This is all users page</h1>
      <Link href="/">
        <a>Home</a>
      </Link>
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

/*
........getStaticProps contd.......
1.
- getStaticProps runs only on the server side.
- The function will never run clinet-side.
- The code you write inside getStaticProps won't even be included in the JS bundle that is sent to the browser.

2.
- You can write server-side code directly in getStaticProps.
- Accessing the file system using the fs module or querying a database can be done inside getStaticProps.
- You also don't have to worry about including API keys in getStaticProps as the won't make it to the browser.

3.
- getStaticProps is allowed onlyl in a page and cannot be run from regular component file. It is used for pre-rendering and not client-side data fetching.

4. getStaticPops should return an object and object should contain a props key which is an object.

5. getStaticProps will run at build time. However in developement mode when we run "npm run dev" getStaticProps runs on every request.
*/
