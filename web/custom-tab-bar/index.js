Component({
  data: {
    selected: 0,
    color: "#666666",
    selectedColor: "#d81e06",
    list: [
      {
        "pagePath": "/pages/tools/index",
        "iconPath": "/assets/images/tabbar/tab_0.png",
        "selectedIconPath": "/assets/images/tabbar/tab_0_active.png",
        "text": "小工具"
      },
      {
        "pagePath": "/pages/templates/index",
        "iconPath": "/assets/images/tabbar/tab_1.png",
        "selectedIconPath": "/assets/images/tabbar/tab_1_active.png",
        "text": "模板"
      },
      {
        "pagePath": "/pages/index/index",
        "iconPath": "/assets/images/tabbar/tab_2.png",
        "selectedIconPath": "/assets/images/tabbar/tab_2_active.png",
        "text": "制作影集"
      },
      {
        "pagePath": "/pages/mine/index",
        "iconPath": "/assets/images/tabbar/tab_3.png",
        "selectedIconPath": "/assets/images/tabbar/tab_3_active.png",
        "text": "我的"
      }
    ]
  },
  attached() {
  },
  methods: {
    switchTab(e) {
      console.log(e)
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({url})
      this.setData({
        selected: data.index
      })
    }
  }
})