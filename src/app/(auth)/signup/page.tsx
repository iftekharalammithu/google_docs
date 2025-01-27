import Link from "next/link";
import React from "react";

const Sighup = () => {
  return (
    <div>
      <h1>signup</h1>
      <span>
        click{" "}
        <Link href="/login" className="text-red-400">
          here
        </Link>{" "}
        to login
      </span>
      <br />
      <span>
        click{" "}
        <Link href="/documents/123" className="text-red-400">
          here
        </Link>{" "}
        Document 123
      </span>
    </div>
  );
};

export default Sighup;
