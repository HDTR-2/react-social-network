import React from 'react';
import { Field, reduxForm } from 'redux-form';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

import style from './dialogs.module.scss';
import { requireField, maxLengthCreator } from '../../utils/validators';

import { Textarea } from '../common/FormsControls/FormsControls';

const maxLength200 = maxLengthCreator(200);

const Dialogs = (props) => {
  const state = props.dialogsPage;

  const dialogsElements = state.dialogData.map((item) => (
    <DialogItem id={item.id} key={item.id} name={item.name} />
  ));
  const messagesElements = state.messageData.map((item) => (
    <Message id={item.id} key={item.id} message={item.message} countMessage={item.countMessage} />
  ));

  const addNewMessage = (values) => {
    props.sendMessage(values.newMessageBody);
  };

  return (
    <div>
      <div className={style.dialogs}>
        <div className={style.dialogsItems}>{dialogsElements}</div>
        <div className={style.messeges}>{messagesElements}</div>
      </div>
      <AddMessageFormRedux onSubmit={addNewMessage} />
    </div>
  );
};

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={style.textBox}>
      <div>
        <Field component={Textarea} name="newMessageBody" validate={[requireField, maxLength200]} />
      </div>
      <div>
        <button>Добавить пост</button>
      </div>
    </form>
  );
};
const AddMessageFormRedux = reduxForm({ form: 'dialogAddMessageForm' })(AddMessageForm);

export default Dialogs;
