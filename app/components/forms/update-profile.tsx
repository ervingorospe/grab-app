'use client'

import { useAuth } from '@/context/AuthContext'
import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { ProfileFormData } from '@/data'
import { apiUserPut } from '@/api'
import { profileSchema } from '@/validation'
import { AlertSuccess } from '@/common'

export default function UpdateProfile() {
  const { user } = useAuth()
  const [responseMessage, setResponseMessage] = useState('')
  const [isError, setIsError] = useState(false)
  const [isLoading, setLoading] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ProfileFormData>({
    resolver: yupResolver(profileSchema),
    defaultValues: {
      first_name: user?.firstName,
      last_name: user?.lastName,
      birth_date: user?.birthDate,
      contact_number: user?.contactNumber
    }
  })

  // Update form when `user` is available
  useEffect(() => {
    if (user) {
      reset({
        first_name: user.firstName || '',
        last_name: user.lastName || '',
        birth_date: user.birthDate || '',
        contact_number: user.contactNumber || ''
      })
    }
  }, [user, reset])

  const onSubmit = async (data: ProfileFormData) => {
    setLoading(true)

    try {
      const response = await apiUserPut(`/api/user/profile/${user?.id}`, data)
      setIsError(false)

      if (response.status === 200) {
        setResponseMessage('Your information has been updated!')
      }
      setLoading(false)
    } catch (error: any) {
      setIsError(true)
      setResponseMessage(error?.message)
      setLoading(false)
    }
  }

  return (
    <div className="relative mb-6 flex w-full min-w-0 flex-col rounded-lg border-0 bg-white break-words shadow-lg">
      <div className="mb-0 rounded-t px-6 py-6">
        <div className="mb-3 text-left">
          <h6 className="text-2xl font-bold text-gray-700">User Information</h6>
        </div>
        <hr className="border-primary-500 mt-6 border-b-1" />
      </div>
      {!isError && <AlertSuccess message={responseMessage} />}
      <div className="flex-auto px-4 py-6 lg:px-10">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-wrap space-y-6">
            <div className="w-full px-4 lg:w-6/12">
              <div className="relative mb-3 w-full">
                <label
                  className="mb-2 block text-xs font-bold text-gray-600 uppercase"
                  htmlFor="grid-first-name"
                >
                  First Name
                </label>
                <input
                  {...register('first_name')}
                  type="text"
                  className="w-full rounded border-0 bg-white px-3 py-3 text-sm text-gray-600 placeholder-gray-300 shadow transition-all duration-150 ease-linear focus:ring focus:outline-none"
                />
                {errors.first_name && (
                  <p className="mt-2 text-sm text-red-500">{errors.first_name?.message}</p>
                )}
              </div>
            </div>
            <div className="w-full px-4 lg:w-6/12">
              <div className="relative mb-3 w-full">
                <label
                  className="mb-2 block text-xs font-bold text-gray-600 uppercase"
                  htmlFor="grid-last-name"
                >
                  Last Name
                </label>
                <input
                  {...register('last_name')}
                  type="text"
                  className="w-full rounded border-0 bg-white px-3 py-3 text-sm text-gray-600 shadow transition-all duration-150 ease-linear focus:ring focus:outline-none"
                />
                {errors.last_name && (
                  <p className="mt-2 text-sm text-red-500">{errors.last_name?.message}</p>
                )}
              </div>
            </div>
            <div className="w-full px-4 lg:w-6/12">
              <div className="relative mb-3 w-full">
                <label
                  className="mb-2 block text-xs font-bold text-gray-600 uppercase"
                  htmlFor="grid-contact-number"
                >
                  Contact Number
                </label>
                <input
                  {...register('contact_number')}
                  type="text"
                  className="w-full rounded border-0 bg-white px-3 py-3 text-sm text-gray-600 shadow transition-all duration-150 ease-linear focus:ring focus:outline-none"
                />
                {errors.contact_number && (
                  <p className="mt-2 text-sm text-red-500">{errors.contact_number?.message}</p>
                )}
              </div>
            </div>
            <div className="w-full px-4 lg:w-6/12">
              <div className="relative mb-3 w-full">
                <label
                  className="mb-2 block text-xs font-bold text-gray-600 uppercase"
                  htmlFor="grid-birth-date"
                >
                  Birth Date
                </label>
                <input
                  {...register('birth_date')}
                  type="text"
                  className="w-full rounded border-0 bg-white px-3 py-3 text-sm text-gray-600 shadow transition-all duration-150 ease-linear focus:ring focus:outline-none"
                />
                {errors.birth_date && (
                  <p className="mt-2 text-sm text-red-500">{errors.birth_date?.message}</p>
                )}
              </div>
            </div>
          </div>

          <div className="px-4 text-left">
            <button
              className={`button ${isLoading ? 'opacity-50' : 'opacity-100'} bg-primary-600 w-full text-white hover:shadow-lg md:w-auto`}
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? 'submitting...' : 'Update Information'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
