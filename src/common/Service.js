import axios from 'axios';
import { MAIN_URL } from '@/common/Url';
export function userLogin(data)
{
    return axios.post(`${MAIN_URL}login`,data)
}
export function userRegister(data)
{
    return axios.post(`${MAIN_URL}register`,data)
}
export function usercontact(data)
{
    return axios.post(`${MAIN_URL}sendcontact`,data)
}
export function ApplyCoupon(data)
{
    return axios.post(`${MAIN_URL}applycoupon`,data)
}
export function category(data)
{
    return axios.get(`${MAIN_URL}category`,data)
}

export function productByid(data)
{
    return axios.get(`${MAIN_URL}productid/`+data)
}
export function Cms(data)
{
    return axios.get(`${MAIN_URL}cmsid`+data)
}
export function updateprofile(data)
{
    let token=localStorage.getItem('access_token');
    return axios.post(`${MAIN_URL}changeprofile`,data,{ headers: { "Authorization": `Bearer ${token}` } })
}



export function UserDetails(data)
{
    return axios.post(`${MAIN_URL}adduserdetail`,data)
}
export function UserOrderDetails(data)
{
    return axios.post(`${MAIN_URL}adduserorders`,data)
}


export default {userLogin,userRegister,usercontact,category,
    ApplyCoupon,UserDetails,UserOrderDetails,productByid,Cms};