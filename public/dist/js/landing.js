!function(a){if(!Modernizr.video||Modernizr.touch)a("body").addClass("body--noVid");else{new a.backgroundVideo(a("body"),{align:"centerXY",width:854,height:480,path:"vids/",filename:"enactus",types:["webm","mp4","ogv"]})}a(".js-rotate").Morphext({separator:";",speed:3e3});var b,c=a(window),d=a(".header"),e=a(".js-centre"),f=function(){b=c.outerHeight()-d.outerHeight()-e.outerHeight(),200>=b&&(b=200),e.css("margin",b/2+"px auto")};f(),c.resize(f)}(jQuery);