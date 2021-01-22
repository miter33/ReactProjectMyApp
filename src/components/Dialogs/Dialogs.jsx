import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let dialogsElements = props.state.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));
  let messagesElements = props.state.messages.map((m) => (
    <Message message={m.message} />
  ));
  // let newMessageElement = React.createRef();
  // let addMessage=() => {
  //   let text = newMessageElement.current.value;
  //   props.state.messages.push({message: text});
  //   debugger;
  // }
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}> {dialogsElements} </div>
      {/* <div> */}
        <div className={s.messages}> {messagesElements} </div>
        {/* <div>
          <textarea ref={newMessageElement}></textarea>
        </div>
        <button onClick={addMessage}>add message</button>
      </div> */}
    </div>
  );
};

export default Dialogs;
