import { useState } from "react";
import axios from "axios";
export default ({ setTrigger, trigger }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState(0);
  const [message, setMessage] = useState("");

  const OnSubmitHandler = async () => {
    console.log(firstName, lastName, email, phone, message);
    const { data } = await axios.post("http://localhost:5000/user", {
      first_name: firstName,
      last_name: lastName,
      email: email,
      phone: phone,
      message: message,
    });
    setTrigger(!trigger);
    setEmail("");
    setFirstName("");
    setLastName("");
    setPhone(0);
    setMessage("");
  };
  return (
    <div className="card">
      <div className="card-header">Add User</div>
      <div className="card-body">
        <h5 className="card-title">New User</h5>
        <div className="row">
          <div className="col">
            <div className="input-group mb-3">
              <span className="input-group-text" id="inputGroup-sizing-default">
                First Name
              </span>
              <input
                value={firstName}
                type="text"
                className="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
          </div>
          <div className="col">
            <div className="input-group mb-3">
              <span className="input-group-text" id="inputGroup-sizing-default">
                Last Name
              </span>
              <input
                value={lastName}
                type="text"
                className="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>
          <div className="col">
            <div className="input-group mb-3">
              <span className="input-group-text" id="inputGroup-sizing-default">
                Email
              </span>
              <input
                value={email}
                type="text"
                className="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="input-group mb-3">
              <span className="input-group-text" id="inputGroup-sizing-default">
                Phone
              </span>
              <input
                value={phone}
                type="text"
                className="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </div>
          <div className="col">
            <div className="input-group mb-3">
              <span className="input-group-text" id="inputGroup-sizing-default">
                Message
              </span>
              <input
                value={message}
                type="text"
                className="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
          </div>
        </div>

        <button onClick={OnSubmitHandler} className="btn btn-primary">
          Create User
        </button>
      </div>
    </div>
  );
};
