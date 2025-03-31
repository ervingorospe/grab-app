type Address = {
  label: string
  street: string
  city: string
  state: string
  postal_code: string
  country: string
  latitude?: number
  longitude?: number
}

type RegistrationFormData = {
  first_name: string
  last_name: string
  email: string
  password: string
  confirm_password: string
  birth_date: string
  contact_number: string
  role: 'CLIENT' | 'DRIVER'
}

type LoginFormData = {
  email: string
  password: string
}

type ProfileFormData = {
  first_name: string
  last_name: string
  birth_date: string
  contact_number: string
}

export type { RegistrationFormData, LoginFormData, ProfileFormData }
