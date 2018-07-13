var main=document.querySelector(".main")




function ajax(params) {
    var _default = {
        method: 'GET', // 请求方式
        url: null, // 请求地址
        data: null, // 请求数据
        timeout: 1000,
        dataType: 'json',
        success: function() {},
        errro: function() {} // 成功
    }
    for(var i in params) {
        // 将传进来的值，遍历赋值给默认值，如果你传进来，会替换默认值，不传即为默认值
        _default[i] = params[i];
    }
    var xhr = new XMLHttpRequest(); //ie兼容
    //  如果你是get请求的话，把_default.data里面的属于，以键值对的形式，拼接在url里面
    for(var item in  _default.data) {
        // url拼接完成的
        // -> 判断是否含有参数
        // ？？？？ 如何实现？
        _default.url += '?' + Date.now();
        // 解决ie-get请求缓存问题
        
    }
    xhr.open(_default.method, _default.url,true);
    if (_default.dataType == 'json') {
        _default.data = JSON.stringify(_default.data);
    }
    _default.data = _default.method == 'GET' ? null : _default.data;
    xhr.send(_default.data);
    xhr.onreadystatechange = function() {
        if(xhr.readyState === 4 && xhr.status === 200) {
            var json = xhr.responseText;
            json = _default.dataType == 'json' ? JSON.parse(json) : json;
            _default.success(json);
            
        }
    }
}
var params={
    method: 'GET',
        url: '../json/img.json', 
        data: null, 
        dataType: 'json',
        success:function(data){
           var str=[]
           for(var i=0;i<data.length;i++){
            var frag=`<tr id="${data[i].id}">              
                <td>${data[i].name}</td>
                <td>${data[i].price}</td>
                <td><input type='number' value='1' /></td>
                <td><a class="btn" href="##">删除</a></td>
                </tr>`
             str.push(frag);
           }
           main.innerHTML=str.join('')
           
           var btn=document.querySelectorAll('.btn')
           var del=document.querySelector(".del")
                    var nodel=document.querySelector(".nodel")
           for(var i=0;i<btn.length;i++){
                btn[i].index=i;

                btn[i].onclick=function(){
                   var _this=this
                    var obox=document.getElementById("box")
                    obox.style.zIndex='122'
                        obox.style.display="block"
                        document.body.style.background="#ccc"
                        document.body.style.opacity="0.8"
                    
                    var pTop=document.getElementById("pTop")
                    pTop.onmousedown=function(e){ 
                        pTop.style.cursor="move"
                        var e=e||event  
                        var dx=e.offsetX
                        var dy=e.offsetY
                        document.onmousemove=function(e){
                            
                            var e=e||event  
                            var l = e.clientX - dx;
                            var h = e.clientY - dy;
                            if(l>document.documentElement.clientWidth-obox.offsetWidth){
                               l=document.documentElement.clientWidth-obox.offsetWidth      
                            }
                            if(h>document.documentElement.clientHeight-obox.offsetHeight){
                               h=document.documentElement.clientHeight-obox.offsetHeight    
                            }
                            if(l<0){
                                l=0
                            }
                            if(h<0){
                                h=0
                            }
                            obox.style.left = l+'px';
                            obox.style.top = h+'px';
                            document.onmouseup = function(){
                            document.onmousemove = null;
                            obox.onmouseup = null;
                            }

                        }
                    }

                    del.onclick=function(){
                         _this.parentNode.parentNode.remove()
                        obox.style.display = 'none'; 
                        document.body.style.background="#fff"
                        document.body.style.opacity="1"                         
                        str.splice(str.indexOf([_this.index]),1)
                        console.log(str)
                     }
                     nodel.onclick=function(){
                        obox.style.display = 'none'; 
                        document.body.style.background="#fff"
                        document.body.style.opacity="1"     
                     }


                }
                
                
            }
        }


}
ajax(params)

