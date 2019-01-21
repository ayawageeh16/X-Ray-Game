var controller, TRex, loop;
var TrexImgs = ("trex1.jpg","trex2.jpg");

TRex = {
    height:32,
    width:32,
    jumping:true,
    x:144,
    x_velocity:0,
    y:0,
    y_velocity:0

};

controller = {
    
    left:false,
    right:false,
    up:false,
    
    //KEYS CONTROL
    keyListener:function(event){

        var key_state = (event.type == "keydown")?true:false;

        switch(event.keyCode){
            case 37:
                controller.left=key_state;
                break;
            case 38:
                controller.up=key_state;
                break;
            case 39:
                controller.right=key_state;
                break;
        }

    }
};
     i=0;
    //TRex image 
    function TRexInterval(){

        if(i<TrexImgs.length){
            document.getElementById("tRexImg").src = TrexImgs[i++];
            }else{
                i=0;
            }
    }

    //LOOP
    loop = function(){

        if(controller.up && TRex.jumping ==false){
            
            TRex.y_velocity -= 20;
            TRex.jumping = true;
        }

        TRex.y_velocity += 1.5;// gravity
        
        function TRexInterval(){

            if(i<TrexImgs.length){
                document.getElementById("tRexImg").src = TrexImgs[i++];
                }else{
                    i=0;
                }
        }

        TRex.x += TRex.x_velocity;
        TRex.y += TRex.y_velocity;
      
        // if rectangle is falling below line
        if (TRex.y > 180 - 16 - 32) {
      
            TRex.jumping = false;
            TRex.y = 180 - 16 - 32;
            TRex.y_velocity = 0;
    
          }
      
        $("#tRexImg").css({"position":"absolute","top":TRex.y})
        window.requestAnimationFrame(loop);
    }

//ADD EVENT LISTENERS (UP & DOWN)
window.addEventListener("keydown",controller.keyListener);
window.addEventListener("keyup",controller.keyListener);
window.requestAnimationFrame(loop);