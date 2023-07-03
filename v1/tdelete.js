import common from "./common.js";
let table = {

    data: {

    },

    template: `
    <div class="max">
    <div class="d1" >
      <img decoding="async" loading="lazy" class="myImg" src="./img/fujianPie.png">
    </div>
    <div class="d2">
      <img decoding="async" loading="lazy" class="myImg" id="myImg" src="./img/guangdongPie.png">
    </div>
    <div class="d3">
      <img decoding="async" loading="lazy" class="myImg" id="myImg" src="./img/henanPie.png" alt="Triangle Image">
    </div>
    <div class="d4">
      <img decoding="async" loading="lazy" class="myImg" id="myImg" src="./img/shanghaiPie.png">
    </div>
    <div class="d5">
      <img decoding="async" loading="lazy" class="myImg" id="myImg" src="./img/sichuanPie.png">
    </div>
    <div class="d6">
      <img decoding="async" loading="lazy" class="myImg" id="myImg" src="./img/yunnanPie.png">
    </div>
    <div class="d7">
      <img decoding="async" loading="lazy" class="myImg" id="myImg" src="./img/zhejiangPie.png">
    </div>
    <div class="d8">
      <img decoding="async" loading="lazy" class="myImg" id="myImg" src="./img/hunanPie.png">
    </div>
    <!-- 弹窗 -->
    <div id="myModal" class="modal" style="  width: 100%;height: 100%;position: fixed;z-index: 9999999;">
        <!-- 关闭按钮 -->
        <span class="close" onclick="closeModal()">&times;</span>
        <!-- 弹窗内容 -->
        <img class="modal-content" id="img01">
    </div>
   
   
</div>
`,

    createView: function (app, document, $) {
        let student1 = document.getElementById("content");
        student1.innerHTML = common.formateString(this.template, this.data);
        // 获取所有图片
        const images = document.querySelectorAll('.myImg');
        // 获取弹窗
        const modal = document.getElementById('myModal');
        const modalImg = document.getElementById("img01");

        // 遍历图片，设置点击事件
        images.forEach(function (image) {
            image.onclick = function () {
                modal.style.display = "block";
                modalImg.src = this.src;
            }
        });

        var btn = document.querySelector('.close');
        var box = document.querySelector('.modal');
        // 关闭弹窗的函数
        btn.onclick = function () {
            box.style.display = 'none';
        }

        // // 获取图片元素
        // const img = document.getElementById('triangle-img');

        // // 添加CSS类来应用裁剪形状
        // img.classList.add('triangle-shape');
        // 获取弹窗
        // var mo1 = document.getElementById('m1');

        // // 获取图片插入到弹窗 - 使用 "alt" 属性作为文本部分的内容
        // var img = document.getElementById('mI1');
        // var mImg = document.getElementById("img02");

        // img.onclick = function () {
        //     mo1.style.display = "block";
        //     mImg.src = this.src;

        // }

        // // 获取 <span> 元素，设置关闭按钮
        // var span1 = document.getElementsByClassName("close")[0];

        // // 当点击 (x), 关闭弹窗
        // span1.onclick = function () {
        //     mo1.style.display = "none";
        // }
    }
}
export default table;