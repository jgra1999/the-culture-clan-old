interface Props {
	text: string
	handleSearch: (value: string) => void
}

export function SearchInput({ text, handleSearch }: Props) {
	return (
		<div>
			<input
				type='text'
				placeholder={text}
				className='bg-transparent min-w-[500px] border border-white py-2 px-3 text-sm opacity-50 focus:opacity-100 outline-none rounded-lg'
				onChange={(e) => handleSearch(e.target.value)}
			/>
		</div>
	)
}
