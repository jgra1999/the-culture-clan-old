import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import type { Database } from 'types/supabase'
import { WhatsappIcon } from '../icons/icons.tsx'
import DisLikeButton from './DIslikeButton.tsx'

interface Props {
	item: Database['public']['Tables']['products']['Row']
	children: React.ReactNode
}

export default function ItemModal({ children, item }: Props) {
	let [isOpen, setIsOpen] = useState(false)

	function closeModal() {
		setIsOpen(false)
	}

	function openModal() {
		setIsOpen(true)
	}

	//TODO: Revisar iconos de los likes
	//TODO: Agregar funcionamiento para cambiar imagen principal con las que seleccionen
	//TODO: Agregar funcionamiento para cerrar el modal con el icono de la X

	return (
		<>
			<button type='button' onClick={openModal}>
				{children}
			</button>

			<Transition appear show={isOpen} as={Fragment}>
				<Dialog as='div' className='relative z-10' onClose={closeModal}>
					<Transition.Child
						as={Fragment}
						enter='ease-out duration-300'
						enterFrom='opacity-0'
						enterTo='opacity-100'
						leave='ease-in duration-200'
						leaveFrom='opacity-100'
						leaveTo='opacity-0'
					>
						<div className='fixed inset-0 bg-black/25' />
					</Transition.Child>

					<div className='fixed inset-0 overflow-y-auto'>
						<div className='flex min-h-full items-center justify-center p-4 text-center'>
							<Transition.Child
								as={Fragment}
								enter='ease-out duration-300'
								enterFrom='opacity-0 scale-95'
								enterTo='opacity-100 scale-100'
								leave='ease-in duration-200'
								leaveFrom='opacity-100 scale-100'
								leaveTo='opacity-0 scale-95'
							>
								<Dialog.Panel className='grid grid-cols-1 lg:grid-cols-2 w-full gap-y-5 max-w-5xl transform overflow-hidden rounded-2xl bg-[#141414] p-6 shadow-xl transition-all opacity-100 scale-100'>
									<div className='flex flex-col items-start gap-y-5 mt-5'>
										<button className='absolute right-3 top-3'>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												fill='none'
												viewBox='0 0 24 24'
												stroke-width='1.5'
												stroke='currentColor'
												aria-hidden='true'
												className='w-7 h-7'
											>
												<path
													stroke-linecap='round'
													stroke-linejoin='round'
													d='M6 18L18 6M6 6l12 12'
												></path>
											</svg>
										</button>
										<img
											src={item.image_url_2}
											alt='product image'
											className='w-full lg:w-11/12 rounded-lg aspect-[664/996]'
										/>
										<div className='flex justify-between lg:justify-start items-center gap-x-3 w-full'>
											<button>
												<img
													src={item.image_url_1}
													alt=''
													className='w-36 rounded-lg aspect-[664/996]'
												/>
											</button>
											<button>
												<img
													src={item.image_url_2}
													alt=''
													className='w-36 rounded-lg aspect-[664/996]'
												/>
											</button>
										</div>
									</div>
									<div className='flex flex-col gap-y-5 items-start '>
										<div className='text-left space-y-4'>
											<Dialog.Title
												as='h3'
												className='text-3xl xl:text-4xl font-medium '
											>
												{item.name}
											</Dialog.Title>
											<div>
												<span className='text-xl lg:text-2xl xl:text-4xl'>
													${item.price}
													{Number.isInteger(item.price) ? '.00' : ''}
												</span>
											</div>
										</div>
										<div className='mt-2'>
											<p className='text-left text-grayText text-sm sm:text-base font-medium'>
												{item.description}
											</p>
										</div>
										<div className='mt-4 flex items-center gap-x-5'>
											<a
												href='https://wa.me/+584244155064/?text=Hola!%20me%20interesa%20la%20franela%20de%20TCC Company Black'
												className='flex items-center justify-center gap-x-1 border-2 border-white py-3 px-4 rounded text-xs md:text-base opacity-50 hover:opacity-100 min-w-[50%]'
												target='_blank'
											>
												<WhatsappIcon styles='w-6 h-6' />
												Consultar Disponibilidad
											</a>
											<div className='flex items-end gap-x-4 divide-mediumGray'>
												<button className='flex gap-x-1 items-center hover:opacity-100 cursor-pointer opacity-50'>
													<svg
														xmlns='http://www.w3.org/2000/svg'
														className='w-7 h-7'
														viewBox='0 0 24 24'
														stroke-width='1.5'
														stroke='currentColor'
														fill=''
														stroke-linecap='round'
														stroke-linejoin='round'
													>
														{' '}
														<path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
														<path d='M7 11v8a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-7a1 1 0 0 1 1 -1h3a4 4 0 0 0 4 -4v-1a2 2 0 0 1 4 0v5h3a2 2 0 0 1 2 2l-1 5a2 3 0 0 1 -2 2h-7a3 3 0 0 1 -3 -3'></path>
													</svg>
													{item.likes}
												</button>
												<DisLikeButton
													id={item.id}
													currentDislikes={item.dislikes}
												/>
											</div>
										</div>
										<div className='space-y-5 text-left'>
											<div>
												<p className='text-base'>Fabricación</p>
												<ul className='list-disc text-grayText text-xs sm:text-sm font-medium pl-4 mt-2 space-y-1'>
													<li>Producción en Colombia</li>
													<li>100% Algodón</li>
													<li>Diseños impresos con DTF</li>
													<li>Hecho con amor</li>
												</ul>
											</div>
											<div>
												<p className='text-base'>Cuidado</p>
												<ul className='list-disc text-grayText text-xs sm:text-sm font-medium pl-4 mt-2 space-y-1'>
													<li>Utiliza un detergente suave</li>
													<li>Lava las franelas del revés</li>
													<li>Opta por el secado al aire</li>
													<li>Lávalo con amor</li>
												</ul>
											</div>
										</div>
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition>
		</>
	)
}
