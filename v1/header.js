// import login from './login.js';

import common from "./common.js";

//定义一个header对象，并使用export default语句将其导出为模块
let header = {
    //header对象包含一个了template属性，表示头部导航栏的布局
    //该布局包含了一个logo和菜单按钮，以及一个包含用户信息和下拉菜单列表的导航条
    data: {
        Logout: "退出"
    },
    template: `
		<div class="navbar-header"> //设置导航栏
			<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#sidebar-collapse">
				<span class="sr-only">Toggle navigation</span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
			</button>
			<a class="navbar-brand" href="#"><span>Covid</span>Vis</a>
		</div>
`
    ,
    //craeteView方法接受三个参数：app表示将该视图插入到哪个元素中，document表示DOM节点对象，而$表示jQuery对象
    createView: function (_app, document, $) {
        //具体怎么实现呢
        //先使用document.getElementById()获取名为header的DOM元素节点
        let a = document.getElementById("header")
        //然后将实例属性template的内容插入到该元素中，就可以渲染头部导航栏视图
        a.innerHTML = common.formateString(this.template, this.data)
    }
}
export default header;