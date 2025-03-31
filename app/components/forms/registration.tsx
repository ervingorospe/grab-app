'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { registrationSchema } from '@/validation'
import { RegistrationFormData } from '@/data'
import { apiAuthPost } from '@/api'
import { AlertError } from '@/common'

export default function RegistrationForm() {
  const router = useRouter()
  const [responseError, setResponseError] = useState('')
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<RegistrationFormData>({ resolver: yupResolver(registrationSchema) })

  const onSubmit = async (data: RegistrationFormData) => {
    try {
      await apiAuthPost<RegistrationFormData>('/auth/register', data)
      router.push('/thank-you?type=registration')
    } catch (error: any) {
      setResponseError(error?.message)
    }
  }

  return (
    <div className="relative mb-6 flex w-full flex-col rounded-lg border-0 bg-white break-words shadow-lg">
      <div className="mb-0 rounded-t px-6 py-6">
        <div className="mb-3 text-center">
          <h6 className="text-2xl font-bold text-gray-700">Sign up with</h6>
        </div>
        <hr className="border-primary-500 mt-6 border-b-1" />
      </div>
      <div className="px-4 py-10 pt-0 lg:px-10">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="grid w-full">
              <label className="mb-2 block text-xs font-bold uppercase" htmlFor="grid-first-name">
                First Name
              </label>
              <input
                {...register('first_name')}
                type="text"
                className="w-full rounded border-0 bg-white px-3 py-3 text-sm shadow transition-all duration-150 ease-linear focus:ring focus:outline-none"
                placeholder="John"
              />
              {errors.first_name && (
                <p className="mt-2 text-sm text-red-500">{errors.first_name?.message}</p>
              )}
            </div>
            <div className="mb-3 w-full">
              <label className="mb-2 block text-xs font-bold uppercase" htmlFor="grid-last-name">
                Last Name
              </label>
              <input
                {...register('last_name')}
                type="text"
                className="w-full rounded border-0 bg-white px-3 py-3 text-sm shadow transition-all duration-150 ease-linear focus:ring focus:outline-none"
                placeholder="Doe"
              />
              {errors.last_name && (
                <p className="mt-2 text-sm text-red-500">{errors.last_name?.message}</p>
              )}
            </div>
          </div>

          <div className="w-full">
            <label className="mb-2 block text-xs font-bold uppercase" htmlFor="grid-email">
              Email
            </label>
            <input
              {...register('email')}
              type="email"
              className="w-full rounded border-0 bg-white px-3 py-3 text-sm shadow transition-all duration-150 ease-linear focus:ring focus:outline-none"
              placeholder="Email"
            />
            {errors.email && <p className="mt-2 text-sm text-red-500">{errors.email?.message}</p>}
          </div>

          <div className="w-full">
            <label className="mb-2 block text-xs font-bold uppercase" htmlFor="grid-birth-date">
              Birth Date
            </label>
            <input
              {...register('birth_date')}
              type="text"
              className="w-full rounded border-0 bg-white px-3 py-3 text-sm shadow transition-all duration-150 ease-linear focus:ring focus:outline-none"
              placeholder="DD-MM-YYYY"
            />
            {errors.birth_date && (
              <p className="mt-2 text-sm text-red-500">{errors.birth_date?.message}</p>
            )}
          </div>

          <div className="w-full">
            <label className="mb-2 block text-xs font-bold uppercase" htmlFor="grid-contact-number">
              Contact Number
            </label>
            <input
              {...register('contact_number')}
              type="text"
              className="w-full rounded border-0 bg-white px-3 py-3 text-sm shadow transition-all duration-150 ease-linear focus:ring focus:outline-none"
              placeholder="0921566892"
            />
            {errors.contact_number && (
              <p className="mt-2 text-sm text-red-500">{errors.contact_number?.message}</p>
            )}
          </div>

          <div className="w-full">
            <label className="mb-2 block text-xs font-bold uppercase" htmlFor="grid-role">
              Register As
            </label>
            <select
              {...register('role')}
              className="w-full rounded border-0 bg-white px-3 py-3 text-sm shadow transition-all duration-150 ease-linear focus:ring focus:outline-none"
            >
              <option value="CLIENT">Customer</option>
              <option value="DRIVER">Driver</option>
            </select>
            {errors.role && <p className="mt-2 text-sm text-red-500">{errors.role?.message}</p>}
          </div>

          <div className="w-full">
            <label className="mb-2 block text-xs font-bold uppercase" htmlFor="grid-password">
              Password
            </label>
            <input
              {...register('password')}
              type="password"
              className="w-full rounded border-0 bg-white px-3 py-3 text-sm shadow transition-all duration-150 ease-linear focus:ring focus:outline-none"
              placeholder="Password"
            />
            {errors.password && (
              <p className="mt-2 text-sm text-red-500">{errors.password?.message}</p>
            )}
          </div>

          <div className="w-full">
            <label
              className="mb-2 block text-xs font-bold uppercase"
              htmlFor="grid-confirm-password"
            >
              Confirm Password
            </label>
            <input
              {...register('confirm_password')}
              type="password"
              className="w-full rounded border-0 bg-white px-3 py-3 text-sm shadow transition-all duration-150 ease-linear focus:ring focus:outline-none"
              placeholder="Re-enter your password"
            />
            {errors.confirm_password && (
              <p className="mt-2 text-sm text-red-500">{errors.confirm_password?.message}</p>
            )}
          </div>

          {/* <div>
            <label className="inline-flex cursor-pointer items-center">
              <input
                id="customCheckLogin"
                type="checkbox"
                className="form-checkbox text-blueGray-700 ml-1 h-5 w-5 rounded border-0 transition-all duration-150 ease-linear"
              />
              <span className="ml-2 text-sm font-semibold">
                I agree with the{' '}
                <a href="#pablo" className="text-lightBlue-500" onClick={(e) => e.preventDefault()}>
                  Privacy Policy
                </a>
              </span>
            </label>
          </div> */}

          <div className="mt-6 text-center">
            <button
              className="button bg-primary-600 hover:shadow-l w-full text-white"
              type="submit"
            >
              Create Account
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
