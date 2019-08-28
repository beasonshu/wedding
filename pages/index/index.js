//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    windowHeight: '',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    imgUrls: [{
      'id': 0,
      'img': 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2062955420,1345462341&fm=26&gp=0.jpg'
    },
    {
      'id': 1,
      'img': 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2640477548,672523077&fm=26&gp=0.jpg'
    },
    {
      'id': 2,
      'img': 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1025942878,1952470296&fm=26&gp=0.jpg'
    }
    ],
    indicatorDots: false,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    circular: true,
    loadingHidden: true,
    ic_avatar: 'https://upload.jianshu.io/users/upload_avatars/6095830/2c92a70e-0a32-4347-bc1b-419536019afc?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240',
    dataList: { "banquet": [{ "title": "富贵皇宫", "square": "540m²", "floors": "1楼", "tables": "40桌", "thumbnail": "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2062955420,1345462341&fm=26&gp=0.jpg", "detail": "" }, { "title": "千禧店", "square": "540m²", "floors": "1楼", "tables": "40桌", "thumbnail": "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2062955420,1345462341&fm=26&gp=0.jpg", "detail": "" }, { "title": "威娜姆西餐", "square": "540m²", "floors": "1楼", "tables": "40桌", "thumbnail": "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2062955420,1345462341&fm=26&gp=0.jpg", "detail": "" }, { "title": "鸿富宫", "square": "540m²", "floors": "1楼", "tables": "40桌", "thumbnail": "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2062955420,1345462341&fm=26&gp=0.jpg", "detail": "" }], "menu": [{ "name": "金玉满堂宴", "price": "10" }, { "name": "寿比南山宴", "price": "20" }, { "name": "喜结良缘宴", "price": "30" }], "banquetDescription": { "url": "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2062955420,1345462341&fm=26&gp=0.jpg", "detail": "时隔一年，“不信任”这三个字再次让黄伟和团队陷入迷茫。待装修客户们对专业装饰公司的不信任、对设计师的怀疑、对材料行情的不理解，加之传统施工队对市场的控制权，使得公司试营业期便步履维艰。“刚开始的时候，因为团队都比较年轻，业主对我们的信任度普遍不高，我们都是亲自拜访每位客户，用我们的专业知识设身处地的对客户做好解释工作”，谈起最初的那段日子，黄伟笑着说。" } },
    for_list: [{ "name": "q" }, { "name": "2" }, { "name": "3" }]
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    var windowHeight = wx.getSystemInfoSync().windowHeight;//获取设备高度，小程序自带的方法
    this.setData({
      windowHeight: windowHeight
    })
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  onPullDownRefresh: function () {
    // 触发下拉刷新时执行
    this.showNavigationBarLoading;
    this.setData({
      loadingHidden: false
    });
    setTimeout(() => {
      this.setData({
        loadingHidden: true,
        imgUrls: [{
          'id': 0,
          'img': 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1565696543045&di=c2b33467f8313c4607161284ced262e5&imgtype=0&src=http%3A%2F%2Fg.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2F838ba61ea8d3fd1f97d14a90304e251f94ca5f44.jpg'
        },
        {
          'id': 1,
          'img': 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1565696543045&di=57d4fe3e084bfab19a55da3696e4c8d0&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fitbbs%2F1011%2F18%2Fc0%2F5904016_1290049685719_1024x1024.jpg'
        },
        {
          'id': 2,
          'img': 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1565696543045&di=6a61c2dd8698237343d1057dd98a1596&imgtype=0&src=http%3A%2F%2Fimage.xcar.com.cn%2Fattachments%2Fa%2Fday_141105%2F2014110511_fe55f356baeb917f99e9Q95QVNshO3Eo.jpg'
        }, {
          'id': 3,
          'img': 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3243149245,4073544300&fm=26&gp=0.jpg'
        }

        ]
      });
      wx.stopPullDownRefresh(); //通过方法调用刷新
    }, 1000)
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  onItemClick: function (event) {
    wx.showToast({
      icon: 'none',
      title: event.target.dataset.postid + "fsgeg"
    })
  },
  webDetail: function () {
    wx.navigateTo({
      //保留当前页面，跳转到应用内的某个页面（最多打开5个页面，之后按钮就没有响应的）
      url: "/pages/web/web?url=	https://yf-investment.cn/swagger-ui.html"
    })
  }
})