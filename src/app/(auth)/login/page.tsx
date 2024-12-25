import { AuthForm } from '@/components/Form/AuthForm/AuthForm'
import styles from './Login.module.scss'
import { MosqueBackground } from '@/components/shared/ui/MosqueBackground/MosqueBackground'

const SignIn = () => {
	return (
		<MosqueBackground>
			<div className={styles.login}>
				<AuthForm isLogin />
			</div>
		</MosqueBackground>
	)
}

export default SignIn
