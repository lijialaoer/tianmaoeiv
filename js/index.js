/*
* @Author: lenovo
* @Date:   2017-09-24 18:06:34
* @Last Modified by:   lenovo
* @Last Modified time: 2017-09-30 17:39:39
*/
window.onload=function(){
	let banner=document.querySelector('.banner');
	let babody=document.querySelector('.banner-body');
	let bali=babody.querySelectorAll('li');
	let circle=document.querySelector('.banner-circle');
	let cirli=circle.querySelectorAll('li');
	let bancolor=['#E8E8E8','#D1E9D3','#096EF7','#974FF2','#3174C2','#E8E8E8','#E8E8E8'];
	let w=babody.offsetWidth;
	let now=0;
	let next=0;
	// console.log(cirli);
	// 轮播
	cirli[0].style.background=' #fff'
	bali[0].style.left=0;
	t=setInterval(move,1000);
	banner.onmouseover=function(){
		clearInterval(t);
	}
	banner.onmouseout=function(){
		t=setInterval(move,1000);
	}
	for(let i=0;i<cirli.length;i++){
		cirli[i].onclick=function(){
			if(now==i){
				return;
			}
			bali[i].style.left=w+'px';
			animate(bali[i],{left:0});
			animate(bali[now],{left:-w});
			cirli[now].style.background=' #a2a2a2';
			cirli[i].style.background='#fff';
			now=next=i;
		}
	}
	function move(){
		next++;
		if(next==bali.length){
			next=0;
		}
		banner.style.background=bancolor[next];
		bali[next].style.left=w+'px';	
		cirli[now].style.background=' #a2a2a2';
		cirli[next].style.background='#fff';
		animate(bali[next],{left:0});
		animate(bali[now],{left:-w});
		now=next;
	}
	
	//按需加载
	let floor=document.querySelectorAll('#floor');
	let cbtns=document.querySelector('.choose');
	let dingbu=document.querySelector('.dingbu');
	let cbli=cbtns.querySelectorAll('li');
	let fcolor=['red','orange','yellow','green','skyblue','#3174C2','#974FF2'];
	let bro=innerHeight;
	
	let farr=[];
	let fflag=1;
	let sflag=1;
	floor.forEach(element => {
		farr.push(element.offsetTop);
	})

	window.onscroll=function(){
		let scrolltop=document.body.scrollTop ||document.documentElement.scrollTop;
		console.log(scrolltop)
		if(scrolltop>=778){
			if(sflag){
				sflag=!sflag;
				animate(dingbu,{top:0})
				animate(cbtns,{left:0})

			}	
		
		}
		else{
			if(!sflag){
				sflag=!sflag;
				animate(dingbu,{top:-50})
				animate(cbtns,{left:-40})
			}
			
		}
		
		farr.forEach((element,index) => {
			if(!fflag){
				return;
			}
			if(scrolltop+bro>=farr[index]){
				for(let i=0;i<cbli.length;i++){
					cbli[i].style.background='rgba(0, 0, 0, 0.4)';
				}
			cbli[index].style.background=fcolor[index];
			let imgs=floor[index].getElementsByTagName('img');
			for(let i=0;i<imgs.length;i++){
				imgs[i].src=imgs[i].getAttribute('imgpath');
			
			}
			}
		})
		
		}
		cbli.forEach((element,index) =>{
			element.onclick=function(){
				for(let i=0;i<cbli.length;i++){
					cbli[i].style.background='rgba(0, 0, 0, 0.6)';
				}
				fflag=0;
				cbli[index].style.background=fcolor[index];
				animate(document.documentElement,{scrollTop:farr[index]},function(){
					fflag=1;
				});
			}
		})

		
		//侧导航
		let aside=document.querySelector('.aside');
		let asli=aside.querySelectorAll('li');
		let item=document.querySelectorAll('.item');
		for(let i=0;i<asli.length;i++){
			asli[i].onmouseover=function(){
				item[i].style.display='block';
			}
			asli[i].onmouseout=function(){
				item[i].style.display='none';
			}
		}

		// 右边导航
		let leftaside=document.querySelector('.leftaside');
		let leli=leftaside.querySelectorAll('li');
		
		leli.forEach((element,index) =>{
			if(index!=1 && index!=9){
			let leitem=element.querySelector('.leitem');
			element.onmouseover=function(){
				leitem.style.display='block';
				animate(leitem,{left:-80});
			}
			element.onmouseout=function(){
				leitem.style.display='none';
				animate(leitem,{left:-101});
			}
			}
		})
	
		//头部
		let 
		hright=document.querySelector('.head-right');
		hrli=hright.querySelectorAll('.head-right>li');
		hrli.forEach(element =>{
			let hliul=element.querySelector('ul');
			element.onmouseover=function(){
				if(hliul!=null){
					hliul.style.display='block';
				}
			}
			element.onmouseout=function(){
				if(hliul!=null){
					hliul.style.display='none';
				}
			}
		})
		console.log(hrli)

	}	
	



