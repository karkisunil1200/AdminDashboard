import React from "react";
import { DataGrid } from "@mui/x-data-grid";

import "./userList.css";

const UserList = () => {
  const columns = [
    { field: "id", headerName: "ID", width: 130 },
    { field: "lastName", headerName: "Username", width: 200 },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "transaction",
      headerName: "Transaction Volume",
      width: 160,
    },
  ];
  const rows = [
    {
      id: 1,
      lastName: "John Snow",
      avatar: "",
      email: "john@gmail.com",
      status: "active",
      transaction: "$120.34",
    },
    {
      id: 2,
      lastName: "John Snow",
      avatar: "",
      email: "john@gmail.com",
      status: "active",
      transaction: "$120.34",
    },
    {
      id: 3,
      lastName: "John Snow",
      avatar: "",
      email: "john@gmail.com",
      status: "active",
      transaction: "$120.34",
    },
    {
      id: 4,
      lastName: "John Snow",
      avatar: "",
      email: "john@gmail.com",
      status: "active",
      transaction: "$120.34",
    },
    {
      id: 5,
      lastName: "John Snow",
      avatar: "",
      email: "john@gmail.com",
      status: "active",
      transaction: "$120.34",
    },
  ];

  return (
    <div className="userList">
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
};

export default UserList;
