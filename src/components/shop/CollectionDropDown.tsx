import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

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
					<button onClick={setCollection} value=''>
						Todas
					</button>
				</DropdownMenuItem>
				<DropdownMenuItem>
					<button onClick={setCollection} value='New Culture'>
						New Culture
					</button>
				</DropdownMenuItem>
				<DropdownMenuItem>
					<button onClick={setCollection} value='Rap Culture'>
						Rap Culture
					</button>
				</DropdownMenuItem>
				<DropdownMenuItem>
					<button onClick={setCollection} value='Pop Culture'>
						Pop Culture
					</button>
				</DropdownMenuItem>
				<DropdownMenuItem>
					<button onClick={setCollection} value='Urban Culture'>
						Urban Culture
					</button>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
