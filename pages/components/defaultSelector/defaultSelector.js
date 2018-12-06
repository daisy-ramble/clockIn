// pages/components/defaultSelector/defaultSelector.js
const date = new Date()
const years = []
const months = []
const days = []
const dateList = []
const now = [0, date.getMonth(), date.getDate() - 1]
for (let i = date.getFullYear(); i <= date.getFullYear() + 10; i++) {
  years.push(i+'年')
}

for (let i = 1; i <= 12; i++) {
  months.push(i+'月')
}

for (let i = 1; i <= 31; i++) {
  days.push(i+'日')
}
dateList.push(years)
dateList.push(months)
dateList.push(days)

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    dataList: {
      type: Array,
      default: ''
    },
    type: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    connector: {
      type: String,
      default: '-'
    }
    // value: {
    //   type: String,
    //   default: ''
    // }
  },

  /**
   * 组件的初始数据
   */
  data: {
    popShow: false,
    first: true,
    pickValue: [0, 0, 0],
    val: ''
  },

  attached: function () { 
    if (this.properties.type === 'dateFromNow') {
      this.setData({
        dataList: dateList,
        pickValue: now
      })
    }
    // console.log(this.data.dataList)
  },
  /**
   * 组件的方法列表
   */
  methods: {
    popHide() {
      this.setData({
        popShow: false
      })
    },
    popShow () {
      this.setData({
        popShow: true
      })
    },
    confirm () {
      let len = this.data.pickValue.length
      let valArr = []
      let valStr = ''
      if (len > 0) {
        this.setData({
          first: false
        }) 
        if( len > 1 ) {
          for (let i = 0; i < len; i++) {
            // console.log(this.data.dataList[i][this.data.pickValue[i]])
            valArr.push(this.data.dataList[i][this.data.pickValue[i]])
            valStr = valArr.join(this.properties.connector)
            this.setData({
              val: valStr
            })
          }
        }
      } else {
        this.setData({
          first: true
        })
      }
    }
  }
})
