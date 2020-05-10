// pages/me/administrator/administrator.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:'',
    detail:'',
    contacts:'',
    picture:''
  },

  nameInput:function(e){
    this.setData({
      name: e.detail.value
    })
  },
  detailInput:function(e){
    this.setData({
      detail: e.detail.value
    })
  },
  contactsInput:function(e){
    this.setData({
      contacts: e.detail.value
    })
  },
  picture:function(){
    var that = this;
    wx.chooseImage({  
      sizeType: ['original', 'compressed'],  
      success: function (res) {  
      that.setData({  
          picture: that.data.picture.concat(res.tempFilePaths)  
        })  
      }
    })
  },
  publish:function(){
    const db = wx.cloud.database()
    db.collection('Administrator').add({
      data:{
        name: this.data.name,
        detail: this.data.detail,
        contacts: this.data.contacts,
        picture: this.data.picture
      },
      success:res=>{
        console.log(res);
      },
      fail:err=>{
        console.log(err);
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})