Page({
  data: {
    autoplay:"autoplay",
    // 底部导航数据
    index: "/images/index2.png",
    make: "/images/make.png",
    my: "/images/my.png",


    navcolor1: "nav-color",
    navcolor2: "",
    navcolor3: "",
    imgUrls: [
      '/images/swiper.png',
      '/images/swiper22.png',
      '/images/swiper.png',
    ],
    current:'0',

    // 弹出注册
    displaynone: "displaynone",
    //选择发布单位是否隐藏
    selectedmake:"displaynone",
    schoolmake:"displaynone",
    companyMake:"displaynone"
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
      selectedmake:"",
    })
  },
  close:function(){
    this.setData({
      index: "/images/index2.png",
      make: "/images/make.png",
      my: "/images/my.png",
      navcolor1: "nav-color",
      navcolor2: "",
      navcolor3: "",
      selectedmake: "displaynone",
      schoolmake:"displaynone",
      companyMake:"displaynone",
    })
  },
  schoolmake:function(){
    this.setData({
      index: "/images/index.png",
      make: "/images/make2.png",
      my: "/images/my.png",
      navcolor1: "",
      navcolor2: "nav-color",
      navcolor3: "",
      schoolmake:"",
      selectedmake: "displaynone",
    })
  },
// 选择企业发布类型
  companymake:function(){
    this.setData({
      index: "/images/index.png",
   make: "/images/make2.png",
   my: "/images/my.png",
   companyMake: "",
   selectedmake: "displaynone",
    })

 },

  getCurrent: function(e){
    this.setData({
      current: e.detail.current
    })
  },

  toleft: function () {
    if(this.data.current == '0'){
      this.setData({
        current: this.data.imgUrls.length - 1
      })
    }else{
      this.setData({
        current: this.data.current - 1
      })
    };
    
  },

  toright: function(){
    if (this.data.current == this.data.imgUrls.length - 1) {
      this.setData({
        current: '0'
      })
    } else {
      this.setData({
        current: this.data.current + 1
      })
    }
  },
  // 跳转到其他页面时隐藏发布
  onHide:function(){
    this.setData({
      displaynone: "displaynone",
      selectedmake: "displaynone",
      schoolmake: "displaynone",
      companyMake: "displaynone",
      index: "/images/index2.png",
      make: "/images/make.png",
      my: "/images/my.png",


      navcolor1: "nav-color",
      navcolor2: "",
      navcolor3: "",
    })
  }
  
})