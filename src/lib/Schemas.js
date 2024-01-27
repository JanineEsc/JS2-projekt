import * as Yup from 'yup'

export const RegisterFormSchema = Yup.object ({
  name: Yup.string()
  .required('Please enter your full name!')
  .min(3, 'Your name must be at least 2 chars long'),

  email: Yup.string()
  .required('Please enter a valid email adress')
  .email('Please enter a valid email adress'),

  message: Yup.string()
  .required('Please write something in your message!')

})