function Tilt(objectVar) {
  
  var identifier = objectVar.identifier;
  var rotationInterval = objectVar.rotationInterval;
  var outRotationX = objectVar.outRotationX;
  var outRotationY = objectVar.outRotationY;
  var transitionIn = objectVar.transitionIn;
  var transitionOut = objectVar.transitionOut;

  var DOMElement = document.querySelector(identifier);

  DOMElement.onmousemove = function(event) {
    
    var xPosition = event.offsetX;
    var yPosition = event.offsetY;

    var xDivided = DOMElement.clientWidth / 2;
    var yDivided = DOMElement.clientHeight / 2;

    var xFormula = ((xPosition - xDivided) / xDivided) * rotationInterval;
    var yFormula = ((yPosition - yDivided) / yDivided) * rotationInterval;

    var WebKitProperty =
        MOZProperty =
        defaultProperty = '';
    
    if (xPosition > xDivided || xPosition < xDivided) {
      WebKitProperty += ` rotateY(${xFormula}deg)`;
      MOZProperty += ` rotateY(${xFormula}deg)`;
      defaultProperty += ` rotateY(${xFormula}deg)`;
    }
    
    if (yPosition > yDivided || yPosition < yDivided) {
      WebKitProperty += ` rotateX(${yFormula}deg)`;
      MOZProperty += ` rotateX(${yFormula}deg)`;
      defaultProperty += ` rotateX(${yFormula}deg)`;
    }

    var transitionInComp = ` ${transitionIn[0]} ${transitionIn[1]} ${transitionIn[2]} ${transitionIn[3]}`;

    var CSSProperties = `
    -webkit-transition:${transitionInComp};
       -moz-transition:${transitionInComp};
         -o-transition:${transitionInComp};
            transition:${transitionInComp};    
      -webkit-transform:${WebKitProperty};
         -moz-transform:${MOZProperty};
              transform:${defaultProperty};
    `;
    
    DOMElement.style.cssText = CSSProperties;
  }

  DOMElement.onmouseout = function() {

    var transitionOutComp = ` ${transitionOut[0]} ${transitionOut[1]} ${transitionOut[2]} ${transitionOut[3]}`;
    var outRotationXY = ` rotateX(${outRotationX}deg) rotateY(${outRotationY}deg)`;

    var CSSProperties = `
    -webkit-transition:${transitionOutComp};
       -moz-transition:${transitionOutComp};
         -o-transition:${transitionOutComp};
            transition:${transitionOutComp};    
      -webkit-transform:${outRotationXY};
         -moz-transform:${outRotationXY};
              transform:${outRotationXY};
    `;

    DOMElement.style.cssText = CSSProperties;
  }
}