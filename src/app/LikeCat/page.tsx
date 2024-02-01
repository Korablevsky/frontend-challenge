'use client'
import { useFavoriteCards } from '@/entities/Card/store/useFavoriteCards'
import styles from './page.module.css'

import { CardItem, CardProps } from '@/entities/Card/ui/Card'

export default function page() {
	const { favoriteCards, removeFromFavorites } = useFavoriteCards([])

	return (
		<main className={styles.main}>
			{favoriteCards.map((card: CardProps) => (
				<CardItem
					clicked={true}
					key={card.id}
					item={card}
					onHeartClick={() => removeFromFavorites(card.id)}
				/>
			))}
		</main>
	)
}
