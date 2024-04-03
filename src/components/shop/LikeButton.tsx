import { useState } from 'react'
import { LikeIcon } from '../icons/icons.tsx'
import { supabase } from 'supabase/client'

type Props = {
	currentLikes: number | undefined
	id: string
}

export default function LikeButton({ currentLikes, id }: Props) {
	const [disabledLikeButton, setDisabledLikeButton] = useState(false)
	const [likes, setLikes] = useState(currentLikes)

	const handleLikesButton = async () => {
		if (likes) {
			try {
				const { data, error } = await supabase
					.from('products')
					.update({ likes: likes + 1 })
					.eq('id', id)
					.select()

				if (error) console.log(error)
				if (data) console.log(data)
			} catch (error) {
			} finally {
				setLikes(likes + 1)
				setDisabledLikeButton(true)
			}
		}
	}

	return (
		<button
			onClick={handleLikesButton}
			className={`flex gap-x-1 items-center hover:opacity-100 ${
				disabledLikeButton
					? 'cursor-default opacity-100'
					: 'cursor-pointer opacity-50'
			}`}
			disabled={disabledLikeButton}
		>
			<LikeIcon fill={disabledLikeButton ? 'white' : ''} />
			{likes}
		</button>
	)
}
