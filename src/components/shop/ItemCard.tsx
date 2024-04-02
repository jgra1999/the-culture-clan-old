import { HandThumbUpIcon } from '@heroicons/react/24/outline'
import ItemModal from './ItemModal'
import type { Database } from 'types/supabase'

interface Props {
	item: Database['public']['Tables']['products']['Row']
}

export default function ItemCard({ item }: Props) {
	return (
		<ItemModal item={item}>
			<div className='flex flex-col gap-y-4 hover:scale-105 transition-all'>
				<img
					src={item.image_url_2}
					alt={`Franela - ${item.name}`}
					className='aspect-[384/576] h-full w-full rounded-lg'
					loading='lazy'
				/>
				<div className='flex justify-between font-medium w-full text-start'>
					<div>
						<p className='text-[#5e5e5e] text-xl font-bold item-name'>{item.name}</p>
						<span className='text-xl'>
							${item.price}
							{Number.isInteger(item.price) ? '.00' : ''}
						</span>
					</div>
					<div className='flex gap-x-1 items-start'>
						{/* TODO: Cambiar icono del like */}
						<HandThumbUpIcon className='w-7 h-7' />
						{item.likes}
					</div>
				</div>
			</div>
		</ItemModal>
	)
}
