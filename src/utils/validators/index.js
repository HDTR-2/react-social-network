export const requireField = (value) => {
  if (!value) return 'Required field';

  return undefined;
};

export const maxLengthCreator = (maxLength) => (value) => {
  if (value && value.length > maxLength) return `Max length is ${maxLength} symbols`;

  return undefined;
};
