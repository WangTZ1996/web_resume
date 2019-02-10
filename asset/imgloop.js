
    var imglist = document.getElementsByClassName("imglist")[0];
    var img = document.getElementsByClassName("img")[0];
    var width = imglist.offsetWidth;
    var timer;
    var count = 0;
    var n = 1;

     function next(){
     	timer = setInterval(function(){
    	imglist.style.left = parseInt(imglist.style.left)-20 +"px";
    	count += 1;
    	if (count >=40){
    	clearInterval(timer);
    	count = 0;
             }
         },20);
     }

    setInterval(function(){
        clearInterval(timer);
     	next();
     	n+=1;
     	if(n==6){
     		imglist.style.left = 0+"px";
     		n = 1;
     	}
     },4000);


     // function prev(){
     //     timer = setInterval(function(){
     // imglist.style.left = parseInt(imglist.style.left) +20 +"px";
     // count += 1;
     // if (count >=40){
     // clearInterval(timer);
     // count = 0;
     //         }
     //     },20);
     // }



    

    

    



