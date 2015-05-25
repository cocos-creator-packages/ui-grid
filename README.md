# pixi grid

A grid scale widget renderred by pixi graphics.

![preview](https://cloud.githubusercontent.com/assets/174891/7783124/bf4915d2-0168-11e5-8a81-e1aa7e497933.png)

## API

### Method: setAnchor(x,y)

 - `x` number - Range of [0.0,1.0]
 - `y` number - Range of [0.0,1.0]

Sets a scale anchor.

### Method: setScaleH( lods, minScale, maxScale[, type] )

 - `lods` array
 - `minScale` number
 - `maxScale` number
 - `type` string - can be `frame`

Sets the scale method for horizontal scalar. Example:

```
this.setScaleH( [5,2], 0.001, 1000 );
```

### Method: setMappingH( minValue, maxValue, pixelRange )

### Method: setRangeH( minValue, maxValue )

### Method: setScaleV( lods, minScale, maxScale, type )

### Method: setMappingV( minValue, maxValue, pixelRange )

### Method: setRangeV( minValue, maxValue )

### Method: pan( deltaPixelX, deltaPixelY )

### Method: panX( deltaPixelX )

### Method: panY( deltaPixelX )

### Method: xAxisScaleAt( pixelX, scale )

### Method: yAxisScaleAt( pixelY, scale )

### Method: xAxisSync( x, scaleX )

### Method: yAxisSync( y, scaleY )

### Method: resize( w, h )

### Method: repaint()

### Method: scaleAction(event)

### Method: panAction(event)
