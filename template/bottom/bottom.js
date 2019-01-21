// template/bottom/bottom.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    index:"/images/index2.png",
    make:"/images/make.png",
    my:"/images/my.png",


    navcolor1:"nav-color",
    navcolor2:"",
    navcolor3:""
  },
  // 切换到我的
  togglemy:function(e){
    this.setData({
      index:"/images/index.png",
      make: "/images/make.png",
      my: "/images/my2.png",
      navcolor1: "",
      navcolor2: "",
      navcolor3: "nav-color"      
    })
  },
    // 切换到首页
  toggleindex: function (e) {
    this.setData({
      index: "/images/index2.png",
      make: "/images/make.png",
      my: "/images/my.png",
      navcolor1: "nav-color",
      navcolor2: "",
      navcolor3: ""
    })
  },
    // 切换到发布
  togglemake: function (e) {
    this.setData({
      index: "/images/index.png",
      make: "/images/make2.png",
      my: "/images/my.png",
      navcolor1: "",
      navcolor2: "nav-color",
      navcolor3: ""
    })
  },
})