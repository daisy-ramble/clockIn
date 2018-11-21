// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dayList: [
      {
        name: '练字',
        done: false
      },
      {
        name: '跑步',
        done: false
      },
      {
        name: '弹琴',
        done: false
      },
      {
        name: '健身',
        done: true
      }
    ],
    weekList: [
      {
        name: '水彩画',
        done: false
      },
      {
        name: '看书',
        done: false
      },
      {
        name: '学习新菜谱',
        done: true
      }
    ],
    now: 'day',
    array: [1, 2, 3, 4, 5, 1, 2, 3, 4]
  },
  onTab: function (event) {
    let type = event.currentTarget.dataset.type
    if(type==='day') {
      this.setData({
        now: 'day',
      });
    } else {
      this.setData({
        now: 'week',
      });
    }
  },
  changeState: function (event) {
    let index = event.currentTarget.dataset.idx
    let list = event.currentTarget.dataset.list
    let nowState = this.data[list][index].done
    let arr = [...this.data[list]]
    if (nowState) { // 完成变为未完成
      this.setData({
        [`${list}[${index}].done`]: false,
      });
      arr.splice(index, 1);
      arr.unshift(this.data[list][index])
    } else { //未完成变为完成
      this.setData({
        [`${list}[${index}].done`]: true,
      });
      arr.push(this.data[list][index])
      arr.splice(index, 1);
    }
    this.setData({
      [`${list}`]: arr,
    });
  },
  addTask () {
    wx.navigateTo({
      url: '../addTask/addTask'
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