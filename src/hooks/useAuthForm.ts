import { PUBLIC_PAGES } from '@/config/pages/public.config'
import { IFormData } from '@/types/form.type'
import { useRouter } from 'next/navigation'
import { useTransition } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

export const useAuthForm = (isLogin: boolean | undefined) => {
	const { register, handleSubmit, reset } = useForm<IFormData>()

	const router = useRouter()
	const [isPending, startTransition] = useTransition()

	const mutateLogin = (data: IFormData) => {
		startTransition(() => {
			reset()
			router.push(PUBLIC_PAGES.HOME)
			console.log(data)
		})
	}

	const mutateRegister = (data: IFormData) => {
		startTransition(() => {
			reset()
			router.push(PUBLIC_PAGES.HOME)
			console.log(data)
		})
	}

	const onSubmit: SubmitHandler<IFormData> = data => {
		if (isLogin) {
			mutateLogin(data)
		} else {
			mutateRegister(data)
		}
	}

	const isLoading = isPending

	return { register, handleSubmit, onSubmit, isLoading }
}
