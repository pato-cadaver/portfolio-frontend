import axios from 'axios'
//import { config } from 'process'
import config from '../../config'

const apiUrl = 'http://localhost:1337/api'
//const { apiUrl} = config

const  getWorks = async () => axios
    .get(`${apiUrl}/portfolios`)
    .then(res => res)

export default getWorks
