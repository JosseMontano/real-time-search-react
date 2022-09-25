import React, { useState } from "react";

interface Params {
  handleChooseFilter: (input: string) => void;
  handleSelect:(input:string) => void;
}

const ChooseFilter = (params: Params) => {
const [select, setSelect] = useState("email")
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    params.handleChooseFilter(e.target.value);
  };

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    params.handleSelect(e.target.value);
    setSelect(e.target.value)
  };

  return (
    <div>
      <input type="text" onChange={handleOnChange} placeholder={`search by ${select}`} />
      <select onChange={handleSelect}>
        <option value="email">email</option>
        <option value="user">user</option>
        <option value="role">role</option>
      </select>
    </div>
  );
};

export default ChooseFilter;
