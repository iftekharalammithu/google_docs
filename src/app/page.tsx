"use client";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import Editor from "./documents/editor";

const page = () => {
  const [hover, sethover] = useState(false);
  return (
    <div className="flex flex-col gap-2 items-center bg-black justify-center h-screen">
      <h1
        onMouseEnter={() => sethover(true)}
        onMouseLeave={() => sethover(false)}
        className={`text-[#f7bb07] p-2 rounded-md border border-cyan-100 ${
          hover ? "bg-green-500" : ""
        }`}
      >
        Hello world
      </h1>
      <Button variant="secondary" size="lg">
        Button
      </Button>
    </div>
  );
};

export default page;
