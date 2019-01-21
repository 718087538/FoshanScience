// pages/testCompany/testCompany.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    Test:'displaynone',
  },
  issue: function () {
    this.setData({
      Test: ''
    })
  },
  close: function () {
    this.setData({
      Test:'displaynone'
    })
  },
  onHide:function(){
    this.setData({
      Test: 'displaynone'
    })
  }
})