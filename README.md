# TiltJS

By ***TiltJS***, you hover over any element and the element tilts inward. It just uses *JavaScript*.

## Add Project

Just link TiltJS to your project :
```
<script src="Tilt - 1.0.0.js"></script>
```

## Initializing

Then, you should initialize properties, just copy the code below and paste it after the code above.
```
<script>
  Tilt({
    identifier: 'div',    // Element (`.E`, `#E` or `E`)
    rotationInterval: 45,    // Maximum degree for rotation
    outRotationX: 0,    // The `rotateX` property value of the element after `onMouseOut` event 
    outRotationY: 0,    // The `rotateY` property value of the element after `onMouseOut` event 
    transitionIn: ['transition-timing-function', 'transition-duration'],    // Transition property for `onMouseMove` event
    transitionOut: ['transition-timing-function', 'transition-duration']    // Transition property for `onMouseOut` event
  });
</script>
```
*Note :* All the properties above should be filled; `identifier` should be ***String***, `transitionIn`, `transitionOut` should be ***Array***; `rotationInterval`, `outRotationX`, `outRotationY` should be ***Integer***.

## Minified

In the minified version, it uses Babel to feel free for using in old version browsers.
