//字符串转dom
function parseDom(arg) {

　　 var objE = document.createElement("div");

　　 objE.innerHTML = arg;

　　 return objE.childNodes;

}

var 添加元素 = function(newNode,index){

	if ( $( ".isChoice" ).size() == 0 ){
		
		if (index == -1){
			$( ".tab-pane.active.元素交互区 > div.container.组件.组件界面" ).append(newNode);
		}else{
			$( ".tab-pane.active.元素交互区 > div.container.组件.组件界面" ).children()[index].after(parseDom(newNode)[0]);
		};
		$( ".tab-pane.active.元素交互区 > div *" ).on("click" , 选中组件 );
		$( ".tab-pane.active.元素交互区 > div *" ).dblclick(删除组件);
		选中组件();

		return 0
	}
	// 添加
	if (index == -1){
		$( ".isChoice" ).append(newNode);
	}else{
		var childNode = $( ".isChoice" ).children();
		childNode[index].after(parseDom(newNode)[0]);
	};
	$( ".tab-pane.active.元素交互区 > div *" ).on("click" , 选中组件 );
	$( ".tab-pane.active.元素交互区 > div *" ).dblclick(删除组件);
	选中组件();
	return 1
}
var 布局_横向布局 = function(){
	// 指定id
	var rid = "id"+String(Math.random()).replace(".","");
	var newID = xss攻击预防( prompt("请输入组件ID：",rid) );
	// 指定index
	var index = parseInt( xss攻击预防( prompt("插入第几个子节点之后(-1表示末尾)：",-1) ) );
	// 获取子节点
	var childNode = $( ".isChoice" ).children();
	// 新节点
	var newNode = `<div class="row clearfix" id=`+newID+` ></div>`;
	// 添加元素
	添加元素(newNode , index)
	
};$( "#panel-element-布局 > div:nth-child(1)" ).on("click",布局_横向布局);

var 布局_纵向布局 = function(){
	// 指定id
	var rid = "id"+String(Math.random()).replace(".","");
	var newID = xss攻击预防( prompt("请输入组件ID：",rid) );
	// 指定index
	var index = parseInt( xss攻击预防( prompt("插入第几个子节点之后(-1表示末尾)：",-1) ) );
	// 指定宽度
	var width =  xss攻击预防( prompt("宽度(输入1-12)：","2") );
	// 获取子节点
	var childNode = $( ".isChoice" ).children();
	// 新节点
	var newNode = `<div class="col-md-`+width+`" id="`+newID+`"></div>`;
	// 添加元素
	添加元素(newNode , index)
	
};$( "#panel-element-布局 > div:nth-child(2)" ).on("click",布局_纵向布局);

var 按钮_默认按钮 = function(){
	// 指定id
	var rid = "id"+String(Math.random()).replace(".","");
	var newID = xss攻击预防( prompt("请输入组件ID：",rid) );
	// 指定index
	var index = parseInt( xss攻击预防( prompt("插入第几个子节点之后(-1表示末尾)：",-1) ) );
	// 获取子节点
	var childNode = $( ".isChoice" ).children();
	// 新节点
	var newNode = `<button type="button" class="btn btn-default" id="`+newID+`">按钮</button>`;
	// 添加元素
	添加元素(newNode , index)
	
};$( "#panel-element-按钮 > div:nth-child(1)" ).on("click",按钮_默认按钮);

var 按钮_下拉框按钮 = function(){
	// 指定id
	var rid = "id"+String(Math.random()).replace(".","");
	var newID = xss攻击预防( prompt("请输入组件ID：",rid) );
	// 指定index
	var index = parseInt( xss攻击预防( prompt("插入第几个子节点之后(-1表示末尾)：",-1) ) );
	// 获取子节点
	var childNode = $( ".isChoice" ).children();
	// 下拉框中按钮分布
	var dist = xss攻击预防( prompt("下拉框中按钮分布情况(例、5,1 其中逗号表示分割线)：","2,1") ).split(",");

	// 新节点
	var newNode = `
	<div class="btn-group" id="`+newID+`">
	    <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">默认
	        <span class="caret"></span>
	    </button>
	    <ul class="dropdown-menu" role="menu">`
	for(i=0;i<dist.length-1;i++){
		newNode+=`
			<li>
	            <a href="#">功能1</a>
	        </li>`.repeat(dist[i]);
	    newNode+=`<li class="divider"></li>`;
	};
	newNode+=`
			<li>
	            <a href="#">功能1</a>
	        </li>`.repeat(dist[dist.length-1]);
	newNode+=`    
	    </ul>
	</div>`;
	// 添加元素
	添加元素(newNode , index)
	
};$( "#panel-element-按钮 > div:nth-child(2)" ).on("click",按钮_下拉框按钮);

var 按钮_分割式下拉框按钮 = function(){
	// 指定id
	var rid = "id"+String(Math.random()).replace(".","");
	var newID = xss攻击预防( prompt("请输入组件ID：",rid) );
	// 指定index
	var index = parseInt( xss攻击预防( prompt("插入第几个子节点之后(-1表示末尾)：",-1) ) );
	// 获取子节点
	var childNode = $( ".isChoice" ).children();
	// 下拉框中按钮数量
	var dist = xss攻击预防( prompt("下拉框中按钮分布情况(例、5,1 其中逗号表示分割线)：","2,1") ).split(",");

	// 新节点
	var newNode = `
	<div class="btn-group" id="`+newID+`">
		 <button class="btn btn-default">Action</button> <button data-toggle="dropdown" class="btn btn-default dropdown-toggle"><span class="caret"></span></button>
		<ul class="dropdown-menu">`
	for(i=0;i<dist.length-1;i++){
		newNode+=`
			<li>
	            <a href="#">功能1</a>
	        </li>`.repeat(dist[i]);
	    newNode+=`<li class="divider"></li>`;
	};
	newNode+=`
			<li>
	            <a href="#">功能1</a>
	        </li>`.repeat(dist[dist.length-1]);
	newNode+=`   
		</ul>
	</div>
	`;
	// 添加元素
	添加元素(newNode , index)
	
};$( "#panel-element-按钮 > div:nth-child(3)" ).on("click",按钮_分割式下拉框按钮);

var 按钮_按钮组 = function(){
	// 指定id
	var rid = "id"+String(Math.random()).replace(".","");
	var newID = xss攻击预防( prompt("请输入组件ID：",rid) );
	// 指定index
	var index = parseInt( xss攻击预防( prompt("插入第几个子节点之后(-1表示末尾)：",-1) ) );
	// 获取子节点
	var childNode = $( ".isChoice" ).children();
	// 按钮组中按钮数量
	var volumn = parseInt( xss攻击预防( prompt("按钮组中按钮数量：",5) ) );
	// 新节点
	var newNode = `
	<div class="btn-group" id="`+newID+`">`+`
	<button class="btn btn-default" type="button">左</button> `.repeat(volumn)+`
	</div>
	`;
	// 添加元素
	添加元素(newNode , index)
	
};$( "#panel-element-按钮 > div:nth-child(4)" ).on("click",按钮_按钮组);

var 导航_导航栏 = function(){

};

var 导航_选项卡 = function(){

};

var 导航_手风琴切换 = function(){

};

var 导航_分页 = function(){

};

var 导航_路径 = function(){

};

var 导航_列表组 = function(){

};