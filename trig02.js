//--------------------------------------------------------------------------
//| Title:       Trig02.js                                                 |
//| Description: Animation of circle "orbiting" along a plane with fake    |
//|              perspective for the illusion of a 3D orbital plane        |
//| Author:      Christopher Sykes                                         |
//| CREATED:     July, 13th 2016                                           |
//| Copyright:   ©2016                                                     |
//| Created With: zTxT by Zevan Rosser (github.com/ZevanRosser/ztxt.git)   |
//--------------------------------------------------------------------------






window.onload = function() {
  
  // normal canvas preparation variables
  var canvas = document.getElementById("canvas"),
      ctx    = canvas.getContext("2d"),
      
      // obivious what size the canvas will be created
      width  = canvas.width = 500,
      height = canvas.height = 600;
  
  
  //variables concerning objects being drawing or animated
  var centerX = width / 2,
      centerY = height / 2,
      baseRadius = 50,
      offset = 30,
      speed = 0.05,
      angle = 0;
      
      // variables for path setup
  var pathOffsetX = 200,
      pathOffsetY = 100,
      pathRadiusX = 200,
      pathRadiusY =100;

  
  render();

  function render()
  {
    // clear before rendering the frame
    ctx.clearRect(0,0, width, height);
    
    //variables to create animation
    var radius  = baseRadius + Math.sin(angle)  * offset,
        circleX = pathRadiusX + Math.cos(angle) * pathOffsetX,
        circleY = pathRadiusY + Math.sin(angle);// * pathOffsetY;
    
    // create the circle
    filledCircle("#272", "#383"
                , circleX, circleY, radius
                , 0, 360, true);
    
    
    // variations to create animation and movement
    pathRadiusX += speed * 1.5;
    pathRadiusY += speed * 1.5;
    angle += speed;
    requestAnimationFrame(render);
  };
  
  
  
  //----------------------------------------
  //|                                      |
  //|     easily create circles            |
  //|                                      |
  //----------------------------------------
  function filledCircle(color, strokeColor,  startx, starty, radius, startDeg, Deg, counterClockwise)
  {
    // convert from degrees to radians for arc function
    endDeg = Deg * (Math.PI / 180);
    
    
    // create circle
    ctx.beginPath();
    ctx.fillStyle = color;
    
    // uncomment to create stroke
    // ctx.strokeStyle = strokeColor;
    
    // arc function with variables passed to, to create canvas circle
    ctx.arc(startx, starty, radius
            , startDeg, endDeg * -(1)
            , counterClockwise);
    
    // fill the circle
    ctx.fill();
    
    // yncomment the next 2 lines and strokeStyle line to make stroke visible
    //ctx.lineWidth = 5;
    // ctx.stroke();
    
    // close path to prevent weird effects if starting new drawing 
    ctx.closePath();
    
  };
  
}
