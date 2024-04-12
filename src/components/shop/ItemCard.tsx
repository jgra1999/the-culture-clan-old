import ItemModal from './ItemModal'
import type { Database } from '@/types/supabase'
import { LikeIcon } from '../icons/icons'
import { useCurrency } from '@/store/currency'
import { useEffect, useState } from 'react'

interface Props {
	item: Database['public']['Tables']['products']['Row']
}

export default function ItemCard({ item }: Props) {
	const { currency } = useCurrency()
	const [currencyPrice, setCurrencyPrice] = useState(item.price)

	const transformCurrency = () => {
		if (currency === 'CO') {
			setCurrencyPrice(Math.round(item.price) * 3800)
		}
	}

	useEffect(() => {
		transformCurrency()
	}, [currencyPrice])

	return (
		<ItemModal item={item} price={currencyPrice}>
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
						{currency === 'CO' ? (
							<span className='text-xl'>
								{currencyPrice.toLocaleString('es-CO')} COP
							</span>
						) : (
							<span className='text-xl'>
								${currencyPrice}
								{Number.isInteger(item.price) ? '.00' : ''}
							</span>
						)}
					</div>
					<div className='flex gap-x-1 items-start'>
						{/* TODO: Cambiar icono del like */}
						<LikeIcon fill='' />
						{item.likes}
					</div>
				</div>
			</div>
		</ItemModal>
	)
}
