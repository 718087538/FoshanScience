// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 底部导航数据
    index: "/images/index.png",
    make: "/images/make.png",
    my: "/images/my2.png",

    navcolor1: "",
    navcolor2: "",
    navcolor3: "nav-color",

    // 注册类型
    displaynone:'displaynone',
    schooljiondiff: "displaynone",
    testjion: "displaynone",
    companyjion: "displaynone",


    autoplay: "autoplay",
    // 底部导航数据
    index: "/images/index.png",
    make: "/images/make.png",
    my: "/images/my2.png",


    navcolor1: "",
    navcolor2: "",
    navcolor3: "nav-color",
    imgUrls: [
      '/images/swiper.png',
      '/images/swiper22.png',
      '/images/swiper.png',
    ],
    current: '0',

    // 弹出注册
    displaynone1: "displaynone",
    //选择发布单位是否隐藏
    selectedmake: "displaynone",
    schoolmake: "displaynone",
    companyMake: "displaynone"

  },

  
  // 切换到发布
  togglemake: function (e) {
    this.setData({
      index: "/images/index.png",
      make: "/images/make2.png",
      my: "/images/my.png",
      navcolor1: "",
      navcolor2: "nav-color",
      navcolor3: "",
      
    })
  },
  // 显示注册类型
  jion:function(){
    console.log("aa");
    this.setData({
      displaynone:'',
      // 未注册时使用下面这个
      // displaynone1:'',
    })
  },
// 显示高校注册类型
  school:function(){
    this.setData({
      displaynone: 'displaynone',
      schooljiondiff: "",
    })
  },
  company:function(){
    this.setData({
      displaynone: 'displaynone',
      schooljiondiff: "displaynone",
      testjion: "displaynone",
      companyjion: " ",
    })
  },
  test:function(){
this.setData({
  displaynone: 'displaynone',
  schooljiondiff: "displaynone",
  testjion: "",
  companyjion: "displaynone",
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
      navcolor3: "",
      selectedmake: "",
    })
  },
  close: function () {
    this.setData({
      index: "/images/index.png",
      make: "/images/make.png",
      my: "/images/my2.png",
      navcolor1: "",
      navcolor2: "",
      navcolor3: "nav-color",
      selectedmake: "displaynone",
      schoolmake: "displaynone",
      companyMake: "displaynone",
      displaynone: 'displaynone',
      displaynone1: 'displaynone',
      schooljiondiff: "displaynone",
      testjion: "displaynone",
      companyjion: "displaynone",
    })
  },
  schoolmake: function () {
    this.setData({
      index: "/images/index.png",
      make: "/images/make2.png",
      my: "/images/my.png",
      navcolor1: "",
      navcolor2: "nav-color",
      navcolor3: "",
      schoolmake: "",
      selectedmake: "displaynone",
    })
  },
  // 选择企业发布类型
  companymake: function () {
    this.setData({
      index: "/images/index.png",
      make: "/images/make2.png",
      my: "/images/my.png",
      companyMake: "",
      selectedmake: "displaynone",
    })

  },
  onHide:function(){
    this.setData({
      displaynone: 'displaynone',
      schooljiondiff: "displaynone",
      testjion: "displaynone",
      companyjion: "displaynone",
      displaynone: "displaynone",
      selectedmake: "displaynone",
      schoolmake: "displaynone",
      companyMake: "displaynone",
      index: "/images/index.png",
      make: "/images/make.png",
      my: "/images/my2.png",


      navcolor1: "",
      navcolor2: "",
      navcolor3: "nav-color",
    })
  },
  weizhuce:function(){
    displaynone1:'';
  }
})