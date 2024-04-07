import { CheckCircleIcon } from '@heroicons/react/20/solid'

export default function SuccessToast({ message }: { message: string }) {
	return (
		<div className='flex items-center gap-1 bg-darkGray py-3 px-4 rounded-xl'>
			<CheckCircleIcon className='fill-green-500 w-5 h-5' />
			<span>{message}</span>
		</div>
	)
}
