import React from "react";
import { User, Users } from "../../App";

import Card from "../UI/Card";
import classes from "./UsersList.module.css";

interface UsersListProps {
  users: Users;
}
const UsersList = (props: UsersListProps) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user: User) => (
          <li key={user.id}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
