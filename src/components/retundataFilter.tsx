import { User } from "../interfaces/user";
import Data from "./data";
import NotFound from "./notFound";

interface Params {
  data: User[];
  filter: string;
  filterSelect: string;
}

const RetundataFilter = (params: Params) => {
  const search = (v: User) => {
    if (params.filter === "") return v;
    if (params.filterSelect === "email") {
      if (v.email.toLocaleLowerCase().includes(params.filter.toLowerCase())) {
        return v;
      }
    }
    if (params.filterSelect === "user") {
      if (
        v.nombreUser.toLocaleLowerCase().includes(params.filter.toLowerCase())
      ) {
        return v;
      }
    }
    if (params.filterSelect === "role") {
      if (v.rol.toLocaleLowerCase().includes(params.filter.toLowerCase())) {
        return v;
      }
    }
  };

  return (
    <>
      {params.data
        .filter((v) => {
          const res = search(v);
          return res;
        })
        .map((v, i) => (
          <div key={i}>
            <Data {...v} />
          </div>
        ))}

      {params.data.filter((v) => {
        const res = search(v);
        return res;
      }).length === 0 && <NotFound />}
    </>
  );
};

export default RetundataFilter;
