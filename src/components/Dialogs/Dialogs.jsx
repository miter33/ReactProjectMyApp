import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={s.dialogs + " " + s.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

const Message = (props) => {
  let path = "/messages/";
  return (
    <div className={s.message}>
      {props.message}
      {/* <NavLink to={path}></NavLink> */}
    </div>
  );
};

const Dialogs = (props) => {
  let dialogData = [
    { id: 1, name: "Alex" },
    { id: 2, name: "John" },
    { id: 3, name: "Peter" },
    { id: 4, name: "Margarita" },f
    { id: 5, name: "Luis" },
    { id: 6, name: "Victoria" },
  ];

  let dialogsElements = [
    <DialogItem name={dialogData[0].name} id={dialogData[0].id} />,
    <DialogItem name={dialogData[1].name} id={dialogData[1].id} />,
    <DialogItem name={dialogData[2].name} id={dialogData[2].id} />,
  ];

  let messagesData = [
    { id: 1, message: "Hi" },
    { id: 2, message: "How are you?" },
    { id: 3, message: "What`s your name?" },
  ];

  let count = dialogData.length;
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        <Message message={messagesData[0].message} />
        <Message message={messagesData[1].message} />
        <Message message={messagesData[2].message} />
      </div>
    </div>
  );
};

export default Dialogs;
