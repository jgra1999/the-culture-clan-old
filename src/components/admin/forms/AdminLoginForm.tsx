import { supabase } from '@/supabase/client'
/* components */
import ErrorToast from '@/components/toasts/ErrorToast'
import SuccessToast from '@/components/toasts/SuccessToast'
import toast, { Toaster } from 'react-hot-toast'

export function AdminLoginForm() {
	const setAdminCookie = () => {
		var now = new Date()
		var time = now.getTime()
		var expireTime = time + 19 * 24 * 60 * 60 * 1000
		now.setTime(expireTime)
		document.cookie = 'admin=true; expires=' + now.toUTCString() + '; path=/'
	}

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const email = e.currentTarget[0].value
		const password = e.currentTarget[1].value

		if (email === 'jgra11.2010@gmail.com') {
			const { data, error } = await supabase.auth.signInWithPassword({
				email,
				password
			})

			if (error) {
				toast.custom(<ErrorToast message='Contraseña incorrecta' />)
			} else {
				setAdminCookie()
				toast.custom(<SuccessToast message='Sesión iniciada con éxito ' />)

				setTimeout(() => {
					location.reload()
				}, 4000)
			}
		} else {
			toast.custom(<ErrorToast message='No tienes permisos para ingresar' />)
		}
	}

	return (
		<>
			<form
				className='min-w-[350px] w-3/4 sm:min-w-0 max-w-[500px] bg-darkGray rounded-lg py-6 px-8 space-y-8'
				onSubmit={handleSubmit}
			>
				<div className='flex flex-col gap-y-2 text-left relative'>
					<label htmlFor='email' className='text-grayText'>
						Correo Electrónico
					</label>
					<input
						className='bg-[#171717] outline-none opacity-50 focus:opacity-100 border border-mediumGray py-2 px-3 rounded-lg'
						type='email'
					/>
				</div>

				<div className='flex flex-col gap-y-2'>
					<label
						htmlFor='password'
						className='flex flex-col text-left text-grayText'
					>
						Contraseña
					</label>
					<div className='flex items-center w-full relative'>
						<input
							type='password'
							className='bg-[#171717] outline-none opacity-50 focus:opacity-100 border border-mediumGray py-2 px-3 rounded-lg w-full'
						/>

						{/* <div className='absolute right-3 text-grayText' onClick={handleShowPassword}>
						{type === 'password' ? <OpenEyeIcon /> : <IconEyeOff />}
					</div> */}
					</div>
				</div>

				<button
					type='submit'
					className='border-2 border-mediumGray py-3 px-4 text-center rounded-lg w-full opacity-50 hover:opacity-100'
				>
					Iniciar Sesión
				</button>
			</form>
			<Toaster />
		</>
	)
}
