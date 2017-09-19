/*
* @Author: lenovo
* @Date:   2017-09-18 17:33:31
* @Last Modified by:   lenovo
* @Last Modified time: 2017-09-19 23:23:36
*/
window.onload=function(){
	let w=document.getElementsByClassName('word')[0];
	let lis=w.getElementsByTagName('li');
	let it=document.getElementsByClassName('item');
	for(let i=0;i<lis.length;i++){
		lis[i].onmouseover=function(){
			it[i].style.display='block';
		}
		lis[i].onmouseout=function(){
			it[i].style.display='none';
		}
		
	}

	let hitem1=gets('.hitem1')[0];
	let hitem2=gets('.hitem2')[0];
	let hitem3=gets('.hitem3')[0];
	let hitem4=gets('.hitem4')[0];
	let hitem5=gets('.hitem5')[0];

	let hbox1=gets('.header-right-box1')[0];
	let hbox2=gets('.header-right-box7')[0];
	let hbox3=gets('.header-right-box5')[2];
	let hbox4=gets('.header-right-box2')[2];
	let hbox5=gets('.header-right-box11')[0];
	console.log(hbox5)

	hbox1.onmouseover=function(){
		hitem1.style.height='50px';
	}
	hbox1.onmouseout=function(){
		hitem1.style.height=0;
	}

	hbox2.onmouseover=function(){
		hitem2.style.height='50px';
	}
	hbox2.onmouseout=function(){
		hitem2.style.height=0;
	}

	hbox3.onmouseover=function(){
		hitem3.style.display='block';
	}
	hbox3.onmouseout=function(){
		hitem3.style.display='none';
	}

	hbox4.onmouseover=function(){
		hitem4.style.display='block';
	}
	hbox4.onmouseout=function(){
		hitem4.style.display='none';
	}

	hbox5.onmouseover=function(){
		hitem5.style.display='block';
	}
	hbox5.onmouseout=function(){
		hitem5.style.display='none';
	}


	let box=document.getElementsByClassName('banner-list')[0];
	let blist=document.getElementsByClassName('bar-list')[0];
	let circle=blist.getElementsByTagName('li');
	console.log(circle)
	let blis=box.getElementsByClassName('banner-img');
	
	console.log(blis)
	let n=0
	circle[0].style.background='#fff';
	blis[0].style.display='block';
	for(let i=0;i<blis.length;i++){
		circle[i].onclick=function(){
			circle[n].style.background='#a2a2a2';
			circle[i].style.background='#fff';
			blis[n].style.display='none';
			blis[i].style.display='block';
			n=i;
		}
	}




	let t=setInterval(run, 1000);

	box.onmouseover=function(){
		clearInterval(t);
	}
	box.onmouseleave=function(){
		t=setInterval(run, 1000);
	}



	function run(){
		n++;
		if(n==blis.length){
			n=0;
		}
		
		for(let i=0;i<blis.length;i++){
			blis[i].style.display='none';
			circle[i].style.background='#a2a2a2';
		}
		blis[n].style.display='block';
		circle[n].style.background='#fff';
		
	}

}
