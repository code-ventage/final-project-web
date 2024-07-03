const BASE_URL =
  `${process.env.NEXT_PUBLIC_APP_URL}/user` ?? 'http://localhost:34545/user'

export interface Score {
  username: string
  score: string
  date: string
}

export interface GenericResponse {
  version: string
  response: {
    status: string
    message: string
    data: Score[]
  }
}

export const getUserScores = async () => {
  try {
    const response = await fetch(`${BASE_URL}/score/index`)
    return (await response.json()) as GenericResponse
  } catch (err) {
    return err
  }
}

export const saveUserScore = async (score: number, username: string) => {
  try {
    const response = await fetch(`${BASE_URL}/score/store`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ score, username }),
    })

    return (await response.json()) as GenericResponse
  } catch (err) {
    return err
  }
}
