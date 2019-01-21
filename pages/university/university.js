// pages/university/university.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    displaynone:"displaynone",
  },
  issue:function(e){
    this.setData({
      displaynone:'',
    })
  },
  close:function(e){
    this.setData({
      displaynone: 'displaynone',

    })
  },
  onHide:function () {
    this.setData({
      displaynone: 'displaynone',

    })
  },

})