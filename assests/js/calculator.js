function add(x){ 
    if(display.value == '0.0'){
        display.value = "";
        
    }
    display.value += x;
    navigator.vibrate(20);
   }
   function calc(){
       try{
           display.value = eval(display.value);
           navigator.vibrate(20);
       }
       catch{
           display.style.color = "#f00";
           
           navigator.vibrate([105,50,105,50,105]);
           setTimeout(function(){
               display.value = '0.0';
               display.style.color = "var(--tcolorb)";
           },500);
           
           
       }
       
   }
   var a = 1;
   function back(){
       navigator.vibrate(20);
       display.value = display.value.substring(0,display.value.length-1);
   }
   
   function allclear(){
       display.value = '0.0';
       navigator.vibrate(20);
   }
   function theme(){
       navigator.vibrate(300);
       switch(a){
           case 0:
               document.body.style.setProperty("--bg", "#ececec");
               document.body.style.setProperty("--tcolora", "#aaa");
               document.body.style.setProperty("--tcolorb", "#777");
               document.body.style.setProperty("--scolora", "#d0d0d0");
               document.body.style.setProperty("--scolorb", "#f6f6f6");
               a = 1;
               break;
           case 1:
               document.body.style.setProperty("--bg", "#1B1B1B");
               document.body.style.setProperty("--tcolora", "#444");
               document.body.style.setProperty("--tcolorb", "#666");
               document.body.style.setProperty("--scolora", "#121212");
               document.body.style.setProperty("--scolorb", "#242424");
               a = 2;
               break;
           case 2:
               document.body.style.setProperty("--bg", "#008080");
               document.body.style.setProperty("--tcolora", "#aaa");
               document.body.style.setProperty("--tcolorb", "#ccc");
               document.body.style.setProperty("--scolora", "#004c4c");
               document.body.style.setProperty("--scolorb", "#66b2b2");
               a = 3;
               break;
           case 3:
               document.body.style.setProperty("--bg", "#189ad3");
               document.body.style.setProperty("--tcolora", "#ccc");
               document.body.style.setProperty("--tcolorb", "#eee");
               document.body.style.setProperty("--scolora", "#005073");
               document.body.style.setProperty("--scolorb", "#71c7ec");
               a = 4;
               break;
           case 4:
               document.body.style.setProperty("--bg", "#555");
               document.body.style.setProperty("--tcolora", "#aaa");
               document.body.style.setProperty("--tcolorb", "#eee");
               document.body.style.setProperty("--scolora", "#222");
               document.body.style.setProperty("--scolorb", "#777");
               a = 5;
               break;
           case 5:
               document.body.style.setProperty("--bg", "#ccac00");
               document.body.style.setProperty("--tcolora", "#ddd");
               document.body.style.setProperty("--tcolorb", "#fff");
               document.body.style.setProperty("--scolora", "#b29600");
               document.body.style.setProperty("--scolorb", "#e5c100");
               a = 0;
               break;
       }
   }