Page({
  data: {
    // 底部导航数据
    index: "/images/index2.png",
    make: "/images/make.png",
    my: "/images/my.png",


    navcolor1: "nav-color",
    navcolor2: "",
    navcolor3: "",
    imgUrls: [
      '/images/swiper.png',
      '/images/swiper.png',
      '/images/swiper.png',
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000,

    // 弹出注册
    displaynone: "displaynone"
  },


  // 切换到我的
  togglemy: function (e) {
    this.setData({
      index: "/images/index.png",
      make: "/images/make.png",
      my: "/images/my2.png",
      navcolor1: "",
      navcolor2: "",
      navcolor3: "nav-color",
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

    })
  },
})