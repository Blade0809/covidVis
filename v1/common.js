//import $  from 'jquery-3.0.0.min.js'
//定义了一个common对象,common对象包含了formateString方法。
let common = {
    //formateString方法接收两个参数，分别是一个字符串str表示格式化的字符串和数据data包含要插入到字符串中的值。它会匹配所有字符串中所有的那个{#key#}类型的占位符，并将其替换为数据对象中对应的值。
    formateString: function (str, data) {
        //具体实现是使用了字符串replace()方法，正则表达式作为参数，匹配所有{#key#}格式的字符串，并通过回调函数来替换占位符为对应的值
        return str.replace(/\{#(\w+)#\}/g, function (match, key) {
            //回调函数中的代码使用了三元表达式 ?:,判断data[key]是否为undefined,如果为undefind,则将该占位符替换为空字符串，否则的话就是用data[key]的值代替该字符串A
            return typeof data[key] === undefined ? '' : data[key]
        })
        //最终返回替换后的字符串。该函数的作用是将{#key#}的占位符替换为data[key]的值，这样才能将数据填充到模板中
    }
    ,
    //用于发送异步请求,并返回一个Promise对象
    //函数ajaxPromise接收四个参数:url 是要请求的URL地址，method是请求方法,param是请求参数对象，$是jQuery对象
    ajaxPromise: function (url, method, param, $) {
        let pro = new Promise(function (resolve, reject) {
            // 创建一个Promise对象pro，这个对象的回调函数会在外部调用resolve()或reject()时执行
            $.ajax({
                url: url,//要发送请求的URL,设置请求的URL为传入的url参数。
                type: method,//请求方式(GET、POST),设置请求的方法为传入的method参数。
                data: param.data || '',//请求参数,设置请求的参数为传入的param参数中的data属性的值，如果data属性不存在，则设置为空字符串。
                dataType: "json",//响应的数据类型为JSON
                success: function (data) {//当AJAX请求成功时,接收一个名为data的参数
                    resolve(data);//使用resolve()方法将获取到的数据传递给Promise对象,表示异步操作成功，并将返回的数据作为Promise的结果。
                },
                error: function (error) {//当AJAX请求失败时,接收一个名为error的参数，表示错误信息。
                    reject(error)//使用reject()方法将错误信息传递给Promise对象,表示异步操作失败。
                }
            });
        });
        //返回一个Promise对象pro，并在Promise对象的回调函数中调用了jQuery的ajax()方法
        return pro;

    }
    //总结：定义一个使用Promise 封装 jQuery ajax方法的函数，主要功能是进行AJAX请求，并返回一个Promise对象
}
//通过export default common 表示将common对象默认导出去，
//这样其他模块就可以使用import common from './common'导入common模块
//并使用其中的formateString方法
export default common;