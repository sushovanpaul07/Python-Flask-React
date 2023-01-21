import UserCard from "./Components/UserCard";

export default ({ users, deleteHandler, setTrigger, trigger }) => {
  return (
    <div className="container-md mt-4 mb-4">
      <div className="row">
        {users.map((user) => (
          <div className="col">
            <UserCard
              user={user}
              deleteHandler={deleteHandler}
              setTrigger={setTrigger}
              trigger={trigger}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
