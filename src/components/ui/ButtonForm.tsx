export default function ButtonForm({ text }: { text: string }) {
	return (
		<button
			type='submit'
			className='border-2 border-mediumGray py-3 px-4 text-center rounded-lg w-full opacity-50 hover:opacity-100'
		>
			{text}
		</button>
	)
}
