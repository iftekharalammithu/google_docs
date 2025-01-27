import Link from "next/link";
import React from "react";

const Login = () => {
  return (
    <div>
      <h1>login</h1>
      <span>
        click{" "}
        <Link href="/signup" className="text-red-400">
          here
        </Link>{" "}
        to signup
      </span>
    </div>
  );
};

export default Login;
