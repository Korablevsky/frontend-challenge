import { useState } from 'react'
import { CardProps } from '../ui/Card'

export function useFavoriteCards(cards: CardProps[]) {
  const [favoriteCards, setFavoriteCards] = useState(() => {
    if (typeof window !== 'undefined') {
      return JSON.parse(localStorage.getItem('favoriteCards') || '[]')
    }
    return []
  })

  const addToFavorites = (id: string) => {
    const selectedCard = cards.find(card => card.id === id)
    if (selectedCard && !favoriteCards.some((card:CardProps) => card.id === id)) {
      const newFavoriteCards = [...favoriteCards, selectedCard]
      setFavoriteCards(newFavoriteCards)
      localStorage.setItem('favoriteCards', JSON.stringify(newFavoriteCards))
    }
  }

  const removeFromFavorites = (id: string) => {
    const newFavoriteCards = favoriteCards.filter((card: CardProps) => card.id !== id);
    setFavoriteCards(newFavoriteCards);
    localStorage.setItem('favoriteCards', JSON.stringify(newFavoriteCards));
  }

  return { favoriteCards, addToFavorites, removeFromFavorites }
}