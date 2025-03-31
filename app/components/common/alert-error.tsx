import { XCircleIcon } from '@heroicons/react/20/solid'

interface Alert {
  message: string
}

export default function AlertError({ message }: Alert) {
  if (message) {
    return (
      <div className="mb-4 rounded-md bg-red-50 p-4">
        <div className="flex">
          <div className="shrink-0">
            <XCircleIcon aria-hidden="true" className="size-5 text-red-400" />
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-red-800">{message}</h3>
          </div>
        </div>
      </div>
    )
  }
}
