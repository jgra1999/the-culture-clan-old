export const DislikeIcon = ({ fill }: { fill: string }) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		className='w-7 h-7'
		viewBox='0 0 24 24'
		strokeWidth='1.5'
		stroke='currentColor'
		fill={fill}
		strokeLinecap='round'
		strokeLinejoin='round'
	>
		<path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
		<path d='M7 13v-8a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1v7a1 1 0 0 0 1 1h3a4 4 0 0 1 4 4v1a2 2 0 0 0 4 0v-5h3a2 2 0 0 0 2 -2l-1 -5a2 3 0 0 0 -2 -2h-7a3 3 0 0 0 -3 3'></path>
	</svg>
)

export const LikeIcon = ({ fill }: { fill: string }) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		className='w-7 h-7'
		viewBox='0 0 24 24'
		strokeWidth='1.5'
		stroke='currentColor'
		fill={fill}
		strokeLinecap='round'
		strokeLinejoin='round'
	>
		{' '}
		<path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
		<path d='M7 11v8a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-7a1 1 0 0 1 1 -1h3a4 4 0 0 0 4 -4v-1a2 2 0 0 1 4 0v5h3a2 2 0 0 1 2 2l-1 5a2 3 0 0 1 -2 2h-7a3 3 0 0 1 -3 -3'></path>
	</svg>
)

export const WhatsappIcon = ({ styles }: { styles: string }) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		className={styles}
		viewBox='0 0 24 24'
		strokeWidth='2'
		stroke='currentColor'
		fill='none'
		strokeLinecap='round'
		strokeLinejoin='round'
	>
		<path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
		<path d='M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9'></path>
		<path d='M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1'></path>
	</svg>
)

export const ColombiaFlagIcon = () => (
	<svg xmlns='http://www.w3.org/2000/svg' className='w-5 h-5' viewBox='0 0 72 72'>
		<path fill='#f1b31c' d='M5 17h62v38H5z' />
		<path fill='#d22f27' d='M5 45h62v10H5z' />
		<path fill='#1e50a0' d='M5 36h62v9H5z' />
		<path
			fill='none'
			stroke='#000'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth='2'
			d='M5 17h62v38H5z'
		/>
	</svg>
)

export const USDFlagIcon = () => (
	<svg xmlns='http://www.w3.org/2000/svg' className='w-5 h-5' viewBox='0 0 72 72'>
		<path fill='#fff' d='M5 17h62v38H5z' />
		<path fill='#d22f27' d='M5 17h62v5H5zm0 9h62v4H5zm0 8h62v4H5z' />
		<path fill='#1e50a0' d='M5 17h32v21H5z' />
		<path fill='#d22f27' d='M5 42h62v4H5z' />
		<circle cx='9.5' cy='22' r='1.75' fill='#fff' />
		<circle cx='17.5' cy='22' r='1.75' fill='#fff' />
		<circle cx='25.5' cy='22' r='1.75' fill='#fff' />
		<circle cx='33.5' cy='22' r='1.75' fill='#fff' />
		<circle cx='29.5' cy='26' r='1.75' fill='#fff' />
		<circle cx='21.5' cy='26' r='1.75' fill='#fff' />
		<circle cx='13.5' cy='26' r='1.75' fill='#fff' />
		<circle cx='9.5' cy='30' r='1.75' fill='#fff' />
		<circle cx='17.5' cy='30' r='1.75' fill='#fff' />
		<circle cx='25.5' cy='30' r='1.75' fill='#fff' />
		<circle cx='33.5' cy='30' r='1.75' fill='#fff' />
		<circle cx='29.5' cy='34' r='1.75' fill='#fff' />
		<circle cx='21.5' cy='34' r='1.75' fill='#fff' />
		<circle cx='13.5' cy='34' r='1.75' fill='#fff' />
		<path fill='#d22f27' d='M5 50h62v5H5z' />
		<path
			fill='none'
			stroke='#000'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth='2'
			d='M5 17h62v38H5z'
		/>
	</svg>
)
