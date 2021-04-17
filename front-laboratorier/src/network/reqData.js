import { request } from "./request"

export function getUserInfo(){
  return request({
    url:"/userinfo",
  })
} 


export function getAccount(){
  return request({
    url:"/account",
  })
} 

export function getHygiene(){
  return request({
    url:"/hygiene",
  })
} 

export function getMaterials(){
  return request({
    url:"/materials",
  })
} 

