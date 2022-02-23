import React from "react";
import { DataGrid } from "@mui/x-data-grid";

import "./userList.css";
import { DeleteOutline } from "@mui/icons-material";

const UserList = () => {
  const columns = [
    { field: "id", headerName: "ID", width: 130 },
    {
      field: "user",
      headerName: "Username",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img src={params.row.avatar} alt="" className="userListImg" />
            {params.row.userName}
          </div>
        );
      },
    },
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
    {
      field: "action",
      headerName: "Action",
      width: 160,
      renderCell: (params) => {
        return (
          <>
            <button className="userListEdit">Edit</button>
            <DeleteOutline className="userListDelete" />
          </>
        );
      },
    },
  ];
  const rows = [
    {
      id: 1,
      userName: "John Snow",
      avatar: "https://images7.alphacoders.com/650/650008.jpg",
      email: "john@gmail.com",
      status: "active",
      transaction: "$120.34",
    },
    {
      id: 2,
      userName: "John Snow",
      avatar: "https://images7.alphacoders.com/650/650008.jpg",
      email: "john@gmail.com",
      status: "active",
      transaction: "$120.34",
    },
    {
      id: 3,
      userName: "John Snow",
      avatar: "https://images7.alphacoders.com/650/650008.jpg",
      email: "john@gmail.com",
      status: "active",
      transaction: "$120.34",
    },
    {
      id: 4,
      userName: "John Snow",
      avatar: "https://images7.alphacoders.com/650/650008.jpg",
      email: "john@gmail.com",
      status: "active",
      transaction: "$120.34",
    },
    {
      id: 5,
      userName: "John Snow",
      avatar: "https://images7.alphacoders.com/650/650008.jpg",
      email: "john@gmail.com",
      status: "active",
      transaction: "$120.34",
    },
    {
      id: 6,
      userName: "John Snow",
      avatar: "https://images7.alphacoders.com/650/650008.jpg",
      email: "john@gmail.com",
      status: "active",
      transaction: "$120.34",
    },
    {
      id: 7,
      userName: "John Snow",
      avatar: "https://images7.alphacoders.com/650/650008.jpg",
      email: "john@gmail.com",
      status: "active",
      transaction: "$120.34",
    },
    {
      id: 8,
      userName: "John Snow",
      avatar: "https://images7.alphacoders.com/650/650008.jpg",
      email: "john@gmail.com",
      status: "active",
      transaction: "$120.34",
    },
    {
      id: 9,
      userName: "John Snow",
      avatar: "https://images7.alphacoders.com/650/650008.jpg",
      email: "john@gmail.com",
      status: "active",
      transaction: "$120.34",
    },
    {
      id: 10,
      userName: "John Snow",
      avatar: "https://images7.alphacoders.com/650/650008.jpg",
      email: "john@gmail.com",
      status: "active",
      transaction: "$120.34",
    },
  ];

  return (
    <div className="userList">
      <DataGrid
        rows={rows}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
};

export default UserList;
