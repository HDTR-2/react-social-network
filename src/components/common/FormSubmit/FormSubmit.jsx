import React from 'react';
import { useForm } from 'react-hook-form';
import style from './formSubmit.module.scss';

export const MessageFormSubmit = (props) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    mode: 'all',
  });
  const onSubmit = (data) => {
    props.sendMessage(data.newMessage);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
      <div>
        <textarea
          {...register('newMessage', {
            required: 'Enter at least something',
            maxLength: {
              value: 200,
              message: 'Max length is 200 symbols',
            },
          })}
          invalid={errors.newMessage ? 'true' : 'false'}
        />
        <p className={errors.newMessage && style['invalid']}>{errors.newMessage?.message}</p>
      </div>

      <div>
        <button type="submit">Send</button>
      </div>
    </form>
  );
};

export const PostFormSubmit = (props) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    mode: 'all',
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
        <p className={errors.newPostBody && style['invalid']}>{errors.newPostBody?.message}</p>
      </div>

      <div>
        <button type="submit">Send</button>
      </div>
    </form>
  );
};
