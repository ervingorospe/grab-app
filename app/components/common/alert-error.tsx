import { XCircleIcon, XMarkIcon } from '@heroicons/react/20/solid'

interface Alert {
  message: string
}

export default function AlertError({ message }: Alert) {
  if (message) {
    return (
      <div className="py-4">
        <div className="rounded-md bg-red-50 p-4">
          <div className="flex">
            <div className="shrink-0">
              <XCircleIcon aria-hidden="true" className="size-5 text-red-400" />
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-red-800">{message}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
