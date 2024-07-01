const BASE_URL = process.env.APP_URL ?? 'http://localhost:34545/user'

export interface Score {
  username: string
  score: string
  date: string
}

export interface ScoreResponse {
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
    return (await response.json()) as ScoreResponse
  } catch (err) {
    return err
  }
}
