import logo from "./logo.svg";
import axios from "axios";
import "./App.css";
import AddUser from "./Components/AddUser";
import FindUser from "./Components/FindUser";
import UserList from "./Components/UserList";

import { useState, useEffect } from "react";
function App() {
  const [trigger, setTrigger] = useState(false);
  const [users, setUsers] = useState([]);
  const [sending, setSending] = useState(false);

  const FindByQueryHandler = async (queryTarget, query) => {
    if (!queryTarget) {
      setTrigger(!trigger);
      return;
    }
    const payload = {};
    payload[queryTarget] = query;

    console.log(payload);
    const { data } = await axios.post("http://localhost:5000/getUser", payload);
    console.log(data);
    if (data) setUsers(data);
    else setUsers([]);
  };
  const DeleteUserHandler = async (email) => {
    const { data } = await axios.delete(`http://localhost:5000/user/${email}`);
    setTrigger(!trigger);
  };
  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get("http://localhost:5000/user");
      setUsers(data);
      console.log(data);
    }
    fetchData();
  }, [trigger]);

  const SendMailHandler = async () => {
    setSending(true);
    await axios.get("http://localhost:5000/sendMail");
    setSending(false);
  };
  return (
    <>
      <nav className="navbar bg-body-tertiary mb-3">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            User Base Task
          </a>
          <div style={{ marginLeft: "auto" }}>
            {!sending ? (
              <button className="btn btn-primary" onClick={SendMailHandler}>
                Send Mail
              </button>
            ) : (
              <button className="btn btn-success">Sending Mail</button>
            )}
          </div>
        </div>
      </nav>
      <div className="App container-md">
        <div className="container-sm">
          <div className="row">
            <div className="col-7">
              <AddUser setTrigger={setTrigger} trigger={trigger} />
            </div>
            <div className="col">
              <FindUser handler={FindByQueryHandler} />
            </div>
          </div>
        </div>
      </div>
      <UserList
        users={users}
        deleteHandler={DeleteUserHandler}
        setTrigger={setTrigger}
        trigger={trigger}
      />
    </>
  );
}

export default App;
