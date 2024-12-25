import { HrWithTitle } from '@/components/shared/ui/Form/HrWIhTItle/HrWithTitle'
import styles from './MediaButtons.module.scss'
import { GoogleButton } from '@/components/shared/ui/Form/GoogleButton/GoogleButton'
import { useRouter } from 'next/navigation'

interface Props {
	isLoading: boolean
}

export const MediaButtons = ({ isLoading }: Props) => {
	const router = useRouter()

	return (
		<div className={styles.media} onClick={() => router.push('/auth/google')}>
			<HrWithTitle title='Or' />
			<GoogleButton isLoading={isLoading} />
		</div>
	)
}
