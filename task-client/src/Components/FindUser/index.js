import { useState } from "react";

export default ({ handler }) => {
  const [queryTarget, setQueryTarget] = useState("");
  const [query, setQuery] = useState("");

  return (
    <div className="card">
      <div className="card-header">Add User</div>
      <div className="card-body">
        <h5 className="card-title">Find User</h5>
        <div className="row">
          <div className="col">
            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {queryTarget ? queryTarget : "Search By"}
              </button>
              <ul className="dropdown-menu">
                <li onClick={() => setQueryTarget("email")}>
                  <a className="dropdown-item">Email</a>
                </li>
                <li onClick={() => setQueryTarget("phone")}>
                  <a className="dropdown-item">Phone</a>
                </li>
                <li onClick={() => setQueryTarget("first_name")}>
                  <a className="dropdown-item">First Name</a>
                </li>
                <li onClick={() => setQueryTarget("last_name")}>
                  <a className="dropdown-item">Last Name</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-8">
            <div className="input-group mb-3">
              <span className="input-group-text" id="inputGroup-sizing-default">
                Query
              </span>
              <input
                type="text"
                value={query}
                className="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
        <button
          onClick={() => {
            handler(queryTarget, query);
            setQuery("");
            setQueryTarget("");
          }}
          className="btn btn-primary"
        >
          Find User
        </button>
      </div>
    </div>
  );
};
