var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function new_image()
{
	fabric.Image.fromURL('get_image', function(Img){
    block_image_object = Img;

    block_image_object.sacleToWidth(700)
    block_image_object.sacleToHeight(510)
    block_image_object.set({
        top:300,
        left:300
    });
     canvas.add(block_image_object);
    })
	
}

function playSound(){
	x.play();
}
