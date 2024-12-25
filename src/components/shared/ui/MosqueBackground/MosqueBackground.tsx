import styles from './MosqueBackground.module.scss'

interface Props {
	children: React.ReactNode
}

export const MosqueBackground = ({ children }: Props) => {
	return (
		<>
			<div className={styles['bg-mosque']}></div>

			{children}
		</>
	)
}
