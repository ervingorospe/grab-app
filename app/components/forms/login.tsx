'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { loginSchema } from '@/validation'
import { LoginFormData } from '@/data'
import { apiAuthPost } from '@/api'
import { AlertError } from '@/common'
import Cookies from 'js-cookie'

export default function LoginForm() {
  const router = useRouter()
  const [responseError, setResponseError] = useState('')
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginFormData>({ resolver: yupResolver(loginSchema) })

  const onSubmit = async (data: LoginFormData) => {
    try {
      const response = await apiAuthPost<LoginFormData>('/auth/login', data)
      Cookies.set('token-auth', response.data.accessToken, { secure: true })
      Cookies.set('token-refresh', response.data.refreshToken, { secure: true })

      router.push('/dashboard')
    } catch (error: any) {
      setResponseError(error?.message)
    }
  }

  return (
    <div className="w-full px-4 md:w-3/4 xl:w-4/12">
      <div className="relative mb-6 flex w-full min-w-0 flex-col rounded-lg border-0 bg-white break-words shadow-lg">
        <div className="mb-0 rounded-t px-6 py-6">
          <div className="mb-3 text-center">
            <h6 className="text-2xl font-bold text-gray-700">Sign in</h6>
          </div>
          <hr className="border-primary-500 mt-6 border-b-1" />
        </div>
        <div className="flex-auto px-4 py-10 pt-0 lg:px-10">
          <AlertError message={responseError} />
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="w-full">
              <label className="mb-2 block text-xs font-bold uppercase" htmlFor="grid-password">
                Email
              </label>
              <input
                type="email"
                {...register('email')}
                className="w-full rounded border-0 bg-white px-3 py-3 text-sm shadow transition-all duration-150 ease-linear focus:ring focus:outline-none"
                placeholder="Email"
              />
              {errors.email && <p className="mt-2 text-sm text-red-500">{errors.email?.message}</p>}
            </div>

            <div className="w-full">
              <label className="mb-2 block text-xs font-bold uppercase" htmlFor="grid-password">
                Password
              </label>
              <input
                type="password"
                {...register('password')}
                className="w-full rounded border-0 bg-white px-3 py-3 text-sm shadow transition-all duration-150 ease-linear focus:ring focus:outline-none"
                placeholder="Password"
              />
              {errors.password && (
                <p className="mt-2 text-sm text-red-500">{errors.password?.message}</p>
              )}
            </div>

            <div className="mt-6 text-center">
              <button
                className="button bg-primary-600 w-full text-white hover:shadow-lg"
                type="submit"
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="relative mt-6 flex flex-wrap">
        <div className="w-1/2">
          <a href="#pablo" className="text-blueGray-200">
            <small>Forgot password?</small>
          </a>
        </div>
        <div className="w-1/2 text-right">
          <Link href="/register" className="text-blueGray-200">
            <small>Create new account</small>
          </Link>
        </div>
      </div>
    </div>
  )
}
