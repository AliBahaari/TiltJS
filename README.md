# TiltJS
**TiltJS** imposes your website elements to behave more interactive; Works by hovering the cursor over any elements and the element tilts inward.

## Add Project
Just link TiltJS to your project, For example :
```
<script src="Tilt.js"></script>
```

## Initializing
Then, You should initialize properties, Just copy the code below and paste it after the code above.
```
<script>
  Tilt({
    identifier: 'div',    // Element (`.E`, `#E`, `E`, All are valid)
    rotationInterval: 45,    // Maximum degree for rotation
    outRotationX: 0,    // The `rotateX` property value of the element after `onMouseOut` event 
    outRotationY: 0,    // The `rotateY` property value of the element after `onMouseOut` event 
    transitionIn: ['transition-property', 'transition-duration', 'transition-timing-function', 'transition-delay'],    // Transition property for `onMouseMove` event
    transitionOut: ['transition-property', 'transition-duration', 'transition-timing-function', 'transition-delay']    // Transition property for `onMouseOut` event
  });
</script>
```
Note : All the properties above should be filled; `identifier`, `transitionIn`, `transitionOut` should be ***String*** and `rotationInterval`, `outRotationX` and `outRotationY` should be ***Integer***.

## Babel
In minified version that actually is being used for production, It uses **Babel** for ResolutionJS to feel free for using in old browsers.
