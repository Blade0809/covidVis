import common from "./common.js";//导入common模块，用于处理一些公共方法
import common2 from "./common2.js";//导入common2模块，用于处理一些公共方法
import routers from "./routers.js";//导入routers模块，用于获取路由配置
//该组件的作用是生成一个菜单栏，根据用户的角色动态加载不同的路由配置文件
let menu = {
    data: {
        licontent: ''//菜单列表内容
    }
    ,
    template: `
    <div class="well" style="padding: 8px 0;">
    <ul id="lists" class="nav nav-list">
        {#licontent#}
    </ul>
</div>
    `
    ,

    createView: async function (app, document, $) {//定义createView方法，用于生成菜单视图
        // let role1 = sessionStorage.getItem("role");//获取当前用户角色

        // let roledata = "";//定义角色的数据变量

        // if (role1 == 'admin') {//根据角色判断使用不同的路由配置文件
        //     roledata = "/router_admin.json";
        // }
        // else if (role1 == 'student') {
        //     roledata = "/router_student.json";
        // }
        // else {
        //     roledata = "/router_teacher.json";
        // }
        //首先通过common.ajajPromise方法从上面判断后看用户角色指定的路由配置文件中获取对应的路由配置数据
        let result1 = await common.ajaxPromise('/router_admin.json', 'get', '', $);//使用common模块中的ajaxPromise方法获取路由配置数据

        let pos = 0;//记录位置
        let listcontent = '';//定义字符串listcontent用来存储菜单列表内容
        //接下来使用forEach循环遍历路由配置中的每个元素也就是菜单项，动态生成菜单
        result1.forEach(element => {
            //alert("element.topname=" + element.topname);
            //在循环中首先创建顶级菜单项的HTML代码，然后将顶级菜单项的名称放入m变量中
            let m = '<li class = "nav-header">' + element.topname + '</li>';//顶级菜单项
            let m1 = "";
            //然后使用forEach循环遍历当前菜单项的子菜单项
            element.contents.forEach(e1 => {//遍历子菜单项
                if (pos == 0) {//根据当前位置是否为0,决定子菜单项是否添加active类名，用来实现默认选中的效果
                    m1 += '<li class = "active">';
                } else {
                    m1 += '<li>';
                }
                //alert(e1.path);
                // alert(1)
                // alert(common2.getIcon(e1.path, routers));
                m1 += '<a href="#" id=' + '"' + e1.path + '"' + '><i class = ' + '"' + common2.getIcon(e1.path, routers) + '"' + '></i>' + e1.name + '</a></li>';
                pos++;

            });
            //将<li>标签与<li>标签与<a>标签拼接起来
            m += m1;//拼接顶级菜单项和子菜单项的HTML代码拼接起来
            //将拼接结果添加到listcontent中
            listcontent += m;
        });
        //完成循环后    将最终拼接好的菜单列表内容赋值为listcontent
        this.data.licontent = listcontent;//更新菜单列表内容
        //这样菜单列表的内容就生成好了

        let menu = document.getElementById("menu");//通过id获取菜单的DOM元素
        let tem = common.formateString(this.template, this.data);//使用模板和数据渲染菜单中的内容,对模板字符串进行格式化，替换掉其中的变量占位符
        menu.innerHTML = tem;//将tem的值也就是最终的HTML代码赋值给菜单栏DOM节点
        //为每个菜单项添加点击事件处理程序，通过点击不同的菜单项，会创建不同的视图  
        //这里使用jQuery,首先根据id选择器来找到所有的li元素，然后给他们绑定一个click事件处理程序
        $("#lists li").click(function () {
            //alert("click");
            //当某一项被点击时，该事件处理程序就开始执行。
            //首先获取当前被点击的li元素，调用addClass()方法将active类添加到当前元素中
            //然后通过siblings()方法选择所有兄弟元素，并且使用removeClass()方法将所有元素中的active类删除
            $(this).addClass("active").siblings().removeClass("active");
            //接下来使用children()方法找到目标li元素的子链接元素，然后使用attr()方法获取该链接的id元素并将它存储在变量path1中
            let path1 = $(this).children("a").attr("id");
            // console.log(777777); 
            // console.log(path1);
            //然后通过common2.getComponent()方法获取目标组件
            let target = common2.getComponent(path1, routers);
            // console.log(99999);
            // console.log(target);

            // alert(target);
            console.log(1111111111111111);
            console.log(target);
            // alert(path1);
            if (path1 === undefined) {
                return;
            }
            //最后在目标组件对象上creatView方法来创建视图
            target.createView(app, document, $);
            // let d1=document.getElementById("content");

        });
        //主要的功能是在默认情况下创建第一个菜单项的视图
        //使用了jQuery的id选择器获取类名为active的li元素或者是第一个li元素下的第一个子链接的id属性 存储在firt变量 
        let first = $("#lists>li, .active").children("a").attr("id");
        console.log(first);
        //使用first变量的值从routers数组中获取目标组件对象
        let firsttarget = common2.getComponent(first, routers);
        console.log(firsttarget);
        //最后调用这个组件对象的creatView方法
        firsttarget.createView(app, document, $);
        //总之是在页面第一次加载时默认创建第一个视图
    }
}
export default menu;