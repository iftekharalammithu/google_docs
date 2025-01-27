import React from "react";
interface DocumentsidsProps {
  params: Promise<{ documentsids: string }>;
}

const Documentsids = async ({ params }: DocumentsidsProps) => {
  const { documentsids } = await params;
  const documentsids2 = params.documentsids;

  return (
    <div className="flex flex-col gap-2 items-center bg-black justify-center h-screen text-white">
      <h1>document id {documentsids}</h1>
      <h1>document id {documentsids2}</h1>
    </div>
  );
};

export default Documentsids;
