// pages/university/issue-delail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    maintext: [
      "关键词1",
      "关键词2",
      "关键词3",
      "关键词4",
      "关键词5",
    ],  
    pinglun: 'displaynone',
  },
  pinglun: function () {
    this.setData({
      pinglun: ''
    })
  },

  close: function () {
    this.setData({
      displaynone: 'displaynone',
      pinglun: 'displaynone',
    })
  }

})