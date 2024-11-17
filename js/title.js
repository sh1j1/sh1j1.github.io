<!--浏览器标题-->
 var OriginTitle = document.title;
 var titleTime;
 document.addEventListener('visibilitychange', function () {
    //$('[rel="icon"]').attr('href', "/img/png");
     if (document.hidden) {
         document.title = '大三了，快来学习';
         clearTimeout(titleTime);
     }
     else {
         document.title = '早学，早pwn全世界';
         titleTime = setTimeout(function () {
             document.title = OriginTitle;
         }, 2000);
     }
 });