import Image from 'next/image'
import styles from './Icon.module.scss'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'

interface Props {
	isEye?: boolean
	isVisibleEye?: boolean
	src?: string | StaticImport
	width: number
	height: number
	alt?: string
}

export const Icon = ({
	isEye,
	isVisibleEye,
	src,
	width,
	height,
	alt,
}: Props) => {
	if (isEye) {
		return (
			<Image
				className={styles.icon}
				src={
					isVisibleEye
						? '/assets/icons/eye-opened.svg'
						: '/assets/icons/eye-closed.svg'
				}
				width={30}
				height={30}
				alt='password'
				draggable={false}
			/>
		)
	}

	if (src && alt) {
		return (
			<Image
				className={styles.icon}
				src={src}
				width={width}
				height={height}
				alt={alt}
				draggable={false}
			/>
		)
	}
	return (
		<Image
			className={styles.icon}
			src='/assets/icons/book-white.svg'
			width={width}
			height={height}
			alt='icon'
			draggable={false}
		/>
	)
}
