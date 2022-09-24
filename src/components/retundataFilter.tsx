import React from "react";
import { User } from "../interfaces/user";
import Data from "./data";

interface Params {
  data: User[];
  filter: string;
  filterSelect: string;
}

const RetundataFilter = (params: Params) => {
  let data = [
    {
      val: "email",
    },
    {
      val: "user",
    },
    {
      val: "role",
    },
  ];

  return (
    <>
      {params.data
        .filter((v) => {
          if (params.filter === "") return v;
          if (params.filterSelect === "email") {
            if (
              v.email.toLocaleLowerCase().includes(params.filter.toLowerCase())
            ) {
              return v;
            }
          }
          if (params.filterSelect === "user") {
            if (
              v.nombreUser
                .toLocaleLowerCase()
                .includes(params.filter.toLowerCase())
            ) {
              return v;
            }
          }
          if (params.filterSelect === "role") {
            if (
              v.rol.toLocaleLowerCase().includes(params.filter.toLowerCase())
            ) {
              return v;
            }
          }
        })
        .map((v, i) => (
          <div key={i}>
            <Data {...v} />
          </div>
        ))}
    </>
  );
};

export default RetundataFilter;
