import { useEffect, useState } from "react";
import "./App.css";
import { getUsers, getUserFil } from "./services/users";
import ChooseFilter from "./components/chooseFilter";
import { User } from "./interfaces/user";
import ReturnData from "./components/retundataFilter";

function App() {
  const [data, setData] = useState<User[]>([]);
  const [filter, setFilter] = useState(""); // text
  const [filterSelect, setFilterSelect] = useState("email"); //select

  const handleGetUser = async () => {
    const resp = await getUsers();
    setData(resp);
  };
  const handleChooseFilter = async (msg: string) => {
    setFilter(msg);
  };
  const handleSelect = (msg: string) => {
    setFilterSelect(msg);
  };

  useEffect(() => {
    handleGetUser();
  }, []);

  return (
    <div className="App">
      <ChooseFilter
        handleChooseFilter={handleChooseFilter}
        handleSelect={handleSelect}
      />

        <ReturnData data={data} filter={filter} filterSelect={filterSelect} />

    </div>
  );
}

export default App;
