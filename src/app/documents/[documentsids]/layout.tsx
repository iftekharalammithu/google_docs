import React from "react";
interface DocumentsLayoutProps {
  children: React.ReactNode;
}

const Documentslayout = ({ children }: DocumentsLayoutProps) => {
  return (
    <div>
      <h1>d layout</h1>
      {children}
    </div>
  );
};

export default Documentslayout;
