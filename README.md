# backbone-readyhelper
An simple tool to deal with delayed callbacks for backbone.js


----------------------------------------------
Usage:


This simple tool will queue initialization callbacks and fire them after the object will be activated.

The beauty of the solution is not this tool, but general concept. This helps you to encapsulate all models and make them black box.

How to use:
if your model is immediately ready, create dummy function onReady, which calls given callback directly (see example-simple.js)
if your model need to load any file, or do any other asynchronous work in initialization, use this tool (see example-waiting.js)

