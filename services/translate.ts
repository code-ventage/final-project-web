const BASE_URL =
  `${process.env.NEXT_PUBLIC_APP_URL}/consult` ??
  'http://localhost:34545/consult'

export interface Response {
  hash_response: {
    N: string
  }
}

export const translateToNumeral = async (input: string) => {
  if (input.length === 0) return
  try {
    const inputToNumber = parseInt(input)
    if (isNaN(inputToNumber)) return 'Numero inválido'

    const response = await fetch(`${BASE_URL}/letter`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ consult: inputToNumber }),
    })
    const translatedNumber = (await response.json()) as Response
    return translatedNumber.hash_response.N
  } catch (error) {
    return JSON.stringify(error)
  }
}

export const translateToNumber = async (input: string) => {
  if (input.length === 0) return
  try {
    if (!input.match(/^[a-zA-Z\s]*$/)) return 'Numeral inválido'
    const response = await fetch(`${BASE_URL}/digit`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ consult: input }),
    })
    const translatedNumber = (await response.json()) as Response
    if (!translatedNumber.hash_response || !translatedNumber.hash_response.N) {
      return 'Numeral inválido'
    }
    return translatedNumber.hash_response.N
  } catch (error) {
    return JSON.stringify(error)
  }
}
