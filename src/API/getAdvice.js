import axios from 'axios'

const BASE_URL = 'https://api.adviceslip.com/advice'

export const getAdvice = async() => {
    const planets = await axios.get(`${BASE_URL}`).catch((e) => {
        console.error(e);
    })
    console.log('resp\n')
    console.log(advice.data.slip)

    return advice.data.slip
}