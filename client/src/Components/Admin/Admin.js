import React from "react";
import { useSelector } from "react-redux";
import Userhandler from "./Userhandler";
import React from "react";

const Admin = () => {
  const { users } = useSelector((state) => state.authreducer);
  return (
    <div className="admin">
      {users.map(
        (user) =>
          user.role !== "admin" && <Userhandler key={user._id} user={user} />
      )}
    </div>
  );
};

export default Admin;
