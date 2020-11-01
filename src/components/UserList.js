import React from "react";
import useResources from "./useResources";

const UserList = () => {
  const users = useResources("users");

  return (
    <>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </>
  );
};

export default UserList;
