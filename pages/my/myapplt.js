// pages/my/myapplt.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabid:1
  },
  clickTab:function(e){
    if(this.data.tabid==e.currentTarget.dataset.id){
      return false;
    }else{
      this.setData({
        tabid:e.currentTarget.dataset.id
      })
    }
  }
})