import React from "react";

const SingleTask = ({title, description}) => {
  return (
    <>
      <div className="bg-slate-300 rounded-lg my-4">
        <h1 className="p-3 text-xl font-bold tracking-wide">{title}</h1>
        <h1 className="pl-3 pb-3 tracking-wide text-xl">{description}</h1>
      </div>
    </>
  );
};

export default SingleTask;
