import { useState } from 'react'
import { DislikeIcon } from '../icons/icons.tsx'
import { supabase } from '@/supabase/client.ts'

type Props = {
	currentDislikes: number | undefined
	id: string
}

export default function DisLikeButton({ currentDislikes, id }: Props) {
	const [disabledDisLikeButton, setDisabledDisLikeButton] = useState(false)

	const handleDisLikesButton = async () => {
		if (currentDislikes) {
			const { data, error } = await supabase
				.from('products')
				.update({ dislikes: currentDislikes + 1 })
				.eq('id', id)

			if (error) console.log(error)

			setDisabledDisLikeButton(true)
		}
	}

	return (
		<button
			onClick={handleDisLikesButton}
			disabled={disabledDisLikeButton}
			className={`hover:opacity-100 ${
				disabledDisLikeButton
					? 'cursor-default opacity-100'
					: 'cursor-pointer opacity-50'
			}`}
		>
			<DislikeIcon fill={disabledDisLikeButton ? 'white' : ''} />
		</button>
	)
}
