import React, { useState } from "react";

import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

export interface User {
  id: string;
  name: string;
  age: string;
}

export type Users = User[];
function App() {
  const [usersList, setUsersList] = useState<Users>([]);

  const addUserHandler = (uName: string, uAge: string) => {
    setUsersList((prevUsersList: Users) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </>
  );
}

export default App;
