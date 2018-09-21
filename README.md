# TiltJS
**TiltJS**

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
    identifier: 'div', // Element (`.E`, `#E`, `E`, All are valid)
    rotationInterval: 45, // Maximum degree for rotation
    outRotationX: 0, // The `rotateX` property value of the element after `onMouseOut` event 
    outRotationY: 0, // The `rotateY` property value of the element after `onMouseOut` event 
    transitionIn: ['', '', '', ''], // Transition property for `onMouseMove` event
    transitionOut: ['', '', '', ''] // Transition property for `onMouseOut` event
  });
</script>
```
Note : All the properties above should be filled; `identifier`, `transitionIn`, `transitionOut` should be ***String*** and `rotationInterval`, `outRotationX` and `outRotationY` should be ***Integer***.

## Babel
In minified version that actually is being used for production, It uses **Babel** for ResolutionJS to feel free for using in old browsers.
