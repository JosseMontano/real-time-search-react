import React from "react";

interface Params {
  handleChooseFilter: (input: string) => void;
  handleSelect:(input:string) => void;
}

const ChooseFilter = (params: Params) => {

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    params.handleChooseFilter(e.target.value);
  };

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    params.handleSelect(e.target.value);
  };

  return (
    <div>
      <input type="text" onChange={handleOnChange} />
      <select onChange={handleSelect}>
        <option value="email">email</option>
        <option value="user">user</option>
        <option value="role">role</option>
      </select>
    </div>
  );
};

export default ChooseFilter;
