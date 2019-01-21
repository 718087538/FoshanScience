// pages/my/issueInfo.js
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
    ], 
    displaynone:"displaynone",
    pinglun:"displaynone"
  },
  write:function(){
    this.setData({
      displaynone: " ",
      pinglun: ""

    })
  },
  close: function () {
    this.setData({
      displaynone: 'displaynone',
      pinglun: "displaynone"
    })
  }
})