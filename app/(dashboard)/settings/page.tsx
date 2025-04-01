import { ProfileForm, EmailForm } from '@/forms'

export default function Settings() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full py-8 md:px-6">
          <div className="container grid w-full gap-8 px-2 xl:w-8/12">
            <EmailForm />
            <ProfileForm />
          </div>
        </div>
      </div>
    </>
  )
}
