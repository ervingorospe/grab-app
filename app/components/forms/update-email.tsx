'use client'

import { useAuth } from '@/context/AuthContext'
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { EmailFormData } from '@/data'
import { apiUserPut } from '@/api'
import { emailSchema } from '@/validation'
import { AlertError, AlertSuccess } from '@/common'

export default function UpdateEmail() {
  const router = useRouter()
  const { user, logout } = useAuth()
  const [responseMessage, setResponseMessage] = useState('')
  const [isError, setIsError] = useState(false)
  const [isLoading, setLoading] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<EmailFormData>({
    resolver: yupResolver(emailSchema),
    defaultValues: {
      email: user?.email
    }
  })

  // Update form when `user` is available
  useEffect(() => {
    if (user) {
      reset({
        email: user.email || ''
      })
    }
  }, [user, reset])

  const onSubmit = async (data: EmailFormData) => {
    setLoading(true)

    if (user?.email == data.email) {
      setIsError(true)
      setResponseMessage('The new email must be different from the current email.')
      setLoading(false)

      return
    }

    try {
      await apiUserPut(`/update/email/${user?.id}`, data)
      logout()
      router.push('/thank-you')
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
          <h6 className="text-2xl font-bold text-gray-700">Email Information</h6>
        </div>
        <hr className="border-primary-500 mt-6 border-b-1" />
      </div>
      {isError && <AlertError message={responseMessage} />}
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
                  Current Email
                </label>
                <input
                  {...register('email')}
                  type="text"
                  className="w-full rounded border-0 bg-white px-3 py-3 text-sm text-gray-600 placeholder-gray-300 shadow transition-all duration-150 ease-linear focus:ring focus:outline-none"
                />
                {errors.email && (
                  <p className="mt-2 text-sm text-red-500">{errors.email?.message}</p>
                )}
              </div>
              <p className="py-6 text-sm text-gray-600">
                <strong>Note: </strong>Changing your email will require verification of the new
                email to reactivate your account.
              </p>
            </div>
          </div>

          <div className="px-4 text-left">
            <button
              className={`button ${isLoading ? 'opacity-50' : 'opacity-100'} bg-primary-600 w-full text-white hover:shadow-lg md:w-auto`}
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? 'submitting...' : 'Update Email'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
