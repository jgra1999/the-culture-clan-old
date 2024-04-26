import { TrashIcon, EyeIcon, PencilIcon } from '@heroicons/react/20/solid'

interface Props {
	headers: string[]
	data: any
}
export default function DataTable({ headers, data }: Props) {
	const deleteProduct = (id: number) => {
		console.log(id)
	}
	return (
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
				{data.map((item: any) => (
					<tr key={item.id} className='border-b border-mediumGray bg-[#131313]'>
						<th
							scope='row'
							className='px-6 py-4 font-medium whitespace-nowrap text-white flex gap-x-2 items-center'
						>
							<img src={item.image_url_1} className='w-10 h-14' alt='' />
							<span>{item.name}</span>
						</th>
						<td className='px-6 py-4'>{item.collection}</td>
						<td className='px-6 py-4'>{item.likes}</td>
						<td className='px-6 py-4'>${item.price}</td>
						<td className='px-6 py-4'>
							<div className='flex gap-x-2 justify-end'>
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
			</tbody>
		</table>
	)
}
