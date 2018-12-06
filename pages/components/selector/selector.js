// pages/components/selector.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    options: {
      type: Array,
      value: []
    },
    key: {
      type: String,
      value: 'name'
    },
    type: {
      type: String,
      value: 'default'
    },
    startTime: {
      type: String,
      value: ''
    },
    placeholder: {
      type: String,
      value: ''
    }
    // down: {
    //   type: Boolean,
    //   value: true
    // }
  },
  // bindPickerChange: function (e) {
  //   // console.log('picker发送选择改变，携带值为', e.detail.value)
  //   // this.setData({
  //   //   index: e.detail.value
  //   // })
  // },

  /**
   * 组件的初始数据
   */
  data: {
    first: true
  },

  /**
   * 组件的方法列表
   */
  methods: {
    bindPickerChange: function (e) {
      this.setData({
        index: e.detail.value,
        first: false
      })
      this.triggerEvent('pickerchange', e.detail.value) 
    },
    bindDateChange: function(e) {
      this.setData({
        date: e.detail.value,
        first: false
      })
      this.triggerEvent('datechange', e.detail.value)
    }
  },
})
