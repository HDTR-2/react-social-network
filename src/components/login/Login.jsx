import React from 'react';
import style from './login.module.scss';

import { useForm } from 'react-hook-form';

const Login = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className={style.formLogin}>
      <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
        <div className={style.formBlock}>
          <label htmlFor="email">Email</label>
          <input {...register('email', { pattern: /^[A-Za-z]+$/i })} className={style.field} />
        </div>
        <div className={style.formBlock}>
          <label htmlFor="password">Password</label>
          <input
            {...register('password', { required: true, maxLength: 30 })}
            type="password"
            className={style.field}
          />
        </div>
        <input type="submit" className={style.button} />
      </form>
    </div>
  );
};

//Redux-form========================================================================================================================================================

// import { Field, reduxForm } from 'redux-form';
// import { Input } from '../common/FormsControls/FormsControls';
// import { requireField, maxLengthCreator } from '../../utils/validators';

// let maxLength30 = maxLengthCreator(30);

// const LoginForm = (props) => {
//   return (
//     <form onSubmit={props.handleSubmit} className={style.form}>
//       <Field
//         type="email"
//         name="login"
//         placeholder="Email"
//         component={Input}
//         className={style.field}
//         validate={[requireField, maxLength30]}
//       />
//       <Field
//         type="password"
//         name="password"
//         placeholder="Пароль"
//         component={Input}
//         className={style.field}
//         validate={[requireField, maxLength30]}
//       />
//       <label htmlFor="" className={style.checkbox}>
//         <Field type="checkbox" name="rememberMe" id="" component={Input} />
//         Запомнить меня
//       </label>
//       <button type="submit" className={style.button}>
//         Войти
//       </button>
//     </form>
//   );
// };

// const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm);

// const Login = (props) => {
//   const onSubmit = (formData) => {
//     props.login(formData.login, formData.password, formData.rememberMe);
//     props.history.push('/profile');
//   };
//   return (
//     <div className={style.formLogin}>
//       <h1>Авторизация</h1>
//       <LoginReduxForm onSubmit={onSubmit} />
//     </div>
//   );
// };

export default Login;
