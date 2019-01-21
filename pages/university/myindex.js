// pages/university/myindex.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      maintext:[
        "关键词1",
        "关键词2",
        "关键词3",
        "关键词4",
      ],    
      // 弹出联系方式
    displaynone: "displaynone"
  },
  callme:function(){
    this.setData({
      displaynone:'',
    })
  },
  close: function (e) {
    this.setData({
      displaynone: 'displaynone',

    })
  },

})