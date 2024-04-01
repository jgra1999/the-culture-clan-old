import { type ReactElement } from 'react'

type Props = {
	children: ReactElement
	link: string
	name: string
}

export default function SideMenuOptions({ children, name, link }: Props) {
	return (
		<li>
			<a href={link} className='flex items-start p-2 text-lg'>
				{children}
				<span className='ml-3'>{name}</span>
			</a>
		</li>
	)
}
