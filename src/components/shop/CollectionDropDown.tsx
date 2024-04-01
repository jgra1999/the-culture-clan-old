import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

export default function CollectionDropDown({
	setCollection
}: {
	setCollection: (e: any) => void
}) {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger className='inline-flex w-full text-xs md:text-base items-center font-medium'>
				Colecciones
				<ChevronDownIcon className='w-5 h-5' />
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				<DropdownMenuItem>
					<button onClick={setCollection} className='w-full py-1 text-left' value=''>
						Todas
					</button>
				</DropdownMenuItem>
				<DropdownMenuItem>
					<button
						onClick={setCollection}
						className='w-full py-1 text-left'
						value='New Culture'
					>
						New Culture
					</button>
				</DropdownMenuItem>
				<DropdownMenuItem>
					<button
						onClick={setCollection}
						className='w-full py-1 text-left'
						value='Rap Culture'
					>
						Rap Culture
					</button>
				</DropdownMenuItem>
				<DropdownMenuItem>
					<button
						onClick={setCollection}
						className='w-full py-1 text-left'
						value='Pop Culture'
					>
						Pop Culture
					</button>
				</DropdownMenuItem>
				<DropdownMenuItem>
					<button
						onClick={setCollection}
						className='w-full py-1 text-left'
						value='Urban Culture'
					>
						Urban Culture
					</button>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
