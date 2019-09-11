// pages/webSocket/shake.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    a: 0,
    isShow: false,
    arr: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo
      })
    }
    
    //前端发起websocket连接
    wx.connectSocket({
      // 可以在WiFi环境下的IP地址测试
      // url: 'ws://192.168.0.150:8080', 
      url: 'ws://192.168.1.102:8080'
    });
    //接收到服务器广播信息的时候做的事情
    wx.onSocketMessage(function (res) {
      var obj = JSON.parse(res.data); //转对象
      var arr = obj.score_arr;
      //按照n值大小排序
      arr.sort((a, b) => {
        return b.n - a.n
      })
      self.setData({ arr }); //存储到本地data中的arr数组
    });   
  },
  //点击按钮发送消息给服务端
  sendmsg: function (){
    wx.sendSocketMessage({
      data: "你好！",
    })
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
    //当socket连接打开后，监听摇一摇:
    var self = this;
    self.setData({
      isShow:true
    })
    //当socket连接打开后，监听摇一摇:
    var self = this;
    var lastX = 0;
    wx.onAccelerometerChange(function (res) {
      
      // if (!self.isShow) {
      //   return
      // }
      //如果当前的x 减去上一次x的差 大于0.6，就设定为摇一摇成功
      if (Math.abs(res.x - lastX) > 0.6) {
        wx.showToast({
          title: "摇一摇成功"
        });
        //告诉服务器我是谁
        wx.sendSocketMessage({
          data: JSON.stringify({
            "nickName": self.data.userInfo.nickName,
            "avatarUrl": self.data.userInfo.avatarUrl
          })
        })
      }
      lastX = res.x;
    });

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    this.setData({
      isShow: false
    })
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