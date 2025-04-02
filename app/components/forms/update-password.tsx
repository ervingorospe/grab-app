'use client'

import { useAuth } from '@/context/AuthContext'
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { PasswordFormData } from '@/data'
import { apiUserPut } from '@/api'
import { passwordSchema } from '@/validation'
import { AlertError, AlertSuccess } from '@/common'

export default function UpdatePassword() {
  const router = useRouter()
  const { user, logout } = useAuth()
  const [responseMessage, setResponseMessage] = useState('')
  const [isError, setIsError] = useState(false)
  const [isLoading, setLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<PasswordFormData>({
    resolver: yupResolver(passwordSchema)
  })

  const onSubmit = async (data: PasswordFormData) => {
    setLoading(true)

    try {
      await apiUserPut(`/update/password/${user?.id}`, data)
      logout()
      router.push('/password-updated')
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
          <h6 className="text-2xl font-bold text-gray-700">Change Password</h6>
        </div>
        <hr className="border-primary-500 mt-6 border-b-1" />
      </div>
      {isError && (
        <div className="px-6">
          <AlertError message={responseMessage} />
        </div>
      )}
      {!isError && (
        <div className="px-6">
          <AlertSuccess message={responseMessage} />
        </div>
      )}
      <div className="px-4 py-6 lg:px-10">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid space-y-6">
            <div className="w-full px-4 lg:w-6/12">
              <div className="relative mb-3 w-full">
                <label
                  className="mb-2 block text-xs font-bold text-gray-600 uppercase"
                  htmlFor="grid-first-name"
                >
                  Current Password
                </label>
                <input
                  {...register('current_password')}
                  type="password"
                  className="w-full rounded border-0 bg-white px-3 py-3 text-sm text-gray-600 placeholder-gray-300 shadow transition-all duration-150 ease-linear focus:ring focus:outline-none"
                />
                {errors.current_password && (
                  <p className="mt-2 text-sm text-red-500">{errors.current_password?.message}</p>
                )}
              </div>
            </div>
            <div className="w-full px-4 lg:w-6/12">
              <div className="relative mb-3 w-full">
                <label
                  className="mb-2 block text-xs font-bold text-gray-600 uppercase"
                  htmlFor="grid-first-name"
                >
                  New Password
                </label>
                <input
                  {...register('new_password')}
                  type="password"
                  className="w-full rounded border-0 bg-white px-3 py-3 text-sm text-gray-600 placeholder-gray-300 shadow transition-all duration-150 ease-linear focus:ring focus:outline-none"
                />
                {errors.new_password && (
                  <p className="mt-2 text-sm text-red-500">{errors.new_password?.message}</p>
                )}
              </div>
            </div>
            <div className="w-full px-4 lg:w-6/12">
              <div className="relative mb-3 w-full">
                <label
                  className="mb-2 block text-xs font-bold text-gray-600 uppercase"
                  htmlFor="grid-confirm-password"
                >
                  Confirm Password
                </label>
                <input
                  {...register('confirm_password')}
                  type="password"
                  className="w-full rounded border-0 bg-white px-3 py-3 text-sm text-gray-600 placeholder-gray-300 shadow transition-all duration-150 ease-linear focus:ring focus:outline-none"
                />
                {errors.confirm_password && (
                  <p className="mt-2 text-sm text-red-500">{errors.confirm_password?.message}</p>
                )}
              </div>
            </div>

            <div className="px-4 text-left">
              <button
                className={`button ${isLoading ? 'opacity-50' : 'opacity-100'} bg-primary-600 w-full text-white hover:shadow-lg md:w-auto`}
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? 'submitting...' : 'Update Password'}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
