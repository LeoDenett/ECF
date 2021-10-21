import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
    registerEmail: Yup.string().email('Invalid email address').required('Required'),
    registerPassword: Yup.string()
        .min(8, 'Must be 8 characters or more')
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
  });