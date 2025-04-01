import { CheckCircleIcon, XMarkIcon } from '@heroicons/react/20/solid'

interface Alert {
  message: string
}

export default function AlertSuccess({ message }: Alert) {
  if (message) {
    return (
      <div className="py-4">
        <div className="rounded-md bg-green-50 p-4">
          <div className="flex">
            <div className="shrink-0">
              <CheckCircleIcon aria-hidden="true" className="size-5 text-green-400" />
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-green-800">{message}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
