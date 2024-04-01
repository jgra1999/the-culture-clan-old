import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import {
	Bars3Icon,
	DevicePhoneMobileIcon,
	HomeIcon,
	ShoppingBagIcon,
	WalletIcon,
	XMarkIcon
} from '@heroicons/react/24/outline'

import SideMenuOptions from './SideMenuOptions'

export default function SideMenu() {
	const [open, setOpen] = useState(false)

	return (
		<>
			<button type='button' onClick={() => setOpen(true)}>
				<Bars3Icon className='w-8 h-8' />
			</button>

			<Transition.Root show={open} as={Fragment}>
				<Dialog as='div' className='relative z-20' onClose={setOpen}>
					<Transition.Child
						as={Fragment}
						enter='ease-in-out duration-500'
						enterFrom='opacity-0'
						enterTo='opacity-100'
						leave='ease-in-out duration-500'
						leaveFrom='opacity-100'
						leaveTo='opacity-0'
					>
						<div className='fixed inset-0 bg-darkGray bg-opacity-60 transition-opacity' />
					</Transition.Child>

					<div className='fixed inset-0 overflow-hidden'>
						<div className='absolute inset-0 overflow-hidden'>
							<div className='pointer-events-none fixed inset-y-0 flex max-w-full pr-10'>
								<Transition.Child
									as={Fragment}
									enter='transform transition ease-in-out duration-500 sm:duration-700'
									enterFrom='-translate-x-full'
									enterTo='-translate-x-2'
									leave='-transform transition ease-in-out duration-500 sm:duration-700'
									leaveFrom='-translate-x-0'
									leaveTo='-translate-x-full'
								>
									<Dialog.Panel className='pointer-events-auto w-screen max-w-md'>
										<div className='flex h-full flex-col overflow-y-scroll bg-darkGray shadow-xl'>
											<div className='flex-1 overflow-y-auto px-4 py-6 sm:px-6'>
												<div className='flex items-start justify-between'>
													<Dialog.Title className='text-lg font-medium text-grayText uppercase'>
														Menu
													</Dialog.Title>
													<div className='ml-3 flex h-7 items-center'>
														<button
															type='button'
															className='relative -m-2 p-2 opacity-50 hover:opacity-100 '
															onClick={() => setOpen(false)}
														>
															<span className='absolute -inset-0.5' />
															<span className='sr-only'>Close panel</span>
															<XMarkIcon className='w-6 h-6' />
														</button>
													</div>
												</div>

												<div className='mt-16'>
													<div className='flow-root'>
														<ul role='list' className='-my-6 space-y-2'>
															<SideMenuOptions name='Home' link='/'>
																<HomeIcon className='flex-shrink-0 w-6 h-6' />
															</SideMenuOptions>
															<SideMenuOptions name='Tienda' link='/tienda'>
																<ShoppingBagIcon className='flex-shrink-0 w-6 h-6' />
															</SideMenuOptions>
															<SideMenuOptions name='FAQ' link='/'>
																<WalletIcon className='flex-shrink-0 w-6 h-6' />
															</SideMenuOptions>
															<SideMenuOptions name='Contacto' link='/contacto'>
																<DevicePhoneMobileIcon className='flex-shrink-0 w-6 h-6' />
															</SideMenuOptions>
															{/* <SideMenuOptions name='Iniciar sesión' link='/login'>
																<Login />
															</SideMenuOptions> */}
														</ul>
													</div>
												</div>
											</div>
										</div>
									</Dialog.Panel>
								</Transition.Child>
							</div>
						</div>
					</div>
				</Dialog>
			</Transition.Root>
		</>
	)
}
