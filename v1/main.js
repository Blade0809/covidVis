import common from "./common.js";
// import menu from "./menu.js";
import header from "./header.js";
import menu from "./menu.js";
let main = {
    data: {

    }
    ,
    template: `
    <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation" style="z-index: 99999;">
    <div class="container-fluid">
        <div class="navbar-header">
            <div id="header">
            </div>
        </div>
    </div>
    </nav>
    <div class="row" >
    <div id="menu" class="col-sm-3 col-lg-2 sidebar" style="z-index: 99999;">
    
    </div>
    
    <div id="content" >
    
    </div>

    </div>
    `
    ,
    //createMainView方法接受三个参数:app表示将该视图插入到哪个元素中，document表示DOM节点对象，$(美元符号)表示jQuery对象
    createMainView: function (app, document, $) {
        // app.innerHTML = this.template
        // //header.createView()和menu.createView()将header和menu的视图渲染到指定的DOM中
        // var body = document.querySelector('body');
        // console.log(body);
        // header.createHeaderView(app, document, $);
        app.innerHTML = common.formateString(this.template, this.data);
        //header.createView()和menu.createView()将header和menu的视图渲染到指定的DOM中
        header.createView(app, document, $);
        menu.createView(app, document, $);
        // menu.createView(app, document, $);
    }
}
export default main;