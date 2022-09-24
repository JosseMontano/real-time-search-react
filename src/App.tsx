import { useEffect, useState } from "react";
import "./App.css";
import { getUsers } from "./services/users";
import ChooseFilter from "./components/chooseFilter";
import { User } from "./interfaces/user";
import ReturnData from "./components/retundataFilter";
function App() {
  const [data, setData] = useState<User[]>([]);
  const [filter, setFilter] = useState("");
  const [filterSelect, setFilterSelect] = useState("email");
  const handleGetUser = async () => {
    const resp = await getUsers();
    setData(resp);
  };

  const handleChooseFilter = (msg: string) => {
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
