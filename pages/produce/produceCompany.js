// pages/produce/produceCompany.js
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
    //选择发布单位是否隐藏
    companymake: "displaynone",
    appltTest:"displaynone",
  },

  close: function () {
    this.setData({
      companymake: "displaynone",
      appltTest: "displaynone",
    })
  },
  issueItem:function(){
    this.setData({
      companymake: "",
    })
  },
  appltTest:function(){
    this.setData({
      appltTest: "",
    })
  },
  onHide: function () {
    this.setData({
      companymake: 'displaynone',
      appltTest: 'displaynone',

    })
  },
})