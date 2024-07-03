import { useState, useEffect, useRef } from 'react'
import { translateToNumeral } from '@/services/translate'

export type GameState = {
  userInput: string
  userScore: number
  generatedNumber: number | null
  generatedNumberToNumeral: Promise<string | undefined> | string | undefined
  remainingTime: number
  isLoadingNumber: boolean
  typo: boolean
}

export const useGame = ({
  setGameStatus,
  saveUserScore,
}: {
  setGameStatus: React.Dispatch<React.SetStateAction<number>>
  saveUserScore: React.Dispatch<React.SetStateAction<number>>
}) => {
  const [state, setState] = useState<GameState>({
    userInput: '',
    userScore: 0,
    generatedNumber: null,
    generatedNumberToNumeral: '',
    remainingTime: 60,
    isLoadingNumber: false,
    typo: false,
  })

  // avoid useEffect re-render
  const initialized = useRef(false)

  // genereate random numers
  const generateRandomNumber = () => {
    return Math.floor(Math.random() * 1e3)
  }

  const incrementUserScore = () =>
    setState(prevState => ({
      ...prevState,
      userScore:
        state.generatedNumber && state.generatedNumber > 0
          ? state.userScore +
            Math.trunc(state.generatedNumber / state.remainingTime)
          : state.userScore + state.remainingTime,
    }))

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target

    setState(prevState => ({
      ...prevState,
      userInput: value,
      isTyping: true,
    }))

    // avoid unncesary calculations
    if (value.length === 0) return

    // If the user input match with the generated number
    if (value === state.generatedNumberToNumeral) {
      // Increment user score
      incrementUserScore()

      // Number written correctly then remove error icon
      // and generate new number to translate
      updateStateWhenUserAcceptNumber()
    } else {
      // Was a typo
      setState(prevState => ({
        ...prevState,
        typo: true,
      }))
    }
  }

  const updateStateWhenUserAcceptNumber = async () => {
    const randomNumber = generateRandomNumber()

    const translatedNumber = await translateToNumeral(randomNumber.toString())
    return setState(prevState => ({
      ...prevState,
      userInput: '',
      generatedNumber: randomNumber,
      generatedNumberToNumeral: translatedNumber,
      typo: false,
    }))
  }

  const onFinishedGame = (_: number) => {
    saveUserScore(state.userScore)
    // Navigate to Game Results Page
    setGameStatus(3)
  }

  // Generate a new random number and translate it when load the page
  // Isn't tottaly necessary but I'll do
  useEffect(() => {
    const fetchTranslatedNumberFirstTime = async (randomNumber: number) => {
      setState({ ...state, isLoadingNumber: true })
      const translatedNumber = await translateToNumeral(randomNumber.toString())
      setState({
        ...state,
        generatedNumber: randomNumber,
        generatedNumberToNumeral: translatedNumber,
        isLoadingNumber: false,
      })
    }

    // avoid useEffect re-render
    if (initialized.current) return
    initialized.current = true

    const randomNumber = generateRandomNumber()
    fetchTranslatedNumberFirstTime(randomNumber)
  }, [])

  return {
    state,
    setState,
    handleChange,
    onFinishedGame,
  }
}
