// pages/addTask/addTask.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    period: [
      {
        id: 1,
        name: '每天'
      },
      {
        id: 7,
        name: '每周'
      },
      {
        id: 0,
        name: '自定义'
    }],
    period1: [['每天', '每周', '自定义']],
    date: '',
    definedPeriod: false
  },
  // bindDateChange (e) {
  //   console.log(e)
  // },
  changePeriod (e) {
    if (this.data.period[e.detail].name === '自定义') {
      this.setData({
        definedPeriod: true,
      })
    } else {
      this.setData({
        definedPeriod: false,
      }) 
    }
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