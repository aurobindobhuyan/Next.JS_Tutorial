import React, { useState } from "react";
import { useRouter } from "next/router";
import EditTask from "../../components/EditTask";

const SingleTask = ({ data }) => {
  const [isEdit, setIsEdit] = useState(false);
  const router = useRouter();

  if (router.isFallback) {
    return <h2>Loading...</h2>;
  }

  const handleToggle = () => {
    setIsEdit(!isEdit);
  };

  return (
    <>
      <h1>This is single Task</h1>
      {isEdit ? (
        <EditTask data={data} handleToggle={handleToggle} />
      ) : (
        <>
          <button onClick={handleToggle}>Edit</button>
          {Object.keys(data).map((ele) => {
            return (
              <div key={ele}>
                <blockquote>
                  {ele} - {data[ele]}
                </blockquote>
              </div>
            );
          })}
        </>
      )}
    </>
  );
};

export default SingleTask;

export const getStaticPaths = async () => {
  return {
    paths: [{ params: { taskID: "625905443fe6bb61c5e66040" } }],
    fallback: true,
  };
};

export async function getStaticProps(context) {
  const { params } = context;
  const result = await fetch(
    `http://localhost:3070/api/tasks/${params.taskID}`
  );
  const data = await result.json();

  if (!data._id) {
    return { notFound: true };
  }

  return {
    props: {
      data,
    },
    revalidate: 50,
  };
}
