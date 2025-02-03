import React from "react";
import Editor from "./editor";
import Toolbar from "./[documentsids]/Toolbar";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import Navbar from "./[documentsids]/Navbar";

const document = () => {
  return (
    <div className="flex flex-col gap-2 items-center   justify-center h-screen">
      <Navbar></Navbar>
      <h1>Document</h1>
      <Toolbar />
      <Editor />
    </div>
  );
};

export default document;
