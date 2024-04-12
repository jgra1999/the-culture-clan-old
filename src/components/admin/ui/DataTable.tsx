export default function DataTable({ headers }: { headers: string[] }) {
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
			<tbody>Data</tbody>
		</table>
	)
}
