import { supabase } from '@/supabase/client'
import { TrashIcon, EyeIcon, PencilIcon } from '@heroicons/react/20/solid'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import { useEffect, useState } from 'react'
import { SearchInput } from '../ui/SearchInput'
import type { AccountData } from '@/types'

const headers = ['Descripción', 'Cantidad', 'Fecha', 'Accion']

interface Props {
	dbTableName: 'income' | 'investments'
}

export function DataTable({ dbTableName }: Props) {
	const [data, setData] = useState<any>([])
	const [Search, setSearch] = useState('')
	const [page, setPage] = useState(1)
	const [from, setFrom] = useState(0)
	const [to, setTo] = useState(4)
	const ITEMS_PER_PAGE = 4

	const fetchData = async () => {
		try {
			const { data, error } = await supabase
				.from(dbTableName)
				.select('*')
				.range(from, to)

			if (error) console.log(error)
			setData(data)
		} catch (error) {
			return Response.json(
				{
					message: error
				},
				{
					status: 500
				}
			)
		}
	}

	const deleteProduct = async (id: string) => {
		// const { error } = await supabase.from('products').delete().eq('id', id)
		// if (error) {
		// 	toast(<ErrorToast message='No se pudo eliminar el producto' />)
		// } else {
		// 	toast(<SuccessToast message='Producto eliminado correctamente' />)
		// }
	}

	/* Pagination Next and Prev button */
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

	const handleSearchProduct = (value: string) => {
		setSearch(value)
	}

	useEffect(() => {
		fetchData()
	}, [from, to, Search])
	return (
		<>
			<div className='flex flex-col md:flex-row gap-y-5 w-full items-center justify-between mb-10'>
				<div className='border border-white py-2 w-36 opacity-50 active:opacity-100 text-sm lg:hover:opacity-100 text-center rounded-lg'>
					<a href='/admin/productos/agregar-producto' className=''>
						Agregar Producto
					</a>
				</div>
				<div>
					<SearchInput
						text='Ingresa el nombre de la franela...'
						handleSearch={handleSearchProduct}
					/>
				</div>
			</div>
			<table className='w-full text-sm text-left text-grayText'>
				<thead className='text-xs text-grayText uppercase bg-darkGray'>
					<tr>
						{headers.map((header, index) => (
							<th scope='col' className='px-6 py-3' key={index}>
								{header}
							</th>
						))}
						<th scope='col' className='px-6 py-3'>
							<span className='sr-only'>Acciones</span>
						</th>
					</tr>
				</thead>
				<tbody>
					{data ? (
						<>
							{data.map((item: any) => (
								<tr
									key={item.id}
									className='border-b border-mediumGray bg-[#131313]'
								>
									<td className='px-6 py-4 text-white'>{item.description}</td>
									<td className='px-6 py-4'>${item.amount}</td>
									<td className='px-6 py-4'>{item.date}</td>
									<td className='px-6 py-4'>
										<div className='flex gap-x-2'>
											<a href={`/admin/productos/ver-producto/${item.id}`}>
												<EyeIcon className='w-5 opacity-70 hover:opacity-100' />
											</a>
											<a href={`/admin/productos/actualizar/${item.id}`}>
												<PencilIcon className='w-5 opacity-70 hover:opacity-100' />
											</a>
											<button onClick={() => deleteProduct(item.id)}>
												<TrashIcon className='w-5 opacity-70 hover:opacity-100' />
											</button>
										</div>
									</td>
								</tr>
							))}
						</>
					) : (
						<tr>
							<td className='text-center text-white pt-10 text-lg'>
								No hay datos registrados
							</td>
						</tr>
					)}
				</tbody>
			</table>
			<div className='flex justify-between mt-5'>
				<button
					className='flex items-center p-4 opacity-50 hover:opacity-100'
					disabled={page === 1}
					onClick={handlePrevButton}
				>
					<ChevronLeftIcon className='w-5' />
					Anterior
				</button>

				<button
					className='flex items-center p-4 opacity-50 hover:opacity-100'
					disabled={data && data.length < 5}
					onClick={handleNextButton}
				>
					Siguiente
					<ChevronRightIcon className='w-5' />
				</button>
			</div>
		</>
	)
}
