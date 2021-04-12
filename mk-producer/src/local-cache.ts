import { nanoid } from 'nanoid'

export const SERVER_NAME = nanoid()

let SERVER_NUMBER = 0

export const setServerNumber = (num: number) => {
  SERVER_NUMBER = num
  console.log(
    `*****\nLocal server number for Server ${SERVER_NAME} now is ${SERVER_NUMBER}\n*****\n`
  )
}

export const getServerNumber = () => SERVER_NUMBER
