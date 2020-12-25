// xss攻击预防
var xss攻击预防 = function(str){
	str = String(str)
	var s = "";
	if(str.length == 0) return "";
	s = str.replace(/&/g,"");
	s = s.replace(/</g,"");
	s = s.replace(/>/g,"");
	s = s.replace(/ /g,"&nbsp;");
	s = s.replace(/\'/g,"");
	s = s.replace(/\"/g,"");
	return s;
}
// 新建组件
var 新建组件 = function(){
	$( "#tabs-697887 > ul > li.active" ).removeClass("active");

	$( "#tabs-697887 > div > div.active" ).removeClass("active");

	var 子元素数量 = $( "#tabs-697887 > ul" ).children().length + 1;

	var 活动的li元素 = '<li class="active">'+
					  '<a href="#panel-组件'+子元素数量+'" data-toggle="tab" onclick="清除选中()" >组件 '+子元素数量+'</a>'+
					  '</li>';

	var 活动的编辑div元素 = '<div class="tab-pane active 元素交互区" id="panel-组件'+子元素数量+'">'+
						   '<div class="container 组件 组件界面" >'+
						   '<style type="text/css" class="组件界面">'+
						   '.container.组件.组件界面{min-height:70vh;overflow: auto;}'+
						   '</style>'+
						   '<script type="text/javascript" class="组件界面"></script>'+
						   '</div>'+
						   '</div>';

	$( "#tabs-697887 > ul" ).append(活动的li元素);

	$( "#tabs-697887 > div" ).append(活动的编辑div元素);

	$( ".tab-pane.active.元素交互区 > div *" ).on("click" , 选中组件 )

};$( "#new" ).on( "click" , 新建组件 );


//组件重命名
var 组件重命名 = function(){
	var newName = xss攻击预防( prompt("请输入新的组件名","") );

	$( "#tabs-697887 > ul > li.active > a" ).html(newName);

};$( "#rename" ).on( "click" , 组件重命名 );

// 预览
var 预览 = function(){
	var result = '<!DOCTYPE html>'+
	'<html>'+
	'<head>'+
	'   <meta charset="utf-8">'+
	'   <title> PyPanda社区 </title>'+
	'   <link rel="stylesheet" href="https://cdn.staticfile.org/twitter-bootstrap/3.3.7/css/bootstrap.min.css"> '+
	'   <script src="https://cdn.staticfile.org/jquery/2.1.1/jquery.min.js"><\/script>'+
	'   <script src="https://cdn.staticfile.org/twitter-bootstrap/3.3.7/js/bootstrap.min.js"><\/script>'+
	'</head>'+
	'<style>'+
	'html{height:100%}'+
	'body{min-width:100vw;min-height:100%;margin:0;padding:0;}'+
	'</style>'+
	$(".tab-pane.active.元素交互区").html().replace(
			/<style type=\"text\/css\" class=\"组件界面\"([\s\S]*?)<\/style>/gm,""
			).replace(
			/<script type=\"text\/javascript\" class=\"组件界面\"([\s\S]*?)<\/script>/gm,""
			)+other+"</html>";
	myWindow=window.open();
    myWindow.document.write(result);
    // for(i=0;i<window.urllibs.length;i++){
    // 	myWindow.document.write("<script>document.write("+window.urllibs[i]+")</script>")
    // }
    myWindow.focus();
};$( "#preview" ).on( "click" , 预览 );

// 导入 *
var 导入 = function(event){
	if ( $( ".isChoice" ).size() != 0 ){
		var name = "panel-"+xss攻击预防( prompt("请输入组件名：","组件1") );

		var node = $("#"+name+" .container.组件.组件界面").html().replace(
			/<style type=\"text\/css\" class=\"组件界面\"([\s\S]*?)<\/style>/gm,""
			).replace(
			/<script type=\"text\/javascript\" class=\"组件界面\"([\s\S]*?)<\/script>/gm,""
			)
		添加元素( node, -1);

		};

};$( "#import" ).on( "click" , 导入 );

// 选中组件
var 选中组件 = function(event){
	// 防止事件冒泡
	try{
	event.stopPropagation(); }catch{

	};

	if ( $( ".isChoice" ).size() != 0 ){
		// 更新上次的isChoice的内容
		var id = $( ".isChoice" ).attr( "id" );
		attrList = $( ".输入框.panel-属性" ).val().split("\n");
		for(i=0;i<attrList.length;i=i+1){
			try{
			$( ".isChoice" ).attr( 
				attrList[i].split("=")[0].replace(/^\s\s*/, '').replace(/\s\s*$/, ''),
				attrList[i].split("=")[1].replace(/^\s\s*/, '').replace(/\s\s*$/, '') );
			}catch(exception){

			};
		};
		$( "#cls"+id ).attr( "id","cls"+$( ".isChoice" ).attr( "id" ) );
		$( "#js"+id ).attr( "id","js"+$( ".isChoice" ).attr( "id" ) );
		$( "#cls"+ $( ".isChoice" ).attr( "id" ) ).html( 
			$( ".输入框.panel-样式" ).val().replace(id,$( ".isChoice" ).attr( "id" )) );
		$( "#js"+ $( ".isChoice" ).attr( "id" ) ).html(
			$( ".输入框.panel-JavaScript" ).val().replace(id,$( ".isChoice" ).attr( "id" )) );
		$( ".输入框.panel-html" ).val(
			$( ".输入框.panel-html" ).val().replace(id,$( ".isChoice" ).attr( "id" )) );
	}
	// 切换isChoice
	$( ".isChoice" ).removeClass("isChoice");

	$( this ).addClass("isChoice");

	// 获取新的isChoice ID
	var id = $( ".isChoice" ).attr( "id" );
	
	// 第一次点击,创建style script元素
	if($( "#cls"+id ).size() == 0 && id!=undefined && id!=null ){
		$( ".isChoice" ).append( '<style type="text/css" id=cls'+id+'>' + '#'+id+"{}" +'</style>' )
	};
	if($( "#js"+id ).size() == 0 && id!=undefined && id!=null ){
		$( ".isChoice" ).append( '<script type="text/css" id=js'+id+'>' +'<\/script>' )
	};
	try{
	// 获取isChoice元素的内容
	var attr = "";
	for(i=0;i<this.attributes.length;i++){
		attr += this.attributes[i].name;
		attr += "=";
		attr += this.attributes[i].textContent;
		attr += " \n ";
	};
	var style = $( "#cls"+id ).html();
	var js = $( "#js"+id ).html();
	var html = $( ".isChoice" ).html();

	// 显示isChoice元素的内容到输入框中
	$( ".输入框.panel-属性" ).val(attr);
	$( ".输入框.panel-样式" ).val(style);
	$( ".输入框.panel-JavaScript" ).val(js);
	$( ".输入框.panel-html" ).val(html);}catch{};


};$( ".tab-pane.active.元素交互区 > div *" ).on( "click" , 选中组件 );

// 显示组件ID

// 清除选中
var 清除选中 = function(){
	// 防止事件冒泡
	// event.stopPropagation(); 
	if ( $( ".isChoice" ).size() != 0 ){

		// 更新上次的isChoice的内容
		var id = $( ".isChoice" ).attr( "id" );
		attrList = $( ".输入框.panel-属性" ).val().split("\n");
		for(i=0;i<attrList.length;i=i+1){
			try{
			$( ".isChoice" ).attr( 
				attrList[i].split("=")[0].replace(/^\s\s*/, '').replace(/\s\s*$/, ''),
				attrList[i].split("=")[1].replace(/^\s\s*/, '').replace(/\s\s*$/, '') );
			}catch(exception){

			};
		};

		$( "#cls"+id ).attr( "id","cls"+$( ".isChoice" ).attr( "id" ) );
		$( "#js"+id ).attr( "id","js"+$( ".isChoice" ).attr( "id" ) );
		$( "#cls"+ $( ".isChoice" ).attr( "id" ) ).html( 
			$( ".输入框.panel-样式" ).val().replace(id,$( ".isChoice" ).attr( "id" )) );
		$( "#js"+ $( ".isChoice" ).attr( "id" ) ).html(
			$( ".输入框.panel-JavaScript" ).val().replace(id,$( ".isChoice" ).attr( "id" )) );
		$( "#"+id ).html(
			$( ".输入框.panel-html" ).val().replace(id,$( ".isChoice" ).attr( "id" )) );
	};

	$( ".输入框.panel-属性" ).val("");
	$( ".输入框.panel-样式" ).val("");
	$( ".输入框.panel-JavaScript" ).val("");
	$( ".输入框.panel-html" ).val("");
	$( ".isChoice" ).removeClass("isChoice");

};$( ".tab-pane.active.元素交互区" ).on( "click" , 清除选中);

// 删除组件
var 删除组件 = function(){
	// 防止事件冒泡
	event.stopPropagation(); 
	$(this).remove();
};$( ".tab-pane.active.元素交互区 > div *" ).dblclick(删除组件);

// 快捷键
// 绑定全局快捷键
document.onkeydown = function(event){

	if( event.altKey && event.keyCode == 67 ){
		var id = $( ".isChoice" ).attr( "id" );
		window.copyStyle = $( "#cls"+id ).html().replace("#" + $(".isChoice").attr("id") + "{" , "" ).replace("}",""); 
	};

	if( event.altKey && event.keyCode == 86 ){ 
		var id = $( ".isChoice" ).attr( "id" );
		$(".输入框.panel-样式").val( "#" + $(".isChoice").attr("id") + "{" +  window.copyStyle + "}" );
		$( "#cls"+id ).html( "#" + $(".isChoice").attr("id") + "{" +  window.copyStyle + "}") ; 
	};

};

// 全局样式
var 全局样式 = function(){
	var style = $( ".tab-pane.active.元素交互区 > div > style.组件界面" ).html();
	$( "#panel-全局样式 > textarea" ).val( style );

};$( "#tabs-315561 > ul > li.全局样式" ).on( "click", 全局样式 );

// 全局js
var 全局JavaScript = function(){
	var js = $( ".tab-pane.active.元素交互区 > div > script.组件界面" ).html();
	$( "#panel-全局JavaScript > textarea" ).val();

};$( "#tabs-315561 > ul > li.全局JavaScript" ).on( "click", 全局JavaScript );
