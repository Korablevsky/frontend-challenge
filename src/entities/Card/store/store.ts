const API_KEY = 'live_fGWXkt6sVYPiDjB84xWpzPtDWhxD3iccHvoi7jiwGyEQryCudqUUADIBLu0qdgyK'
const LIMIT = 12

type dataType = {
	id: string
	url: string
}

export const getCard = async () => {
	const res = await fetch(
		`https://api.thecatapi.com/v1/images/search?limit=${LIMIT}&api_key=${API_KEY}`,
		{ cache: 'force-cache' }
	)

	const data = await res.json()

	return data.map((item: dataType) => {
		return {
			id: item.id,
			url: item.url,
		}
	})
}
