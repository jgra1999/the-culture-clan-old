import { type ReactElement } from 'react'

type Props = {
	children: ReactElement
	link: string
	name: string
	otherStyles?: string
}

export default function SideMenuOptions({
	children,
	name,
	link,
	otherStyles = 'text-lg'
}: Props) {
	return (
		<li>
			<a href={link} className={`flex items-start p-2 ${otherStyles}`}>
				{children}
				<span className='ml-3'>{name}</span>
			</a>
		</li>
	)
}
