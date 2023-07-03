let common2 = {
    //这段代码主要实现一个用于获取组件对象的函数
    //参数k获取组件的名字,参数a表示组件对象的数组，其中每个元素都包含组件的名称和实际的组件对象
    getComponent: function (k, a) {
        //首先通过for循环遍历routers组件对象的数组
        for (let index = 0; index < a.length; index++) {
            const element = a[index];//对于每个数组元素
            console.log(element.name);
            //获取该元素的name属性 是否与传递的参数k匹配
            if (element.name === k) {//如果是的话
                return element.component;//则返回该元素的component属性，该属性指向实际的组件对象
            }
        }
        //如果循环结束后，仍然没有找到与k匹配的组件，则该函数就返回undefined
    }
    //这个函数的用途在于在页面视图中的菜单栏中点击不同的菜单展示不同的视图的时候需要查找不同的组件对象，以便使用该对象创建对应的视图。
    ,
    //这段代码主要是实现一个用于获取图标信息的函数
    //在函数中，传入了参数K表示要获取的组件名字，参数a表示组件对象数组，其中routers组件对象数组呢都包含组件的名称和它的图标
    getIcon: function (k, a) {
        //然后我们需要通过for循环遍历组件对象数组routers
        for (let index = 0; index < a.length; index++) {
            const element = a[index];//获取每个数组元素
            if (element.name === k) {//检测元素的name属性是否与参数k匹配
                return element.icon;//如果是的话则返回该元素的icon属性，就是这个属性指向特定的图标对象
            }
        }
        //如果循环结束后，仍然没有找到与k匹配的组件，则该函数就返回undefined
    }
}

export default common2;