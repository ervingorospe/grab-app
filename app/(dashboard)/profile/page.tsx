import { ProfileForm } from '@/forms'

export default function Profile() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full p-8">
          <div className="container w-full px-4 lg:w-8/12">
            <ProfileForm />
          </div>
        </div>
      </div>
    </>
  )
}
