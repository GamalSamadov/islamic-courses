import { HrWithTitle } from '@/components/shared/ui/Form/HrWIhTItle/HrWithTitle'
import styles from './MediaButtons.module.scss'
import { GoogleButton } from '@/components/shared/ui/Form/GoogleButton/GoogleButton'

interface Props {
	isLoading: boolean
}

export const MediaButtons = ({ isLoading }: Props) => {
	return (
		<div className={styles.media}>
			<HrWithTitle title='Or' />
			<GoogleButton isLoading={isLoading} />
		</div>
	)
}
