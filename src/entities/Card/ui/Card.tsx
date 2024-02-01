'use client'
import IconHeart from '@/shared/iconHeart/ui/iconHeart'
import Spinner from '@/shared/spinner/ui/Spinner'
import Image from 'next/image'
import { useFavoriteCards } from '../store/useFavoriteCards'
import { useFetchCard } from '../store/useFetchCard'
import styles from './Card.module.css'

export type CardProps = {
	id: string
	url: string
}

export function Card() {
	const { data: card, loading } = useFetchCard()
	const { addToFavorites } = useFavoriteCards(card)

	if (loading) {
		return <Spinner />
	}

	return card.map((item: CardProps) => (
		<CardItem
			key={item.id}
			item={item}
			clicked={false}
			onHeartClick={() => addToFavorites(item.id)}
		/>
	))
}

export function CardItem({
	item: { url },
	onHeartClick,
	clicked
}: {
	item: CardProps
	onHeartClick: (id?: string) => void
	clicked: boolean
}) {
	return (
		<div className={styles.box}>
			<Image
				className={styles.image}
				src={url}
				alt='cat'
				width={225}
				height={225}
			/>
			<button className={styles.button} onClick={() => onHeartClick()}>
				<IconHeart className={styles.heart} clicked={clicked} />
			</button>
		</div>
	)
}
