import * as yup from 'yup'
import { parse, isValid, format } from 'date-fns'

const registrationSchema = yup.object().shape({
  first_name: yup.string().required('First name is required'),
  last_name: yup.string().required('Last name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().min(6, 'Password must be at least 6 characters').required(),
  confirm_password: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords must match')
    .required('Confirm Password is required'),
  birth_date: yup
    .string()
    .required('Birth date is required')
    .test('is-valid-date', 'Invalid date format (dd-MM-yyyy)', (value) => {
      if (!value) return false
      const parsedDate = parse(value, 'dd-MM-yyyy', new Date())
      return isValid(parsedDate)
    })
    .test('is-old-enough', 'You must be at least 10 years old', (value) => {
      if (!value) return false
      const parsedDate = parse(value, 'dd-MM-yyyy', new Date())
      if (!isValid(parsedDate)) return false

      const today = new Date()
      let age = today.getFullYear() - parsedDate.getFullYear()
      const m = today.getMonth() - parsedDate.getMonth()
      if (m < 0 || (m === 0 && today.getDate() < parsedDate.getDate())) {
        age--
      }
      return age >= 10
    })
    .transform((value) => {
      const parsedDate = parse(value, 'dd-MM-yyyy', new Date())
      return isValid(parsedDate) ? format(parsedDate, 'dd-MM-yyyy') : value
    }),
  contact_number: yup
    .string()
    .matches(/^\+?[0-9]{10,15}$/, 'Invalid phone number')
    .test('len', 'Contact number must be more than 10 and less than 14 characters', (value) =>
      value ? value.length > 10 && value.length < 14 : false
    )
    .required('Contact Number is required'),
  role: yup.string().oneOf(['CLIENT', 'DRIVER']).required()
})

const loginSchema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().min(6, 'Password is required').required()
})

const profileSchema = yup.object().shape({
  first_name: yup.string().required('First name is required'),
  last_name: yup.string().required('Last name is required'),
  birth_date: yup
    .string()
    .required('Birth date is required')
    .test('is-valid-date', 'Invalid date format (dd-MM-yyyy)', (value) => {
      if (!value) return false
      const parsedDate = parse(value, 'dd-MM-yyyy', new Date())
      return isValid(parsedDate)
    })
    .test('is-old-enough', 'You must be at least 10 years old', (value) => {
      if (!value) return false
      const parsedDate = parse(value, 'dd-MM-yyyy', new Date())
      if (!isValid(parsedDate)) return false

      const today = new Date()
      let age = today.getFullYear() - parsedDate.getFullYear()
      const m = today.getMonth() - parsedDate.getMonth()
      if (m < 0 || (m === 0 && today.getDate() < parsedDate.getDate())) {
        age--
      }
      return age >= 10
    })
    .transform((value) => {
      const parsedDate = parse(value, 'dd-MM-yyyy', new Date())
      return isValid(parsedDate) ? format(parsedDate, 'dd-MM-yyyy') : value
    }),
  contact_number: yup
    .string()
    .matches(/^\+?[0-9]{10,15}$/, 'Invalid phone number')
    .test('len', 'Contact number must be more than 10 and less than 14 characters', (value) =>
      value ? value.length > 10 && value.length < 14 : false
    )
    .required('Contact Number is required')
})

const emailSchema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required')
})

const passwordSchema = yup.object().shape({
  current_password: yup.string().required('Current Password is required'),
  new_password: yup.string().min(6, 'New Password is required').required(),
  confirm_password: yup
    .string()
    .oneOf([yup.ref('new_password')], 'Passwords must match')
    .required('Confirm Password is required')
})

export { registrationSchema, loginSchema, profileSchema, emailSchema, passwordSchema }
