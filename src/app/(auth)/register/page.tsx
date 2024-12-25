import { AuthForm } from '@/components/Form/AuthForm/AuthForm'
import { MosqueBackground } from '@/components/shared/ui/MosqueBackground/MosqueBackground'
import styles from './Register.module.scss'

const SignUp = () => {
	return (
		<MosqueBackground>
			<div className={styles.register}>
				<AuthForm />
			</div>
		</MosqueBackground>
	)
}

export default SignUp
