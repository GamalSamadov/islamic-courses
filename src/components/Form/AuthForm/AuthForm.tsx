'use client'

import { FormTitle } from '@/components/shared/ui/Form/FormTitle/FormTitle'
import { useAuthForm } from '@/hooks/useAuthForm'
import { useState } from 'react'
import { AuthToggle } from '@/components/shared/ui/Form/AuthToggle/AuthToggle'
import styles from './AuthForm.module.scss'
import { GoogleButton } from '@/components/shared/ui/Form/GoogleButton/GoogleButton'
import { AnimateDownOnClickRight } from '@/components/shared/ui/AnimateDownOnClick/AnimateDownOnClick'
import { Icon } from '@/components/shared/ui/Icon/Icon'

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
								width={30}
								height={30}
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
								width={30}
								height={30}
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
									width={30}
									height={30}
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
									width={30}
									height={30}
								/>
							</div>
						</div>

						<AuthToggle />
					</>
				)}

				<AnimateDownOnClickRight>
					<button
						type='submit'
						className='btn_primary_full'
						disabled={isLoading}
					>
						{isLoading ? 'Loading...' : isLogin ? 'Sign In' : 'Sign Up'}
					</button>
				</AnimateDownOnClickRight>

				<div className={styles.media}>
					<span className={styles.or}>or</span>
					<GoogleButton isLoading={isLoading} />
				</div>
			</form>
		</div>
	)
}
