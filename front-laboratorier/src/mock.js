const Mock = require('mockjs')

const Random = Mock.Random

const userInfo = function () {
  let userList = []

  for (let i = 1; i <= 30; i++) {

    let template = Mock.mock({
      logo: Random.image(30),
      name: Random.cname(),
      'class|1': ["软件工程1901", "软件工程1902", "网络工程1901", "网络工程1902"],
      id: Random.string("Number", 12),
      'laboraid|1': ["f608", "f609"],
      seatId: `${i}`


    })
    userList.push(template)
  }

  return userList
}

const account = function(){
  let accouts = [];
 
  for(let n=0; n<3;n++){
    let accout = {tabList:[],labId:""};
    for(let i=0; i<60; i++){
      let template = Mock.mock({
        // id:Random.increment(), 
        // event:Random.ctitle(5,9),
        // amount:Random.float(-50,150,0,2), //支出与收入
        // date:'15'+Random.string("Number", 8),
        // remainSum: Random.float(-100,1000,0,2), //剩余
        type:Random.increment(), 
        desc:Random.ctitle(5,9),
        money:Random.float(-50,150,0,2), //支出与收入
        ctime:'15'+Random.string("Number", 8),
        remai_money: Random.float(-100,1000,0,2), //剩余
      })
      accout.tabList.push(template)
    }
    accouts.push(accout)
  }
  accouts[0].labId="F607"
  accouts[1].labId="F608"
  accouts[2].labId="F609"
  return accouts
}



const hygiene = function(){
  let tabList = [];
  for(let i=0; i<18; i++){
    let template = Mock.mock({
      weakId:Random.increment(1),
      mon:Random.cname(),
      wed:Random.cname(),
      frid:Random.cname(),
    })
    tabList.push(template)
  }
  return tabList
}


const materials = function(){
  let materis = [];
  let arr = ["host","screen","keyboard","mouse","socket","key","cleaningTool"];
  for(let n=0; n<21;n++){
      let template = Mock.mock({
        'labId|1': ["F608", "F609","F607"],
        'equipment|1': arr,
        all:Random.integer(10,25), 
        using:Random.integer(5,10), 
      })
      materis.push(template)
  }
  
  return materis
}


function padLeftZero(str) {
  return ("00" + str).substr(str.length);
}


function formatDate(date, fmt) {
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
  }

  let o = {
    "M+": date.getMonth() + 1,
    "d+": date.getDate(),
    "h+": date.getHours(),
    "m+": date.getMinutes(),
    "s+": date.getSeconds()
  };

  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + "";
      fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? str : padLeftZero(str));
    }
  }

  return fmt;
}


let da = Mock.mock({
  date:'15'+Random.string("Number", 11),
})


//时间戳转化
date = new Date(parseInt(da.date))
date = formatDate(date,"yyyy/MM/dd")
// console.log(date);



Mock.mock('http://127.0.0.1:8081/userinfo', userInfo) ;
Mock.mock('http://127.0.0.1:8081/account',account);
Mock.mock('http://127.0.0.1:8081/hygiene',hygiene);
Mock.mock('http://127.0.0.1:8081/materials',materials);

