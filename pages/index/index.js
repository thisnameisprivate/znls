Page({
  data: {
    active: 0,
    ellipsis: false,
    swipeable: true,
    animated:true,
  },
  // tabs切换
  tabsActive (event) {
    console.log(event)
  },
  onShow: function () {
    this.getTabBar().init();
  }
})
