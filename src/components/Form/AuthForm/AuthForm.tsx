'use client'

import { FormTitle } from '@/components/shared/ui/Form/FormTitle/FormTitle'
import { useAuthForm } from '@/hooks/useAuthForm'
import { useState } from 'react'
import { AuthToggle } from '@/components/shared/ui/Form/AuthToggle/AuthToggle'
import styles from './AuthForm.module.scss'
import { Icon } from '@/components/shared/ui/Icon/Icon'
import { MediaButtons } from '../MediaButtons/MediaButtons'
import { SubmitButton } from '@/components/shared/ui/Form/SubmitButton/SubmitButton'

interface Props {
	isLogin?: boolean | undefined
}

export const AuthForm = ({ isLogin }: Props) => {
	const [isVisible, setIsVisible] = useState({
		registerPassword: false,
		registerConfirmPassword: false,
		loginPassword: false,
	})

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

							<Icon
								src='/assets/icons/email.svg'
								width={25}
								height={25}
								alt='email'
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
								type={isVisible.loginPassword ? 'text' : 'password'}
								placeholder='Enter...'
							/>

							<div
								className={styles['password_icon_container']}
								onClick={() =>
									setIsVisible({
										...isVisible,
										loginPassword: !isVisible.loginPassword,
									})
								}
							>
								<Icon
									isEye
									isVisibleEye={isVisible.loginPassword}
									width={30}
									height={30}
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
							<Icon
								src='/assets/icons/email.svg'
								width={25}
								height={25}
								alt='email'
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
								type={isVisible.registerPassword ? 'text' : 'password'}
								placeholder='Enter...'
							/>
							<div
								className={styles['password_icon_container']}
								onClick={() =>
									setIsVisible({
										...isVisible,
										registerPassword: !isVisible.registerPassword,
									})
								}
							>
								<Icon
									isEye
									isVisibleEye={isVisible.registerPassword}
									width={25}
									height={25}
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
								type={isVisible.registerConfirmPassword ? 'text' : 'password'}
								placeholder='Enter...'
							/>

							<div
								className={styles['password_icon_container']}
								onClick={() =>
									setIsVisible({
										...isVisible,
										registerConfirmPassword: !isVisible.registerConfirmPassword,
									})
								}
							>
								<Icon
									isEye
									isVisibleEye={isVisible.registerConfirmPassword}
									width={25}
									height={25}
								/>
							</div>
						</div>

						<AuthToggle />
					</>
				)}

				<SubmitButton isAuth isLoading={isLoading} isLogin={isLogin} />

				<MediaButtons isLoading={isLoading} />
			</form>
		</div>
	)
}
