"use client";
import React from "react";
import Editor from "./editor";
import Toolbar from "./[documentsids]/Toolbar";

import Navbar from "./[documentsids]/Navbar";
import { api } from "../../../convex/_generated/api";
import { useQuery } from "convex/react";

const Document = () => {
  const data = useQuery(api.Documents.get) || []; // Provide a default empty array
  console.log(data);

  return (
    <div className="flex flex-col gap-2 items-center   justify-center h-screen">
      <Navbar></Navbar>
      <h1>Documents</h1>

      {data?.map((docs) => (
        <div key={docs._id}>
          <span> TITLE: {docs.title}</span>
          <br />
        </div>
      ))}
      <h2>he</h2>
      <Toolbar />
      <Editor />
    </div>
  );
};

export default Document;
