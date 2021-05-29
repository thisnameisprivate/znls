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
        loading:true,
        isShow:Boolean,
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