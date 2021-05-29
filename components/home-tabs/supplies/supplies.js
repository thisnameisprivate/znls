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
        vegetables:[
            {title: '机械', src:"/images/tabs/农机.png"},
            {title: '农药', src:"/images/tabs/农药.png"},
            {title: '种子', src:"/images/tabs/种子.png"},
            {title: '化肥', src:"/images/tabs/化肥.png"},
            {title: '农膜', src:"/images/tabs/薄膜.png"},
        ]
    },
    /**
     * 组件初始方法列表
     */
    methods: {
        
    }
})