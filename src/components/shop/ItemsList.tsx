import { useEffect, useState } from 'react'
import { supabase } from '@/../supabase/client'
import type { Database } from '@/../types/supabase'
/* componentes */
import ItemCard from './ItemCard'
import Loader from '../ui/Loader'
import CollectionDropDown from '../shop/CollectionDropDown'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import CurrencyDropDown from './CurrencyDropDown'

export default function ItemsList() {
	const [items, setItems] = useState<
		Database['public']['Tables']['products']['Row'][] | null
	>()
	const [loading, setLoading] = useState(false)

	/* filters */
	const [collection, setCollection] = useState('')
	const [orderBy, setOrderBy] = useState('created_at')

	/* pagination */
	const [page, setPage] = useState(1)
	const [from, setFrom] = useState(0)
	const [to, setTo] = useState(7)
	const ITEMS_PER_PAGE = 7

	const fetchItems = async () => {
		try {
			setLoading(true)

			let query = supabase.from('products').select('*').range(from, to)

			if (collection) query = query.eq('collection', collection)

			const { data, error } = await query.order(orderBy, { ascending: false })
			setItems(data)
		} catch (error) {
			console.log(error)
		} finally {
			setLoading(false)
			window.scrollTo({
				top: 0,
				behavior: 'smooth'
			})
		}
	}

	const handleCollectionFilter = (e: any) => {
		setCollection(e.target.value)
	}

	/* pagination handlers */
	const handleNextButton = () => {
		let from = page * ITEMS_PER_PAGE
		let to = from + ITEMS_PER_PAGE

		if (page > 0) {
			from += 1
			to += 1
		}

		setFrom(from)
		setTo(to)
		setPage(page + 1)

		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		})
	}

	const handlePrevButton = () => {
		let oldFrom = from - ITEMS_PER_PAGE
		let oldTo = to - ITEMS_PER_PAGE

		if (page === 2) {
			oldFrom -= 2
			oldTo -= 1
		}

		setFrom(oldFrom)
		setTo(oldTo)
		setPage(page - 1)
	}

	useEffect(() => {
		fetchItems()
	}, [collection, from, orderBy])

	return (
		<>
			<div className='flex justify-between items-center mt-5 '>
				<div className='text-lightGray flex justify-between sm:justify-normal items-center w-full text-sm font-medium gap-x-4'>
					<button
						onClick={() => setOrderBy('created_at')}
						className={`text-xs md:text-base ${
							orderBy === 'created_at' ? 'opacity-100' : 'opacity-50'
						}`}
					>
						Más Recientes
					</button>
					<button
						onClick={() => setOrderBy('likes')}
						className={`text-xs md:text-base ${
							orderBy === 'likes' ? 'opacity-100' : 'opacity-50'
						}`}
					>
						Más Populares
					</button>
					<div>
						<CollectionDropDown setCollection={handleCollectionFilter} />
					</div>
					<div>
						<CurrencyDropDown />
					</div>
				</div>
				<div className='hidden lg:flex justify-between gap-x-5'>
					<button
						onClick={handlePrevButton}
						className={`p-1.5 flex items-center justify-center border-2 border-white rounded opacity-50 ${
							page === 1 ? '' : 'hover:opacity-100'
						}`}
						disabled={page === 1}
					>
						<ChevronLeftIcon className='w-6 h-6' />
					</button>
					<button
						onClick={handleNextButton}
						className={`p-1.5 flex items-center justify-center border-2 border-white rounded opacity-50 ${
							items && items.length <= 7 ? '' : 'hover:opacity-100'
						}`}
						disabled={items ? items.length <= 7 : false}
					>
						<ChevronRightIcon className='w-6 h-6' />
					</button>
				</div>
			</div>
			<section className='mt-10 md:mt-20 mb-10 relative'>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10'>
					{items?.map((item: Database['public']['Tables']['products']['Row']) => (
						<ItemCard key={item.id} item={item} />
					))}
				</div>

				<div className='flex justify-between mt-10 lg:hidden'>
					<button
						onClick={handlePrevButton}
						className='px-2 py-[7px] flex items-center justify-center border-2 border-white rounded opacity-50 active:opacity-100'
						disabled={page === 1}
					>
						<ChevronLeftIcon className='w-8 h-8' />
					</button>
					{items && items.length > 7 ? (
						<button
							onClick={handleNextButton}
							className='px-2 py-[7px] flex items-center justify-center border-2 border-white rounded opacity-50 active:opacity-100'
							disabled={items ? items.length <= 7 : false}
						>
							<ChevronRightIcon className='w-8 h-8' />
						</button>
					) : (
						''
					)}
				</div>

				{loading && <Loader />}
			</section>
		</>
	)
}
