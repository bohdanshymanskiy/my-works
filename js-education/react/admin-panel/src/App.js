import React from "react";
import AppCSS from './App.module.css';
import UserInfo from "./components/UsersInfo/UsersInfo";
import { users } from "./data";

function App() {
  return (
    <div className={AppCSS.container}>
      <h1>Admin Panel</h1>
      <UserInfo users={users} />
    </div >
  );
}

export default App;
