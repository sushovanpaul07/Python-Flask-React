import axios from "axios";
import { useState } from "react";
export default ({ user, deleteHandler, setTrigger, trigger }) => {
  const [editOn, setEditOn] = useState(false);
  const [firstName, setFirstName] = useState(user.first_name);
  const [lastName, setLastName] = useState(user.last_name);
  const [email, setEmail] = useState(user.email);
  const [phone, setPhone] = useState(user.phone);
  const [message, setMessage] = useState(user.message.text);

  const SaveHandlerHandler = async () => {
    await axios.put(`http://localhost:5000/user/${user.email}`, {
      first_name: firstName,
      last_name: lastName,
      email: email,
      phone: phone,
      message: message,
    });
    setTrigger(!trigger);
    setEditOn(false);
  };
  return (
    <div className="mt-4">
      <div className="card" style={{ width: "18rem" }}>
        {!editOn ? (
          <>
            <div className="card-body">
              <h5 className="card-title">{`${user.first_name} ${user.last_name}`}</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Email : {user.email}</li>
              <li className="list-group-item">Phone : {user.phone}</li>
              <li className="list-group-item">Message : {user.message.text}</li>
            </ul>
            <button
              type="button"
              className="btn btn-warning"
              style={{ borderRadius: "0" }}
              onClick={() => setEditOn(!editOn)}
            >
              Edit
            </button>
          </>
        ) : (
          <>
            <div className="card-body">
              <div className="input-group mb-3">
                <span
                  className="input-group-text"
                  id="inputGroup-sizing-default"
                >
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
              <div className="input-group mb-3">
                <span
                  className="input-group-text"
                  id="inputGroup-sizing-default"
                >
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
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <div className="input-group mb-3">
                  <span
                    className="input-group-text"
                    id="inputGroup-sizing-default"
                  >
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
              </li>
              <li className="list-group-item">
                <div className="input-group mb-3">
                  <span
                    className="input-group-text"
                    id="inputGroup-sizing-default"
                  >
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
              </li>
              <li className="list-group-item">
                <div className="input-group mb-3">
                  <span
                    className="input-group-text"
                    id="inputGroup-sizing-default"
                  >
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
              </li>
            </ul>
            <div style={{ display: "flex", width: "100%" }}>
              <button
                type="button"
                className="btn btn-success"
                style={{ borderRadius: "0", width: "50%" }}
                onClick={() => SaveHandlerHandler()}
              >
                Save
              </button>
              <button
                type="button"
                className="btn btn-info"
                style={{ borderRadius: "0", width: "50%" }}
                onClick={() => setEditOn(!editOn)}
              >
                Cancel
              </button>
            </div>
          </>
        )}

        <button
          type="button"
          className="btn btn-danger"
          style={{ borderRadius: "0" }}
          onClick={() => deleteHandler(user.email)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};
