import { useEffect, useState } from 'react'
import type { Database } from '@/types/supabase'
/* libraries */
import toast, { Toaster } from 'react-hot-toast'
import axios from 'axios'
import { supabase } from '@/supabase/client'
/* components */
import ErrorToast from '@/components/toasts/ErrorToast'
import SuccessToast from '@/components/toasts/SuccessToast'
import { slugify } from '@/utils-slugify'
import ButtonForm from '@/components/ui/ButtonForm'

export default function ProductsForm({ id }: { id?: string }) {
	const cloudName = 'df8nnzf8t'
	const preset_key = 'upload_tcc'
	const [product, setProduct] = useState({
		name: '',
		collection: '',
		price: 0,
		description: '',
		image_url_1: '',
		image_url_2: '',
		slug: ''
	})
	const [file1, setFile1] = useState<File | null>(null)
	const [file2, setFile2] = useState<File | null>(null)

	/* if (id) {
		const getProductData = async () => {
			const { data, error } = await supabase
				.from('products')
				.select('*')
				.eq('id', id)

			if (error) console.log(error)

			if (data) setProduct(data[0])
		}

		useEffect(() => {
			getProductData()
		}, [])
	} */

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target
		setProduct({ ...product, [name]: value })
	}

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		const imageData = new FormData()

		const { name, collection, price, description, image_url_1, image_url_2 } =
			product

		if (file1) {
			const formData = new FormData()
			formData.append('file', file1)
			formData.append('upload_preset', preset_key)
			try {
				const res = await axios.post(
					`https://api.cloudinary.com/v1_1/${cloudName}/upload`,
					formData
				)

				imageData.append('image_url_1', res.data.secure_url)
			} catch (error) {}
		}

		if (file2) {
			const formData = new FormData()
			formData.append('file', file2)
			formData.append('upload_preset', preset_key)
			try {
				const res = await axios.post(
					`https://api.cloudinary.com/v1_1/${cloudName}/upload`,
					formData
				)

				imageData.append('image_url_2', res.data.secure_url)
			} catch (error) {
				console.log('🚀 ~ file: index.tsx:82 ~ handleSubmit ~ error:', error)
			}
		}

		if (id) {
			const { data, error } = await supabase
				.from('products')
				.update({
					collection,
					name,
					price: +price,
					image_url_1,
					image_url_2,
					description,
					slug: slugify(name)
				})
				.eq('id', id)

			if (error) toast(<ErrorToast message={error?.message} />)
			toast(<SuccessToast message='Producto editado' />)
		} else {
			const { data, error } = await supabase.from('products').insert([
				{
					collection,
					name,
					price,
					image_url_1: String(imageData.get('image_url_1')),
					image_url_2: String(imageData.get('image_url_2')),
					description,
					slug: slugify(name)
				}
			])
			if (error) {
				toast.custom(<ErrorToast message={error.message} />)
			} else {
				toast.custom(<SuccessToast message='Producto agregado' />)
			}
		}
	}

	return (
		<>
			<form onSubmit={handleSubmit} className='flex flex-col gap-y-8'>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-8 '>
					<div className='flex flex-col gap-y-2 text-left relative'>
						{!file1 && (
							<img
								src={product?.image_url_1}
								alt=''
								className='rounded w-54 object-contain'
							/>
						)}
						{file1 && (
							<img
								src={URL.createObjectURL(file1)}
								alt=''
								className='rounded w-54 object-contain'
							/>
						)}
						<span className='font-medium text-grayText'>Imagen 1</span>

						<label className='bg-[#171717] outline-none opacity-50 focus:opacity-100 border border-mediumGray py-2 px-3 rounded-lg cursor-pointer'>
							Seleccionar imagen
							<input
								className='hidden w-full text-sm text-grayText border border-mediumGray rounded-lg cursor-pointer focus:outline-none'
								aria-describedby='user_avatar_help'
								type='file'
								name='image_url_1'
								onChange={(e) => {
									if (e.target.files) {
										setFile1(e.target.files[0])
									}
								}}
							/>
						</label>
					</div>

					<div className='flex flex-col gap-y-2 text-left relative'>
						{!file2 && (
							<img
								src={product?.image_url_2}
								alt=''
								className='rounded w-54 object-contain'
							/>
						)}
						{file2 && (
							<img
								src={URL.createObjectURL(file2)}
								alt=''
								className='rounded w-54 object-contain'
							/>
						)}
						<span className='font-medium text-grayText'>Imagen 2</span>
						<label className='bg-[#171717] outline-none opacity-50 focus:opacity-100 border border-mediumGray py-2 px-3 rounded-lg cursor-pointer'>
							Seleccionar imagen
							<input
								className='hidden w-full text-sm text-grayText border border-mediumGray rounded-lg cursor-pointer focus:outline-none'
								aria-describedby='user_avatar_help'
								type='file'
								name='image_url_2'
								onChange={(e) => {
									if (e.target.files) {
										setFile2(e.target.files[0])
									}
								}}
							/>
						</label>
					</div>
					<div className='flex flex-col gap-y-2 text-left relative'>
						<label htmlFor='name' className='text-grayText'>
							Nombre
						</label>
						<input
							type='text'
							name='name'
							onChange={handleChange}
							placeholder={product ? product.name : ''}
							className='bg-[#171717] outline-none opacity-50 focus:opacity-100 border border-mediumGray py-2 px-3 rounded-lg'
						/>
					</div>
					<div className='flex flex-col gap-y-2 text-left relative'>
						<label htmlFor='collection' className='text-grayText'>
							Colección
						</label>
						<select
							id='collection'
							className='bg-[#171717] outline-none opacity-50 focus:opacity-100 border border-mediumGray py-2.5 px-3 rounded-lg'
							name='collection'
							onChange={handleChange}
						>
							<option value=''>Seleccionar</option>
							<option value='New Culture'>New Culture</option>
							<option value='Rap Culture'>Rap Culture</option>
							<option value='Pop Culture'>Pop Culture</option>
							<option value='Urban Culture'>Urban Culture</option>
						</select>
					</div>
					<div className='flex flex-col gap-y-2 text-left relative'>
						<label htmlFor='price' className='text-grayText'>
							Precio
						</label>
						<input
							type='number'
							step={0.01}
							name='price'
							onChange={handleChange}
							placeholder={product ? product.price.toString() : ''}
							className='bg-[#171717] outline-none opacity-50 focus:opacity-100 border border-mediumGray py-2 px-3 rounded-lg'
						/>
					</div>
					<div className='flex flex-col gap-y-2 text-left relative'>
						<label htmlFor='slug' className='text-grayText'>
							slug
						</label>
						<input
							type='text'
							placeholder={product ? product.slug : ''}
							onChange={handleChange}
							className='bg-[#171717] outline-none opacity-50 focus:opacity-100 border border-mediumGray py-2 px-3 rounded-lg'
						/>
					</div>
					{/* TODO: Agregar input para ingresar la referencia del producto */}
					<div className='flex flex-col text-left gap-y-2 md:col-span-2 relative'>
						<label htmlFor='description' className='text-grayText'>
							Descripción
						</label>
						<textarea
							rows={5}
							placeholder={product ? product.description : ''}
							name='description'
							onChange={handleChange}
							className='bg-[#171717] outline-none opacity-50 focus:opacity-100 border border-mediumGray py-2 px-3 rounded-lg resize-none'
						></textarea>
					</div>
				</div>
				<ButtonForm text={id ? 'Actualizar Producto' : 'Agregar Producto'} />
			</form>
			<Toaster />
		</>
	)
}
