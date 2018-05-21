// pages/interview/interview.js
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
        id:1,
        url: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        title: 'title名字很长很长',
        content: '这是item的content这是item的content这是item的content这是item的content',
        person_num:1,
        price:100
      },
      {
        id: 2,
        url: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        title: 'title名字很长很长',
        content: '这是item的content这是item的content这是item的content这是item的content',
        person_num: 111120,
        price: 100
      },
      {
        id: 3,
        url: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        title: 'title名字很长很长',
        content: '这是item的content这是item的content这是item的content这是item的content',
        person_num: 11120,
        price: 100
      },
      {
        id: 4,
        url: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        title: 'title名字很长很长',
        content: '这是item的content这是item的content这是item的content这是item的content',
        person_num: 1320,
        price: 100
      },
      {
        id: 5,
        url: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        title: 'title名字很长很长',
        content: '这是item的content这是item的content这是item的content这是item的content',
        person_num: 1220,
        price: 100
      },
      {
        id: 6,
        url: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        title: 'title名字很长很长',
        content: '这是item的content这是item的content这是item的content这是item的content',
        person_num: 10,
        price: 100
      },
      {
        id: 7,
        url: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        title: 'title名字很长很长',
        content: '这是item的content这是item的content这是item的content这是item的content',
        person_num: 1200,
        price: 100
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
  itemClick: function (e) {

    var index = e.currentTarget.dataset.index;
    
    console.log(index)
    wx.setStorageSync("title",'详情')
    wx.navigateTo({
      url: '/pages/detaile/detaile',
    })
    wx.showToast({
      title: '点击第' + (index + 1) + '个Item',
    })

  },




  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    wx.showToast({
      title: 'onLoad',
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