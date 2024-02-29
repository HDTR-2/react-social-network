import React from 'react';
import styles from './FormsControls.module.scss';

const FormCopntrol = ({ input, meta, child, ...props }) => {
  const hasError = meta.error && meta.touched;
  return (
    <div className={hasError ? styles.error : ''}>
      <div>{props.child}</div>
      <div>{hasError && <span>{meta.error}</span>}</div>
    </div>
  );
};

export const Textarea = (props) => {
  const { input, meta, ...restProps } = props;
  return (
    <FormCopntrol {...props}>
      <textarea {...input} {...restProps} />
    </FormCopntrol>
  );
};

export const Input = (props) => {
  const { input, meta, ...restProps } = props;
  return (
    <FormCopntrol {...props}>
      <textarea {...input} {...restProps} />
    </FormCopntrol>
  );
};
