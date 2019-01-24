// pages/index.js
const MONTHS = ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May.', 'June.', 'July.', 'Aug.', 'Sept.', 'Oct.', 'Nov.', 'Dec.'];

Page({

  /**
   * 页面的初始数据
   */
  data: {
    year: new Date().getFullYear(),      // 年份
    month: new Date().getMonth() + 1,    // 月份
    day: new Date().getDate(),
    str: MONTHS[new Date().getMonth()],  // 月份字符串

    demo_days_style: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const days_count = new Date(this.data.year, this.data.month, 0).getDate();
    
    let demo_days_style = new Array;
    for (let i = 1; i <= days_count; i++) {
      const date = new Date(this.data.year, this.data.month - 1, i);
      if (i == 9) {
        demo_days_style.push({
          month: 'current', day: i, color: 'white', background: '#ffcc00'
        });
      } else if (i == 7) {
        demo_days_style.push({
          month: 'current', day: i, color: 'white', background: '#606bc5'
        });
      } else if (i == 29) {
        demo_days_style.push({
          month: 'prev', day: i, color: 'white', background: '#ffcc00'
        }); 
        }else {
        demo_days_style.push({
          month: 'current', day: i, color: 'black'
        });
      }
    }

    this.setData({
      demo_days_style
    });
  },

  dayClick: function (event) {
    wx.navigateTo({
      url: '../writediary/writediary'
    })
  },

  toast: function (event) {
    wx.navigateTo({
      url: '../lastdiary/lastdiary'
    })
  }

})