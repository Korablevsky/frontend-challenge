import { Card } from '@/entities/Card'
import styles from './page.module.css'

export default function Home() {
	return (
		<main className={styles.main}>
			<Card />
		</main>
	)
}