import axios from 'axios'
import config from '../../config'

const { apiUrl } = config

const getWorks = async () => axios.get(`${apiUrl}/character`).then(res => res)

export default getWorks
