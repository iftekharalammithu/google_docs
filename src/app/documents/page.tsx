import React from "react";
import Editor from "./editor";

const document = () => {
  return (
    <div className="flex flex-col gap-2 items-center bg-black  justify-center h-screen">
      <h1>Document</h1>
      <Editor />
    </div>
  );
};

export default document;
