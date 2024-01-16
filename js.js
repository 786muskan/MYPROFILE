
/*theme*/
	//changing themes
		var current="dark"
		function theme() {
			var the=document.body;
			var icon=document.getElementById('icon')
			var bt=document.getElementById('bt1')
			the.classList.toggle("light")
			var nav=document.getElementById('nav')
			var link=document.getElementsByClassName('item')
			var color=document.getElementsByClassName('offcanvas-body')
			if(current=="dark"){
				icon.classList.remove('fa-moon-o')
				bt1.classList.remove('btn-outline-dark')
				bt1.classList+='btn btn-outline-warning  float-end nav-item  '
				icon.innerHTML='<i class="fa fa-sun-o" style="font-size:20px" id="icon"></i>'
				nav.classList.remove('bg-light,text-dark')
				nav.classList='navbar navbar-expand-sm   bg-dark text-white  sticky-top'
				for (i=0;i<6;i++){
				link[i].classList.remove('text-dark')
				document.getElementsByClassName('item')[i].classList='nav-link text-light item js-scroll-trigger'	
				}
				
				current="light"
			}
			else
			{
				icon.classList.remove('fa-sun-o')
				icon.innerHTML='<i class="fa fa-moon-o" style="font-size:20px" id="icon"></i>'
				bt1.classList.remove('btn-outline-warning')
				bt1.classList+='btn btn-outline-dark  float-end nav-item  '
				nav.classList.remove('bg-dark,text-light')
				nav.classList='navbar navbar-expand-sm bg-light text-dark  sticky-top'
				for (i=0;i<6;i++){
				link[i].classList.remove('text-light')
				document.getElementsByClassName('item')[i].classList='nav-link text-dark item js-scroll-trigger'
				}
				current="dark"

			}
	}


/*/*active
var active=1
function activech(a) {
	for(i=0;i<6;i++){
		document.getElementsByClassName('nav-item')[i].classList.remove('active')
	}
	if(a==1){
		document.getElementsByClassName('nav-item')[0].classList='nav-item p-2 active'
	}
	else if(a==2){
		document.getElementsByClassName('nav-item')[1].classList='nav-item p-2 active'
	}
	else if(a==3){
		document.getElementsByClassName('nav-item')[2].classList='nav-item p-2 active'
	}
	else if(a==4){
		document.getElementsByClassName('nav-item')[3].classList='nav-item p-2 active'
	}
	else if(a==5){
		document.getElementsByClassName('nav-item')[4].classList='nav-item p-2 active'
	}
	else if(a==6){
			document.getElementsByClassName('nav-item')[5].classList='nav-item p-2 active'
		}

}
*/
$(document).ready(function(){
	$('.js-scroll-trigger').click(function () {
	    $('.navbar-collapse').collapse('hide');
	 });

})		



