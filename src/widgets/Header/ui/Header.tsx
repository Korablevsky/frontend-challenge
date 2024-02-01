import Link from 'next/link'
import styles from './Header.module.css'

export function Header() {
	return (
		<header className={styles.header}>
			<nav className={styles.nav}>
				<Link className={styles.link} href='/'>
					Все котики
				</Link>
				<Link className={styles.link} href='/LikeCat'>
					Любимые котики
				</Link>
			</nav>
		</header>
	)
}
