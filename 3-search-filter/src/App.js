import { useState } from "react";
import list from "./list.json";

function App() {
  const [searchText, setSearchText] = useState("");
  console.log(searchText);

  return (
    <div className="container my-5">
      <div className="d-flex justify-content-center my-5">
        <input
          onChange={(e) => setSearchText(e.target.value)}
          className="form-control w-25"
          placeholder="Search..."
          type="search"
        />
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Firstname</th>
          </tr>
        </thead>
        <tbody>
          {list
            .filter((el) =>
              el.firstname.toLowerCase().includes(searchText.toLowerCase())
            )
            .map((el) => {
              return (
                <tr key={el.nickname}>
                  <th scope="row">{el.id}</th>
                  <td>{el.firstname}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
