import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { useCurrency } from '@/store/currency'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { ColombiaFlagIcon, USDFlagIcon } from '../icons/icons'

export default function CurrencyDropDown() {
	const { setCurrency } = useCurrency()

	const transformCurrentCurrency = (currency: string) => {
		switch (currency) {
			case 'CO':
				setCurrency('CO')
				window.location.reload()
				break
			default:
				setCurrency('USD')
				window.location.reload()
				break
		}
	}
	return (
		<DropdownMenu>
			<DropdownMenuTrigger className='inline-flex w-full text-xs md:text-base items-center font-medium'>
				Moneda
				<ChevronDownIcon className='w-5 h-5' />
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				<DropdownMenuItem>
					<button
						onClick={() => transformCurrentCurrency('USD')}
						className='w-full py-1 text-left flex items-center gap-x-1'
						value='USD'
					>
						Dolares
						<USDFlagIcon />
					</button>
				</DropdownMenuItem>
				<DropdownMenuItem>
					<button
						onClick={() => transformCurrentCurrency('CO')}
						className='w-full py-1 text-left flex items-center gap-x-1'
						value='CO'
					>
						Pesos
						<ColombiaFlagIcon />
					</button>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
