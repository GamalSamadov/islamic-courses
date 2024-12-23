'use client'

import { FormTitle } from '@/components/shared/ui/Form/FormTitle/FormTitle'
import { useAuthForm } from '@/hooks/useAuthForm'
import Image from 'next/image'
import { useState } from 'react'
import { AuthToggle } from '@/components/shared/ui/Form/AuthToggle/AuthToggle'
import styles from './AuthForm.module.scss'
import { GoogleButton } from '@/components/shared/ui/Form/GoogleButton/GoogleButton'

interface Props {
	isLogin?: boolean | undefined
}

export const AuthForm = ({ isLogin }: Props) => {
	const [registerPasswordIsVisible, setRegisterPasswordIsVisible] =
		useState(false)
	const [
		registerConfirmPasswordIsVisible,
		setRegisterConfirmPasswordIsVisible,
	] = useState(false)
	const [loginPasswordIsVisible, setLoginPasswordIsVisible] = useState(false)

	const { register, handleSubmit, onSubmit, isLoading } = useAuthForm(isLogin)

	return (
		<div className={styles.container}>
			<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
				{isLogin ? (
					<>
						<FormTitle title='Sign In' />
						<div className={styles['input_container']}>
							<span className={styles['label']}>Email</span>
							<input
								{...register('email', {
									required: 'This field is required',
								})}
								className={styles.input}
								name='email'
								type='email'
								placeholder='Enter...'
							/>

							<Image
								className={styles.icon}
								src='/assets/icons/email.svg'
								width={30}
								height={30}
								alt='email'
								draggable={false}
							/>
						</div>
						<div className={styles['input_container']}>
							<span className={styles['label']}>Password</span>
							<input
								{...register('password', {
									required: 'This field is required',
								})}
								className={styles.input}
								name='password'
								type={loginPasswordIsVisible ? 'text' : 'password'}
								placeholder='Enter...'
							/>

							<div
								className={styles['password_icon_container']}
								onClick={() =>
									setLoginPasswordIsVisible(!loginPasswordIsVisible)
								}
							>
								<Image
									className={styles.icon}
									src={
										loginPasswordIsVisible
											? '/assets/icons/eye-opened.svg'
											: '/assets/icons/eye-closed.svg'
									}
									width={30}
									height={30}
									alt='password'
									draggable={false}
								/>
							</div>
						</div>

						<AuthToggle isLogin />
					</>
				) : (
					<>
						<FormTitle title='Sign Up' />
						<div className={styles['input_container']}>
							<span className={styles['label']}>Email</span>
							<input
								{...register('email', {
									required: 'This field is required',
								})}
								className={styles.input}
								name='email'
								type='email'
								placeholder='Enter...'
							/>
							<Image
								className={styles.icon}
								src='/assets/icons/email.svg'
								width={30}
								height={30}
								alt='email'
								draggable={false}
							/>
						</div>

						<div className={styles['input_container']}>
							<span className={styles['label']}>Password</span>
							<input
								{...register('password', {
									required: 'This field is required',
								})}
								className={styles.input}
								name='password'
								type={registerPasswordIsVisible ? 'text' : 'password'}
								placeholder='Enter...'
							/>

							<div
								className={styles['password_icon_container']}
								onClick={() =>
									setRegisterPasswordIsVisible(!registerPasswordIsVisible)
								}
							>
								<Image
									className={styles.icon}
									src={
										registerPasswordIsVisible
											? '/assets/icons/eye-opened.svg'
											: '/assets/icons/eye-closed.svg'
									}
									width={30}
									height={30}
									alt='password'
									draggable={false}
								/>
							</div>
						</div>

						<div className={styles['input_container']}>
							<span className={styles['label']}>Confirm Password</span>
							<input
								{...register('confirmPassword', {
									required: 'This field is required',
								})}
								className={styles.input}
								name='password'
								type={registerConfirmPasswordIsVisible ? 'text' : 'password'}
								placeholder='Enter...'
							/>

							<div
								className={styles['password_icon_container']}
								onClick={() =>
									setRegisterConfirmPasswordIsVisible(
										!registerConfirmPasswordIsVisible
									)
								}
							>
								<Image
									className={styles.icon}
									src={
										registerConfirmPasswordIsVisible
											? '/assets/icons/eye-opened.svg'
											: '/assets/icons/eye-closed.svg'
									}
									width={30}
									height={30}
									alt='confirmPassword'
									draggable={false}
								/>
							</div>
						</div>

						<AuthToggle />
					</>
				)}

				<button type='submit' className='btn_primary_full' disabled={isLoading}>
					{isLoading ? 'Loading...' : isLogin ? 'Sign In' : 'Sign Up'}
				</button>
			</form>

			<span className={styles.or}>or</span>

			<GoogleButton isLoading={isLoading} />
		</div>
	)
}
