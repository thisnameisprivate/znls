Component({
    /**
     * 组件属性列表
     */
    properties: {
        isShow: Boolean, // 是否显示
    },
    /**
     * 组件初始数据
     */
    data: {
        border: false,
        controls:true,
        isShow:Boolean,
        operation: [
            {title:"推荐", icon: "good-job-o"},
            {title:"不推荐", icon: "cross"},
            {title:"评论", icon: "chat-o"},
            {title:"分享", icon: "share-o"}
        ],
    },
    /**
     * 页面加载
     */
    onReady () {
        this.setData({
            loading: false,
        })
    },
    /**
     * 组件初始方法列表
     */
    methods: {
        
    }
})