Page({
  clickMe(e) {
    console.log(e);
  },
  data: {
    message: "Hello World!!!",
    theName: "Jack",
    flag: false,
    items: [{
        "name": "商品1"
      },
      {
        "name": "商品2"
      },
      {
        "name": "商品3"
      },
      {
        "name": "商品4"
      },
      {
        "name": "商品5"
      },
    ],
    condition:Math.floor(Math.random()*3+1),
    userInfo:{
      name:"yuan",
      phone:18888888888,
      address:"中国"
    },
  }
})