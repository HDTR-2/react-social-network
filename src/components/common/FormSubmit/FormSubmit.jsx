import React from 'react';
import { useForm } from 'react-hook-form';
import style from './formSubmit.module.scss';

export const MessageFormSubmit = (props) => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({
    mode: 'onBlur',
  });
  const onSubmit = (data) => {
    props.sendMessage(data.newMessage);
    reset();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
      <div>
        <textarea
          className={style.message ? !errors.newMessage : style.error}
          {...register('newMessage', {
            required: 'Enter at least something',
            maxLength: {
              value: 200,
              message: 'Max length is 200 symbols',
            },
          })}
        />
      </div>
      <div className={style.errors}>
        {errors.newMessage && <p>{errors.newMessage.message || 'Error!'}</p>}
      </div>
      <div>
        <button disabled={!isValid} type="submit">
          Send
        </button>
      </div>
    </form>
  );
};

export const PostFormSubmit = (props) => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({
    mode: 'onBlur',
  });
  const onSubmit = (data) => {
    props.addPosts(data.newPostBody);
    reset();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
      <div>
        <textarea
          className={style.message ? !errors.newPostBody : style.error}
          {...register('newPostBody', {
            required: 'Enter at least something',
            maxLength: {
              value: 200,
              message: 'Max length is 200 symbols',
            },
          })}
        />
      </div>
      <div className={style.errors}>
        {errors.newPostBody && <p>{errors.newPostBody.message || 'Error!'}</p>}
      </div>
      <div>
        <button disabled={!isValid} type="submit">
          Send
        </button>
      </div>
    </form>
  );
};
