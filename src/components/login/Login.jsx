import React from 'react';
import style from './login.module.scss';

import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { login } from '../../redux/auth-reducer';
import { Navigate } from 'react-router-dom';

const Login = (props) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    mode: 'all',
  });
  const onSubmit = (data) => {
    props.login(data.email, data.password, data.checkbox);
    reset();
  };

  if (props.isAuth) {
    return <Navigate to={'/profile'} />;
  }
  return (
    <div className={style.formLogin}>
      <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
        <div className={style.formBlock}>
          <label htmlFor="email">Email</label>
          <input
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: 'Please enter a valid email',
              },
            })}
            className={style.field}
            invalid={errors.email ? 'true' : 'false'}
          />
          <p className={errors.email && style['invalid']}>{errors.email?.message}</p>
        </div>

        <div className={style.formBlock}>
          <label htmlFor="password">Password</label>
          <input
            {...register('password', {
              required: 'Password is required',
              minLength: {
                value: 8,
                message: 'must be 8 chars',
              },
              validate: (value) => {
                return (
                  [/[a-z]/, /[A-Z]/, /[0-9]/].every((pattern) => pattern.test(value)) ||
                  `must include lower, upper symbols and number`
                );
              },
            })}
            type="password"
            className={style.field}
            invalid={errors.password ? 'true' : 'false'}
          />
          <p className={errors.password && style['invalid']}>{errors.password?.message}</p>
        </div>
        <div className={style.checkbox}>
          <input
            {...register('checkbox', {
              required: true,
            })}
            type="checkbox"
          />
          Remember me
        </div>
        <input type="submit" className={style.button} />
        {props.errorResponse.length > 0 && (
          <div className={style.errorBlock}>{props.errorResponse}</div>
        )}
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({ isAuth: state.auth.isAuth, errorResponse: state.auth.error });

export default connect(mapStateToProps, { login })(Login);
