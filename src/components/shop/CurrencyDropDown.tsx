import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
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
		<Menu as='div' className='relative inline-block'>
			<div>
				<Menu.Button className='inline-flex w-full text-xs md:text-base items-center font-medium'>
					Moneda
					<ChevronDownIcon className='w-5 h-5' />
				</Menu.Button>
			</div>
			<Transition
				as={Fragment}
				enter='transition ease-out duration-100'
				enterFrom='transform opacity-0 scale-95'
				enterTo='transform opacity-100 scale-100'
				leave='transition ease-in duration-75'
				leaveFrom='transform opacity-100 scale-100'
				leaveTo='transform opacity-0 scale-95'
			>
				<Menu.Items className='flex flex-col items-start absolute -right-4 mt-2 py-2 pl-2 pr-5 bg-darkGray focus:outline-none z-10'>
					<Menu.Item>
						<button
							onClick={() => transformCurrentCurrency('USD')}
							className='w-full py-1 text-left flex items-center gap-x-1'
							value='USD'
						>
							Dolares
							<USDFlagIcon />
						</button>
					</Menu.Item>
					<Menu.Item>
						<button
							onClick={() => transformCurrentCurrency('CO')}
							className='w-full py-1 text-left flex items-center gap-x-1'
							value='CO'
						>
							Pesos
							<ColombiaFlagIcon />
						</button>
					</Menu.Item>
				</Menu.Items>
			</Transition>
		</Menu>
	)
}
