// import dashboard from "./dashboard.js";
// import project from "./project.js";
import table from "./table.js";
import tdelete from "./tdelete.js";
//通过import语句引入其他模块的组件，用于展示不同页面的功能
// import chart from "./chart.js";
//routers数组定义了不同角色的路由配置信息
let routers = [
    {
        name: "/tdelete",//路由的名称，就是路由对应的路径地址，首先是table组件对应的路由
        component: tdelete,//表示该路由对应的组件，在该路由上应该展示的视图
        icon: "icon-home"//表示路由的图标，可以在菜单和导航栏中显示
    },
    {
        name: "/table",
        component: table,//展示在删除路由下的页面内容
        icon: "icon-table"
    }
]

export default routers;