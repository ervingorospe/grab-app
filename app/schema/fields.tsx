const registrationFormFields = [
  {
    label: 'Your Name',
    fields: [
      {
        type: 'text',
        fieldName: 'first_name',
        placeHolder: 'First Name'
      },
      {
        type: 'text',
        fieldName: 'last_name',
        placeHolder: 'Last Name'
      }
    ]
  },
  {
    label: 'Email',
    fields: [
      {
        type: 'text',
        fieldName: 'email',
        placeHolder: 'ex: yourname@example.com'
      }
    ]
  },
  {
    label: 'Birth Date',
    fields: [
      {
        type: 'text',
        fieldName: 'birth_date',
        placeholder: 'DD-MM-YYYY'
      }
    ]
  },
  {
    label: 'Contact Number',
    fields: [
      {
        type: 'text',
        fieldName: 'contact_number',
        placeHolder: 'ex: +639123456789'
      }
    ]
  },
  {
    label: 'Register As:',
    fields: [
      {
        type: 'select',
        fieldName: 'role',
        options: [
          {
            text: 'Customer',
            value: 'CLIENT'
          },
          {
            text: 'Driver',
            value: 'DRIVER'
          }
        ]
      }
    ]
  },
  {
    label: 'Password',
    fields: [
      {
        type: 'password',
        fieldName: 'password',
        placeHolder: 'minimum of 6 characters'
      }
    ]
  },
  {
    label: 'Confirm Password',
    fields: [
      {
        type: 'password',
        fieldName: 'confirm_password',
        placeHolder: 're-enter your password'
      }
    ]
  }
]

const loginFormFields = [
  {
    label: 'Email',
    fields: [
      {
        type: 'text',
        fieldName: 'email',
        placeHolder: 'ex: yourname@example.com'
      }
    ]
  },
  {
    label: 'Password',
    fields: [
      {
        type: 'password',
        fieldName: 'password',
        placeHolder: 'Enter Your Password'
      }
    ]
  }
]

export { registrationFormFields, loginFormFields }
