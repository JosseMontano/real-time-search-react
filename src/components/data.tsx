import React from "react";
import {User} from '../interfaces/user'
const Data = (v:User) => {
  return (
    <>
      <h2>{v.email}</h2>
      <p>{v.nombreUser}</p>
      <p>{v.rol}</p>
      <hr />
    </>
  );
};

export default Data;
