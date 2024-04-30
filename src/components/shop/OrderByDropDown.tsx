import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

export default function OrderByDropDown({
	setOrderBy
}: {
	setOrderBy: (e: any) => void
}) {
	return (
		<div>
			<Menu as='div' className='relative inline-block'>
				<div>
					<Menu.Button className='inline-flex w-full text-xs md:text-base items-center font-medium'>
						Ordenar por
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
					<Menu.Items className='flex flex-col items-start absolute right-0 mt-2 w-56 bg-darkGray focus:outline-none z-10'>
						<Menu.Item>
							<button
								className='opacity-70 hover:opacity-100 px-4 py-2'
								onClick={setOrderBy}
								value='created_at'
							>
								Más Recientes
							</button>
						</Menu.Item>
						<Menu.Item>
							<button
								className='opacity-70 hover:opacity-100 px-4 py-2'
								onClick={setOrderBy}
								value='likes'
							>
								Más Populares
							</button>
						</Menu.Item>
					</Menu.Items>
				</Transition>
			</Menu>
		</div>
	)
}
