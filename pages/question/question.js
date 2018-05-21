var util = require('../../utils/util.js')
var playTimeInterval
var recordTimeInterval

// pages/question/question.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: null,
    id: null,


    filePath: null,
    tempFilePaths: [],

    recording: false,
    playing: false,
    hasRecord: false,
    recordTime: 0,
    playTime: 0,
    formatedRecordTime: '00:00:00',
    formatedPlayTime: '00:00:00',

    index: 1,
    total: 10,
    content: '有两种观点，一种认为互联网交易会颠覆传统零售商，一种认为传统零售商无法替代，你怎么看？有两种观点，一种认为互联网交易会颠覆传统零售商，一种认为传统零售商无法替代，你怎么看？有两种观点，一种认为互联网交易会颠覆传统零售商，一种认为传统零售商无法替代，你怎么看？有两种观点，一种认为互联网交易会颠覆传统零售商，一种认为传统零售商无法替代，你怎么看？有两种观点，一种认为互联网交易会颠覆传统零售商，一种认为传统零售商无法替代，你怎么看？有两种观点，一种认为互联网交易会颠覆传统零售商，一种认为传统零售商无法替代，你怎么看？有两种观点，一种认为互联网交易会颠覆传统零售商，一种认为传统零售商无法替代，你怎么看？有两种观点，一种认为互联网交易会颠覆传统零售商，一种认为传统零售商无法替代，你怎么看？有两种观点，一种认为互联网交易会颠覆传统零售商，一种认为传统零售商无法替代，你怎么看？有两种观点，一种认为互联网交易会颠覆传统零售商，一种认为传统零售商无法替代，你怎么看？有两种观点，一种认为互联网交易会颠覆传统零售商，一种认为传统零售商无法替代，你怎么看？有两种观点，一种认为互联网交易会颠覆传统零售商，一种认为传统零售商无法替代，你怎么看？有两种观点，一种认为互联网交易会颠覆传统零售商，一种认为传统零售商无法替代，你怎么看？有两种观点，一种认为互联网交易会颠覆传统零售商，一种认为传统零售商无法替代，你怎么看？有两种观点，一种认为互联网交易会颠覆传统零售商，一种认为传统零售商无法替代，你怎么看？有两种观点，一种认为互联网交易会颠覆传统零售商，一种认为传统零售商无法替代，你怎么看？有两种观点，一种认为互联网交易会颠覆传统零售商，一种认为传统零售商无法替代，你怎么看？有两种观点，一种认为互联网交易会颠覆传统零售商，一种认为传统零售商无法替代，你怎么看？有两种观点，一种认为互联网交易会颠覆传统零售商，一种认为传统零售商无法替代，你怎么看？有两种观点，一种认为互联网交易会颠覆传统零售商，一种认为传统零售商无法替代，你怎么看？有两种观点，一种认为互联网交易会颠覆传统零售商，一种认为传统零售商无法替代，你怎么看？有两种观点，一种认为互联网交易会颠覆传统零售商，一种认为传统零售商无法替代，你怎么看？有两种观点，一种认为互联网交易会颠覆传统零售商，一种认为传统零售商无法替代，你怎么看？有两种观点，一种认为互联网交易会颠覆传统零售商，一种认为传统零售商无法替代，你怎么看？'

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let title = wx.getStorageSync('title')
    let index = wx.getStorageSync('index')

    //设置页面标题
    wx.setNavigationBarTitle({
      title: title
    })
    //更新页面数据源数据
    this.setData({
      title: title,
      id: index,
      index: 1,
      total: 12,
    })
    console.log('item position： ' + this.data.id)


    /**
     * 小程序网络框架
     * data:参数
     * header:请求头
     * success:请求成功回调
     * fail:请求失败回调
     * complete:网络请求完成（成功失败都会触发）
     */
    wx.request({
      url: 'http://www.baidu.com',
      method: 'get',
      // data: {
      //   id: index,
      //   title: title
      // },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        wx.showToast({
          title: '成功',
          icon: '/images/a_f.png',
          duration: 2000

        })
      },
      fail: function () {
        wx.showToast({
          title: '失败',
          icon: '/images/a_f.png',
          duration: 2000

        })
      },
      complete: function () {
        wx.showToast({
          title: '完成',
          icon: '/images/a_f.png',
          duration: 2000
        })
      }

    })

  },

  /**
   * 录音
   */

  // 开始录音
  startRecord: function () {
    // 修改界面为正在录音中（小程序数据绑定，所以这里修改数据页面自动修改。相当于Android中的DataBinding）
    this.setData({ recording: true })

    var that = this
    // setInterval 相当于一个计时器（这里设置1秒执行一次）
    recordTimeInterval = setInterval(function () {
      // 记录录音时间
      var recordTime = that.data.recordTime += 1
      // setData 表示给数据源赋值
      that.setData({
        // 调用util中的时间转换方法获取到时分秒
        formatedRecordTime: util.formatTime(that.data.recordTime),
        // 把录音时间赋值给本页面数据源
        recordTime: recordTime
      })
    }, 1000)
    // 小程序自带的开始录音函数
    wx.startRecord({
      // 成功函数
      success: function (res) {
        console.log('success')
        // setData
        that.setData({
          hasRecord: true,
          tempFilePath: res.tempFilePath,
          formatedPlayTime: util.formatTime(that.data.playTime)
        })
      },
      // 录音结束回调函数
      complete: function () {
        that.setData({ recording: false })
        // 停止计时器
        clearInterval(recordTimeInterval)
      }
    })
  },

  stopRecord: function () {
    // 小程序停止录音函数
    wx.stopRecord()
  },
  playVoice: function () {
    var that = this
    // 向数组中添加元素
    this.data.tempFilePaths.push(this.data.tempFilePath)
    // 开启计时器（播放录音的时间计时器）
    playTimeInterval = setInterval(function () {
      var playTime = that.data.playTime + 1
      console.log('update playTime', playTime)
      // setData
      that.setData({
        playing: true,
        formatedPlayTime: util.formatTime(playTime),
        playTime: playTime
      })
    }, 1000)
    // 小程序播放语音的函数
    wx.playVoice({
      filePath: this.data.tempFilePath,
      // 因为这里的播放功能播放完之后不需要其他的操作所以只有success回调
      success: function () {
        // 清除计时器
        clearInterval(playTimeInterval)
        var playTime = 0
        console.log('play voice finished')
        that.setData({
          // 设置停止播放（数据绑定）
          playing: false,
          formatedPlayTime: util.formatTime(playTime),
          playTime: playTime
        })
      }
    })
  },
  // 暂停播放
  pauseVoice: function () {
    // 停止计时器
    clearInterval(playTimeInterval)
    // 小程序暂停函数
    wx.pauseVoice()
    // setData
    this.setData({
      playing: false
    })
  },
  // 停止播放
  stopVoice: function () {
    clearInterval(playTimeInterval)
    this.setData({
      playing: false,
      formatedPlayTime: util.formatTime(0),
      playTime: 0
    })
    //小程序停止播放函数
    wx.stopVoice()
  },
  clear: function () {
    // 停止计时器
    clearInterval(playTimeInterval)
    //停止播放
    wx.stopVoice()
    //循环输出数据结果
    for (var k = 0, length = this.data.tempFilePaths.length; k < length; k++) {
      console.log(k + '  ' + this.data.tempFilePaths[k])
    }
    //还原初始化时的数据源
    this.setData({
      playing: false,
      hasRecord: false,
      tempFilePath: '',
      formatedRecordTime: util.formatTime(0),
      recordTime: 0,
      playTime: 0
    })
  },

  /**录音 */



  /**
   * 上一题
   */
  up: function () {
    let index = this.data.index - 1
    this.setData({
      index: index
    })

  },
  /**
   * 下一题
   */
  next: function () {

    let index = this.data.index + 1
    this.setData({
      index: index
    })
  },
  /**
   * 纠错
   */
  questErr: function () {

    wx.navigateTo({
      url: '/pages/err_correction/err_correction',
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