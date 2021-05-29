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
        productsActive: 0,
        animated:true,
        background: ['/images/advertsing01.jpg', '/images/advertsing02.jpg'],
        indicatorDots: true,
        autoplay: true,
        interval: 2000,
        duration: 500
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