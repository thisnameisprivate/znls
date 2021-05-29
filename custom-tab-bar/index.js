Component({
    data: {
      active: 0,
      list: [
        {
          pagePath: "/pages/index/index",
          text: "首页",
        },
        {
          pagePath: "/pages/mall/mall",
          text: "商城",
        },{
          pagePath: "/pages/message/message",
          text:"消息"
        },{
          pagePath: "/pages/user/user",
          text:"我的"
        }
      ]
    },
    methods: {
      onChange(e) {
         console.log(e.detail)
         this.setData({
           active: e.detail
         })
         wx.switchTab({
           url: this.data.list[e.detail].pagePath
         });
      },
      init() {
        const page = getCurrentPages().pop();
        console.log(page)
        this.setData({
       　  active: this.data.list.findIndex(item => item.pagePath === `/${page.route}`)
        });
       }
      }
  })