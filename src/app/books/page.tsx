import { BookTable, columns } from "@/components/tables/bookTable";
import { api } from "@/trpc/server";
import React from "react";

const page = async () => {
  const books = await api.book.findMany.query();
  return (
    <div>
      <BookTable data={books} />
    </div>
  );
};

export default page;
