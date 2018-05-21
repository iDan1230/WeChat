// pages/do_exe/do_exe.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: true,//显示指示位
    autoplay: true,//轮播
    circular: true,
    interval: 3000,//间隔时间
    duration: 1000, //动画时间
    datas: [
      {
        name: '综合分析'
      },
      {
        name: '计划组织'
      },
      {
        name: '人际关系'
      },
      {
        name: '情景应答'
      },
      {
        name: '语言表达'
      },
      {
        name: '材料分析'
      }

    ]

  },
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots,

    })
  },
  bannerClick: function (e) {
    var index = e.currentTarget.dataset.index;
    console.log(index)
    wx.showToast({
      title: '点击第' + (index + 1) + '个banner',
    })
  },

  // 列表点击事件
  itemClick: function (e) {
    // 获取item的position
    var index = e.currentTarget.dataset.index;
    // log输出
    console.log(index+'')
    wx.setStorageSync('title', this.data.datas[index].name)
    wx.setStorageSync('index', index)
    wx.navigateTo({
      url: '/pages/question/question',
    })
    wx.showToast({
      title: 'item' + index,
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