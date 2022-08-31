// 导入封装好的axios
import axios from './index'

export function getCinemaLists () {
    return axios.get('https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=707724')
}

