说明：自定义的js，不是第三方的。第三方使用的js统一使用bower进行安装,在根目录/public/bower_components下面
第三方的js不允许修改，要修改在自定义里面进行修改
第三方的使用全部用 bower_components进行安装，
不懂的请自行，google，，baidu,,


common    公有模块js，一般是不在主页面引用的方法，放在这里面。
common/commonutils.js 这个js就是弹出层页面引入的，（目前里面放置着一个关闭自身弹出层的函数）


majorterm ！！里面部分的js都是直接的js，不是弹出部分的js。！！！

			里面的层级结构和view层相同。
            可以有公共模块，公共模块的层级结构和view大致相同

majorterm/homepage/index.js 主页部分的js，主要作用于外框的一些
majorterm/mine/index.js 我的部分的js，我的那个主页的部分
majorterm/seepiece/index.js 剔片部分的js，剔片部分，主要是外框，内部还要继续建立文件夹
majorterm/service/index.js 服务部分的js，服务部分的js，内部还要继续建立文件夹

majorterm/module/news_modele_all.js 所有模块部分的js都在里面写，就是那些section 下面处理的，做好相关的注释，后面在做迁移


layerfullscreen ！！里面部分的js是弹出部分的js。！！！

layerfullscreen/module/news_frm.js 里面是图文新闻引入头部和尾部的js其他视频部分的头部和尾部先用这个后面再改

里面的结构同view层，目前先把样式写好，具体结果后面在定





server    主页层面的js，与服务器交互，公用方法，函数的作用域为全局
server/index.js 主页私有的js
server/server.js 公共ajax方法
server/serverutils.js 公共的全局函数
server/servervar.js 公共的全局变量




layerfullscreen 所有彈出層相关的js，放在这里面