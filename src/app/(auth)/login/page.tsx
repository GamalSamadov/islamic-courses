import { AuthForm } from '@/components/Form/AuthForm/AuthForm'
import clsx from 'clsx'
import styles from './Login.module.scss'

const SignIn = () => {
	return (
		<div className={clsx(styles['login'])}>
			<AuthForm isLogin />
		</div>
	)
}

export default SignIn
