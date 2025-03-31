import { ProfileForm } from '@/forms'

export default function Settings() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full py-8 md:px-6">
          <div className="container w-full px-2 xl:w-8/12">
            <ProfileForm />
          </div>
        </div>
      </div>
    </>
  )
}
