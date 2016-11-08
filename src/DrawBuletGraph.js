
module.exports = function DrawBuletGraph(props) {

    const {ctx, x, y, buletgraph} = props;

    const ranges = buletgraph.getRanges();
    const poor = buletgraph.getPoor();
    const average = buletgraph.getAverage();
    const target = buletgraph.getTarget();
    const actual = buletgraph.getActual();
    const cordinates = buletgraph.getCordinates();
    const label = buletgraph.getLabel().label;
    const valueLabel = buletgraph.getLabel().valueLabel;
    const position = buletgraph.getPosition();
    const unit = buletgraph.getUnit();


    let height;
    let width;

    if(position === 'h'){
        height = 30;
        width = 300;
    }
    if(position === 'v'){
        height = 300;
        width = 30;
    }

    /*labels*/
   
    
    if(position === 'h' ){
        ctx.font = "13px Arial";
        ctx.textAlign="end";
        ctx.fillText(label,x -8 ,y + height/2);
        ctx.font = "9px Arial";
        ctx.fillText(valueLabel,x-8,y + height/2 + 10);
    }
    if(position === 'v' ){
        ctx.font = "13px Arial";
        ctx.textAlign="center";
        ctx.fillText(label,x + width/2 ,y - 25 );
        ctx.font = "9px Arial";
        ctx.fillText(valueLabel,x+ width/2,y - 10);
    }
    

    //console.log(ranges);
    let t = (position === 'h' ? width : height) /cordinates ,
    step = ranges/cordinates,
    relatio = ranges / (position === 'h' ? width : height);
    console.log(t);

  

    /*rectangels for ranges*/

    ctx.beginPath();
    if(position === 'h' ){
        ctx.fillStyle="#a8a8a8";
        ctx.fillRect(x, y, poor/relatio, height);
        ctx.fillStyle="#bdbdbd";
        ctx.fillRect(x+poor/relatio, y, (average - poor)/relatio, height);
        ctx.fillStyle="#d3d3d3";
        ctx.fillRect(x + average/relatio, y, (ranges-average)/relatio, height)
    }
    if(position === 'v' ){
        ctx.fillStyle="#a8a8a8";
        ctx.fillRect(x,y+(ranges-poor)/relatio,width,poor/relatio)
        //ctx.fillRect(x,y+height,width,-(ranges-poor)/relatio);
        ctx.fillStyle="#bdbdbd";
        ctx.fillRect(x,y+(ranges-average)/relatio,width,(average - poor)/relatio);
        //ctx.fillRect(x,y+height-poor/relatio,width,-(average-poor)/relatio);
        ctx.fillStyle="#d3d3d3";
        ctx.fillRect(x,y, width ,(ranges-average)/relatio);

    }
    ctx.stroke();
    


    /*cordinate lines*/
    ctx.beginPath();
 
    for(let i = 0 , j = 0 ; i <= 300 ;i += t , j+=step){
        if(position === 'h' ){
            ctx.moveTo(x+ i,y + height - 1);
            ctx.lineTo(x+i,y + height+5);
        }
        if(position === 'v' ){
            ctx.moveTo(x-5,y + height-i );
            ctx.lineTo(x+1,y + height-i);
        }
        ctx.stroke();
        ctx.fillStyle="#000000";
        ctx.font = "10px Arial";

    /*cordinate leters*/

        /* for horizontal */
        if(position === 'h' ){
            ctx.textAlign="center"; 
            if(j===0)
                ctx.fillText(j.toString()+unit,x+i,y+height+20);
            else
                ctx.fillText(j.toString()+unit,x+i,y+height+20);
        }
        /* for vertical */
        if(position === 'v' ){
            ctx.textAlign="end"; 
            if(j===0)
                ctx.fillText(j.toString()+unit,x-10,y+height-i+4);
            else
                ctx.fillText(j.toString()+unit,x-10,y+height-i+4);
        }
    }
    ctx.stroke();


    /*target line*/
    ctx.beginPath();
    ctx.fillStyle="#000000";
    if(position === 'h' )
        ctx.fillRect(x+target/relatio , y+7, 3, height-14)
    if(position === 'v' )
        ctx.fillRect(x+7 , y+height-target/relatio , width-14, 3)
    ctx.stroke();

    /*actual line*/
    ctx.beginPath();
    ctx.fillStyle="#000000";
    if(position === 'h' )
        ctx.fillRect(x, y+height/2 -3, actual/relatio, 6);
    if(position === 'v' )
        ctx.fillRect(x + width/2 -3, y+height, 6 , -actual/relatio);
    ctx.stroke();
}


