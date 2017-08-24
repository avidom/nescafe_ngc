(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 900,
	height: 900,
	fps: 30,
	color: "#FFFFFF",
	webfonts: {},
	manifest: [
		{src:"images/bg.jpg", id:"bg"},
		{src:"images/label.png", id:"label"}
	]
};



lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,900,900);


(lib.label = function() {
	this.initialize(img.label);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,530,170);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#DEDAAF","rgba(222,218,175,0)"],[0.875,1],0,0,0,0,0,33.6).s().p("Aj0D1QhmhlAAiQQAAiPBmhlQBlhmCPAAQCQAABlBmQBmBlAACPQAACQhmBlQhlBmiQAAQiPAAhlhmg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34.7,-34.7,69.5,69.5);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhKBAIB+iVIAXAWIh9CVg");
	this.shape.setTransform(0,6.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhKg+IAYgXIB9CVIgXAWg");
	this.shape_1.setTransform(0,-6.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.5,-15.4,15.2,30.8);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhBBkIAAjHICEAAIAAARIhwAAIAABEIBOAAIAAAPIhOAAIAABSIBwAAIAAARg");
	this.shape.setTransform(52,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhhBkIAAjHIAUAAIAAC2IBFAAIAAi2IASAAIAAC2IBEAAIAAi2IAUAAIAADHg");
	this.shape_1.setTransform(30.1,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhIBkIAAjHIAUAAIAABVIBJAAQAdAAAMAOQAKAOAAAdQAAA5gwAAgAg0BTIBLAAQAcAAAAgoQAAgqgcAAIhLAAg");
	this.shape_2.setTransform(8.9,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AA8BkIAAi2IhRAAQgCAqgKAwQgKAygOAqIgWAAQAkhvAEhYIB3AAIAADHg");
	this.shape_3.setTransform(-11.8,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhCBTQgVgYgBg7QABg6AVgYQAUgWAuAAQAvAAAUAWQAWAYgBA6QABA7gWAYQgUAVgvAAQguAAgUgVgAgzhGQgPASABA0QgBAzAPASQAOARAlAAQAmAAAOgRQAPgSAAgzQAAg0gPgSQgNgQgnAAQgmAAgNAQg");
	this.shape_4.setTransform(-31.3,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhHBkIAAjHIB7AAIAAARIhoAAIAABEIBIAAQAeAAAMAOQAKAOAAAdQAAA5gwAAgAg0BTIBMAAQAbAAAAgoQAAgqgcAAIhLAAg");
	this.shape_5.setTransform(-51.3,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-58.6,-10.5,117.3,21);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhHBkIAAjHIAUAAIAABVIBHAAQAeAAANAOQAKAOAAAdQAAA5gxAAgAgzBTIBKAAQAcAAAAgoQAAgqgdAAIhJAAg");
	this.shape.setTransform(45.8,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgJBkIAAi2IhDAAIAAgRICZAAIAAARIhDAAIAAC2g");
	this.shape_1.setTransform(27.2,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ABEBkIgXg+IhfAAIgUA+IgTAAQAlhtAkhaIAhAAQAqB9AfBKgAAmAVQgRgugSg6IgGAAQgZA/gPApIBRAAIAAAAg");
	this.shape_2.setTransform(11.4,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AA0BkIAAhiIhmAAIAABiIgVAAIAAjHIAVAAIAABUIBmAAIAAhUIATAAIAADHg");
	this.shape_3.setTransform(-8.6,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhGBgIAFgRQAYAIAigBQAfABAMgKQANgKAAgWQAAgZgMgJQgLgKgbAAIgcAAIAAgPIAcAAQAZAAAKgJQAKgIAAgVQAAgTgKgHQgLgIgeAAQggAAgYAIIgFgSQAjgHAagBQAmAAASANQAQAMAAAZQAAAVgHAKQgJAPgYACQAuADAAAwQAAAhgUANQgTANgnAAQgbABgkgJg");
	this.shape_4.setTransform(-27.4,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgpBkQASgZAOgYQgKgdgUgsQgWgwgRgdIAXAAQAlBFATA7QArhVAOgrIAVAAQgUAzgaA1QgcA5gWAmg");
	this.shape_5.setTransform(-45.2,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-53.1,-10.5,106.3,21);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A1HGmQhdAAhBhBQhChCAAhdIAAmLQAAhdBChBQBBhCBdAAMAqPAAAQBdAABBBCQBCBBAABdIAAGLQAABdhCBCQhBBBhdAAgA3XlVQg8A7AABVIAAGLQAABVA8A8QA7A7BVAAMAqPAAAQBVAAA7g7QA8g8AAhVIAAmLQAAhVg8g7Qg7g8hVAAMgqPAAAIAAAAQhVAAg7A8g");
	this.shape.setTransform(0,0,0.999,1.03);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-157.5,-43.5,315,87.1);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhyCFQgngoAAhdQAAhfAngmQAjgiBPAAQBRAAAiAiQAmAmAABfQAABdgmAoQgiAjhRAAQhPAAgjgjgAhFhcQgSAUAABIQAABGASAWQARAVA0AAQA2AAARgVQARgWAAhGQAAhIgRgUQgRgUg2ABQg1gBgQAUg");
	this.shape.setTransform(322.5,3.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABFChIAAiPIiJAAIAACPIg9AAIAAlBIA9AAIAAB7ICJAAIAAh7IA8AAIAAFBg");
	this.shape_1.setTransform(287.5,3.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ABOChIAAjnQhGB/hBBoIhQAAIAAlBIA8AAIAADyQBWiMA3hmIBKAAIAAFBg");
	this.shape_2.setTransform(252.4,3.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ABDChIAAhoQgLAGgVAEQgXAFgWAAQg6AAgagWQghgaAAg/IAAh5IA9AAIAAB0QAAAlAQALQANALAlAAQAfAAASgHQASgIAAgNIAAiTIA9AAIAAFBg");
	this.shape_3.setTransform(217.5,3.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhXChQAfgoAXgqQgRgwgihFQgkhMgcguIBJAAQAwBXAeBWQA0hmAZhHIBFAAQggBQgtBYQgsBYgmBBg");
	this.shape_4.setTransform(189.2,3.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ABFChIAAkMIiIAAIAAEMIg+AAIAAlBIECAAIAAFBg");
	this.shape_5.setTransform(157.8,3.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("ABgChQgQgpgOgoIiMAAIgaBRIg/AAQAviZBFioIBfAAQA7C7A6CGgAAwAcQgbhMgSg8IgLAAQgbBHgXBBIBqAAIAAAAg");
	this.shape_6.setTransform(125.1,3.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AA+ChQgihZgcggQgbgcgugEIAACZIg9AAIAAlBIA9AAIAACcQAYgXAggnQAkguAhgwIBLAAQgpA5gjAqQgcAigPAMQAjAMAWAaQAgAnAmBjg");
	this.shape_7.setTransform(95.8,3.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("ABODJIAAjnQhGB/hBBoIhQAAIAAlAIA8AAIAADxQBWiMA3hlIBKAAIAAFAgAhDjIIAnAAQAAAQAIAGQAGAFAPAAQAQAAAHgFQAIgHAAgPIAlAAQAABAhFAAQhDAAAAhAg");
	this.shape_8.setTransform(60.1,-0.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("ABzChIAAlBIA9AAIAAFBgAivChIAAlBIA+AAIAABzIBwAAQAsAAAWAeQATAZAAAvQAABohUAAgAhxBtIBiAAQAhAAAAg0QAAg1giAAIhhAAg");
	this.shape_9.setTransform(20.4,3.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("ABvChIAAjuQgnBVgzB7IguAAQg6iSgcg+IAADuIg7AAIAAlBIBTAAQAvBgAqBtQAlhgA1htIBPAAIAAFBg");
	this.shape_10.setTransform(-22.6,3.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("ABOChIAAjnQhLCIg8BfIhQAAIAAlBIA8AAIAADyQBWiMA3hmIBKAAIAAFBg");
	this.shape_11.setTransform(-61.9,3.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AiBChIAAlBIDnAAIAAA1IipAAIAABMIBuAAQBXAAAABgQAAAzgWAXQgVAWgpAAgAhDBtIBkAAQAfAAAAgtQAAgwghAAIhiAAg");
	this.shape_12.setTransform(-95.8,3.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgWCIQghgkgDhSIhHAAIAACPIg9AAIAAlAIA9AAIAAB7IBIAAQAFhJAhgfQAbgbA6AAQBAAAAdAhQAgAmAABeQAABdggApQgeAkg/AAQg8AAgcgggAARheQgOAWAABGQAABFAOAYQAMAWAlAAQAkAAANgWQANgXAAhGQAAhGgNgWQgMgSglgBQglABgMASg");
	this.shape_13.setTransform(-134.5,3.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("ABQChIAAkMIhiAAQgLCIguCEIhBAAQA7i0AHiNIDXAAIAAFBg");
	this.shape_14.setTransform(-176,3.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("ABPDJIAAjnQhJCDg/BkIhQAAIAAlAIA8AAIAADxQBRiDA8huIBKAAIAAFAgAhEjIIAoAAQAAAPAIAHQAGAFAOAAQARAAAHgFQAIgHAAgPIAlAAQAABAhFAAQhDAAgBhAg");
	this.shape_15.setTransform(-209.6,-0.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AhyCFQgmgoAAhdQgBhfAngmQAjgiBPAAQBRAAAiAiQAmAmAABfQAABdgmAoQgiAjhRAAQhPAAgjgjgAhFhcQgSAUAABIQAABGASAWQARAVA0AAQA2AAARgVQASgWAAhGQAAhIgSgUQgQgUg3ABQg1gBgQAUg");
	this.shape_16.setTransform(-245.5,3.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("ABvChIAAjuQgnBVgzB7IguAAQg5iSgeg+IAADuIg6AAIAAlBIBTAAQAvBgAqBtQAmhgA0htIBPAAIAAFBg");
	this.shape_17.setTransform(-284.7,3.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AATChIAFhSIg+AAIgFBSIg2AAIAGhSIg8AAIADguIA7AAIAFhHIg8AAIADgvIA8AAIAFhLIA2AAIgGBLIA+AAIAGhLIA1AAIgFBLIBAAAIgDAvIg/AAIgGBHIBCAAIgEAuIhAAAIgGBSgAgkAhIA/AAIAFhHIg+AAg");
	this.shape_18.setTransform(-322.6,3.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-337.9,-20.5,675.8,41);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Aj6EhQhUhVAAjQQAAjOBUhSQBMhKCuAAQCxAABLBKQBTBSAADOQAADQhTBVQhMBOiwAAQiuAAhMhOgAiZjMQgmAuAACcQAACbAmAwQAlAuB0AAQB2AAAlguQAngwAAibQAAicgnguQgjgqh4AAQh1AAgkAqg");
	this.shape.setTransform(286.8,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ACLFfQiNkIiokIIAAIQIiDAAIAAq9ICvAAQCZDyCOEHIAAn5ICFAAIAAK9g");
	this.shape_1.setTransform(209.2,0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhBFfIAAq9ICDAAIAAK9g");
	this.shape_2.setTransform(155.8,0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ai4EgQhShVAAjPQAAjPBShSQBKhJCuAAQAwAAA5AIQA4AHAqALIgeB1QgbgJgrgHQgsgGgkAAQh5AAgoAoQgxAwAACaQAACZAxAzQApArB4AAQAkAAAsgGQArgGAbgKIAeB3QgqAMg4AHQg5AHgwAAQisAAhMhPg");
	this.shape_3.setTransform(112.1,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ai4EgQhRhVAAjPQAAjPBRhSQBKhJCuAAQAwAAA5AIQA4AHApALIgdB1QgbgJgsgHQgqgGglAAQh5AAgoAoQgxAwAACaQAACZAxAzQApArB4AAQAlAAAqgGQAsgGAbgKIAdB3QgpAMg4AHQg5AHgwAAQisAAhMhPg");
	this.shape_4.setTransform(53,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AjYE6QhPg0AAiDIAAnoICHAAIAAHUQAABGAkAcQAjAbBZAAQBZAAAjgaQAngbAAhIIAAnUICEAAIABHoQAACDhPA0QhDAsiWAAQiVAAhDgsg");
	this.shape_5.setTransform(-16.5,0.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AkZFfIAAq9IFuAAQDEAAABDxQAABjguA8Qg0BFhgAAIjrAAIAADogAiTAIIDDAAQApAAAXgcQAWgeABg8QgBh/hUAAIjFAAg");
	this.shape_6.setTransform(-85,0.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AkZFfIAAq9IFuAAQDFAAAADxQAABjguA8Qg0BFhgAAIjrAAIAADogAiTAIIDDAAQAqAAAWgcQAXgeAAg8QAAh/hVAAIjFAAg");
	this.shape_7.setTransform(-152.6,0.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("ADTFfQgthygWg9IkzAAIg4CvIiLAAQAwibBIjEQBGi+BBigIDQAAQA3CuBFC+QBIDHA6CKgABpA+Qg2iXgsiUIgaAAQgtB0hAC3IDpAAIAAAAg");
	this.shape_8.setTransform(-225.5,0.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ai4EgQhRhVAAjPQAAjPBRhSQBKhJCuAAQAwAAA5AIQA4AHApALIgdB1QgbgJgsgHQgqgGglAAQh5AAgoAoQgxAwAACaQAACZAxAzQApArB4AAQAlAAAqgGQAsgGAbgKIAdB3QgpAMg4AHQg5AHgwAAQisAAhMhPg");
	this.shape_9.setTransform(-293.7,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-320.4,-36.7,640.8,73.5);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AksFfIAAq9IEOAAQCtAABLBIQBTBPAADGQAADEhTBRQhMBLisAAgAimDsIB7AAQB2AAAogsQArgwAAiQQAAiWgrgtQgmgoh4AAIh7AAg");
	this.shape.setTransform(103.9,0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AjoFfIAAq9ICGAAIAAJJIFLAAIAAB0g");
	this.shape_1.setTransform(40.7,0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Aj6EiQhUhVAAjRQAAjOBUhSQBMhKCuAAQCwAABMBKQBTBSAADOQAADRhTBVQhMBNiwAAQiuAAhMhNgAiZjLQgmAuAACcQAACaAmAwQAlAuB0AAQB2AAAlguQAngwAAiaQAAicgnguQgjgrh4AAQh1AAgkArg");
	this.shape_2.setTransform(-30.1,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AjQEgQhShVAAjPQAAjOBZhTQBPhJC1AAQAwAAA+AIQA+AHApALIgcB1QgagKg5gGQg0gGgoAAQh+AAgpApQgxAvAACbQAACZAwAzQAqAsB4AAQAwAAArgKIAAi2IiaAAIAAhuIEjAAIAAGJQgqANhLAJQhHAIg/AAQitAAhLhPg");
	this.shape_3.setTransform(-104.9,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-134,-36.7,268.1,73.5);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Aj/G5IAAq9IH/AAIAABzIl5AAIAAChIEMAAIAAByIkMAAIAADEIF5AAIAABzgAhZk3ICBiCICLAAIigCCg");
	this.shape.setTransform(200,-0.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Aj6FfIAAq9IH1AAIAABzIlvAAIAADHIEMAAIAABwIkMAAIAAETg");
	this.shape_1.setTransform(139.5,8.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ADTFfQgyiAgSgvIkyAAIg3CvIiMAAQAxibBHjEQBFi+BCigIDQAAQA4CvBEC9QBIDJA6CIgABpA+Qg4iegqiNIgaAAQgyCAg7CrIDpAAIAAAAg");
	this.shape_2.setTransform(69.6,8.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ai4EgQhRhVAAjPQAAjPBRhSQBKhJCuAAQAwAAA5AIQA4AHApALIgdB2QgagKgtgHQgqgGglAAQh5AAgoApQgxAwAACaQAACZAxAyQApAsB4AAQAlAAAqgGQAsgHAbgJIAdB3QgoALg5AHQg4AHgxAAQitAAhLhPg");
	this.shape_3.setTransform(1.4,8.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AiaFmQg8gIgrgOIAehzQAjALAyAHQA1AHAyAAQBWAAAkgTQAogVAAg1QAAgrgegVQgkgZhdgJQh5gMg1gqQg4grAAhfQABh5BMg3QBIg1CXAAQA4AAA8AJQA5AJAqAOIgdBzQgegLg0gHQg0gIg0AAQhUAAgkAVQgmAVABAyQAAAqAcATQAiAUBaAJQB8ANA4AxQA5AwABBjQAAB5hNAzQhHAxibAAQg7AAg7gJg");
	this.shape_4.setTransform(-61.9,8.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Aj/FfIAAq9IH/AAIAABzIl5AAIAACiIENAAIAABwIkNAAIAADFIF5AAIAABzg");
	this.shape_5.setTransform(-122.9,8.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("ACLFfQiMkGipkKIAAIQIiDAAIAAq9ICvAAQCUDqCTEPIAAn5ICFAAIAAK9g");
	this.shape_6.setTransform(-195.4,8.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-225.6,-44.9,451.3,89.8);


(lib.label_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.label();
	this.instance.setTransform(-265,-85);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-265,-85,530,170);


(lib.blk = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EhGTBGUMAAAiMnMCMnAAAMAAACMng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-450,-450,900,900);


(lib.Symbol10 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol9();
	this.instance.alpha = 0.398;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34.7,-34.7,69.5,69.5);


(lib.btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.arr = new lib.Symbol8();
	this.arr.setTransform(126.3,-0.9);

	this.t2 = new lib.Symbol7();
	this.t2.setTransform(45.8,0.7);

	this.t1 = new lib.Symbol6();
	this.t1.setTransform(-78.5,0.7);

	this.bord = new lib.Symbol5();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.bord},{t:this.t1},{t:this.t2},{t:this.arr}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-157.5,-43.5,315,87.1);


(lib.bg_1 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// l10
	this.l10 = new lib.Symbol10();
	this.l10.setTransform(-566,-1771.7,59.046,59.051);
	this.l10.alpha = 0.199;
	this.l10.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.l10).wait(1));

	// Layer 2
	this.l1 = new lib.Symbol10();
	this.l1.setTransform(-405.2,-143.2,1.7,1.7);

	this.l2 = new lib.Symbol10();
	this.l2.setTransform(-318.2,-357.2,1.3,1.3);

	this.l5 = new lib.Symbol10();
	this.l5.setTransform(155.7,5,0.8,0.8);

	this.l4 = new lib.Symbol10();
	this.l4.setTransform(-154.3,-99.3,1.5,1.5);

	this.l3 = new lib.Symbol10();
	this.l3.setTransform(175.7,-294);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.l3},{t:this.l4},{t:this.l5},{t:this.l2},{t:this.l1}]}).wait(1));

	// Layer 1
	this.instance = new lib.bg();
	this.instance.setTransform(-450,-450);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#989269").s().p("EgB6A2FQhlgpgkhfQgdhQANhtQAFgxAhiQQAah0gChPQgChsgxhIQgtAQgjAuQgWAdggBAQgiBGgTAbQghAygrAVQhiAzhphaQhfhSgjh/Igfh4QgThIgSguQgziBhdgtQhAAMAPBlIASBbQAKA4gEAhQgGBGhFApQhAAnhPgEQg2gDhYgbQhogfgmgHQg2gKiLgBQh8gBhEgUQhjgbg4hZQgkg4AEgzQgPBCAIBWQAXCZAGBKQAJB9g6BmQhBBwhqgIQg1gEgtglQhKg8g0iUQh8lch0nyQhCkfh7pAQhyn6hxlTQg7ixhDifQhnj2h7jSQgPAjgfAWQgUAOgaAIQg/AVhBgVQg2gSg3guQgigcg6g9In2oYQhDhJgdgqQgvhFgKhBQgJhNAyhBQA0hCBHALQABhghKh9IhBhpQgng/gUgsQgHgQgGgRQgMgogBgwQgBhBAVg5QAXg7AogfQAsghA5AJQA4AKA0A3IBTBqQBVBoB/A5QB/A5CFgFIobxJQg5h1ADhsQADiABhgXQAxgMA5AcQApAVA0AuQESD1DNE6QDMFYB3CbQDMELDuBGQhqh0gphsQg1iLBMhZQBShhCbAwQB9AnCABvQANg6AygnQAugkA/gJQA/gKA3AVQA8AWAeAyQgYhrgFg4QgJhbAWhFQAahSBIgxQBMgzBKAYQBIAXAnBTQATApALA1QgCgdAEgbQAIhEAjgwQAlgzBAgTQBCgUA2AeQAxAdAcBEQAQAqARBXQAvD6BgDvQBgDuCLDXQhNlGAblXQATjQBtguQBpgrBeBvQA9BIAjBoQAAgSAGgTQAQgvAvgkQAvgkA4gIQA8gJAuAcQBeA4AVB+QATB0gvBxIDCAvQgyhAA1hSQA0hQBTgGQCPgHCGCoIBlCGQA8BOA3AoQAugpBBgMQA+gLA/ASQBAASAvAqQAxAsASA8QAcg/AwgxQAvgxA9gfQhNhCAWhzQAWhyBeguQBZgsBrAgQBnAfBBBSQA6BJAeBwQASBCAUCOQATCOASBDQAfBvA6BIIAFrBQAAhJAIgqQANg/AkglQBJhLB/A0QBnAqBgBmQgaiCgBhMQgBhzAthQQAZgsAvgdQAtgcAzgIQB3gRAtBZQBVg9A3iKQAOglAchUQAZhQARgpQAzh/BvhHQB6hOBiBBQA5AoAaBTQASA7AFBhQAaGVANHRQgdgVgjgGQg3gKg3AhQg0AfgdA2QgaAvgLBBQgIAtgDBIQgREuAHITQAHJQgIDwQgIDtgaFMIguI5Qg3K4AZG6QAEBGAGAlQAKA7AXApQAbAyAtAdQAxAgAzgIQAogFAigcIgaBRQgeBagaAuQgnBHg4AfQhtA7h3hYQhxhTgUiFQgSh1gSgtQgjhVhDAGQAOA9gcA8QgaA5g1ApQg1Aog9AKQhBAKg3gdQAjBKgdBVQgeBUhJAkQhJAlhUgcQhUgcglhIQgmBDABBdQAABEAWBkQAbCAAEAoQALBfgWBFQgcBUhPAtQhTAwhHgoQgzgegahFQgSgwgKhVIhgtqQgEBAgqA2QgmAzg9AeQg9AehAAAQhDAAg1gjQAFAtgnAkQglAjgyABQgqACgwgVQgkgQgughQichxiPjFQhXh4iRj7QgJGFgePiQgDBKgJAmQgPA9glAiQgoAog0AAQgjAAgpgRgADTEoQAGAXAZBJIAaBnQAPA9ARAnQAEAIAFACIgHg9IgJg9QgDgUgPgxQgmiOgWhLQgQAoAMA7gEAuTgo7QgGABgEAEIgKAQQhOCugpBXQgVAugJAaQgJAYgKAkIgPA9IgbB5QAJADAQgKQAEgEAOgTQAcgoA+gTQAYgGAfgCIA2gBQAJgVAAgwIAAiTQABhWgBg3QgDhNgIg/QgDgCgEAAIgDABgEAzAAfbIATArIgLAiQgCgfgGgugEA0BARlQARgvADgUQAHAFAAAJIABAIIABAKQAAAFACAIIADANIAEAeQACASAFAJQgSAIgsAMQABgaAQgqgEBDugk1QgDgjgGgeIASgWQBUhZBeAUQBPARAxBZQAkBBAWBtIAeCcQgkAYgYAlQgGAJgZA4QgTAngTAUQgUATgmAQIhCAaQhMAggEAzg");
	this.shape.setTransform(-191.9,-651.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#69633E").s().p("EgGhAsbQhVgGhFg1Qg8gvgthNQgkg/gdhaQhFA0hggNQhcgNhAhBQg7g6gdhaQgahRACheQh6hkhGiPIgUgqQAGAuADAfIABAbQACA6gMAtQgPA2gkAlIgPAOQgiAdgoAFQgyAHgyggQgtgdgbgxQgWgqgKg7QgHglgEhGQgYm5A2q4IAvo6QAalJAIjvQAHjwgHpQQgGoTAQkuQAEhJAIgtQALhAAZgvQAdg2A0ggQA4ghA3ALQAiAGAdAUQAgAXAZApQAkA6AZBiICaJTQAgjJA+mTQANhPAKglQARg/AegqQAig0A4gZQA7gaA1AVQAAhOADggQAFg+AUgtQAYg0AtggQAygkA0AHQBNAJArBYQAWAtANA/QAGAeAEAjIBFJgQAEgyBNggIBBgaQAmgRAUgSQAUgUASgoQAYg3AFgKQAYglAkgYQAcgSAkgLQBQgYBNAaQBIAXA5A9QA1A4AfBOQAUAvALAPQAVAgAdAEQBJgqAxhFQAyhGAPhSQAKg6gGhPQgEgugLhcQgIhRAHg6QAIhMAig1QAlg9BGgZQBIgaA5AjQA1AhAUBLQAOA1AABYQAAHmACDzQA/lsBxlTQBIjUB7gNQA3gFAzAkQAwAiAbA4QAVAuAJBAQAFAlAEBOIAKFMQAHD/AACnQgBGhgkFOQgcEEg/FCQgjC3hXGIQhTF4gmDJQg9FBgZEGQgbEfgJA5QgeDBhCCFQhACEheAuQg4Abg/gIQhCgJgkguQgJgKgHgRQgUgqgNhOQgRhmgngmQh6AIhphEQggA+ADBeIAQClQAIBegYBJQgdBYhEAfQiMA9i7jUQg5AbgjBCQgXAsgYBcQgcBogPAmQgeBLgxAmQg4AshMAAIgVgBgEgHtAgNQgQAQAAANQAAAMAJAMIAQATQAVAXAQAkIAZBBQAOgDAJgRQAFgKAIgXIAMgUIAOgTQASgigJgiQgwgSgTgPIgWgSQgOgJgMgCIgbAagA0pPNQgQAqgBAaQAtgLASgIQgGgKgCgRIgDgeIgDgNQgCgIAAgGIgBgJIgBgIQAAgKgHgFQgDAUgSAvgAVTxYQgMBwgKBOIAMAAQABgfALgwIAQhPQAIgqABg2QAAgegBhDIgCgQIgEgOIgUC/g");
	this.shape_1.setTransform(273.2,-636.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5B4721").s().p("Eg6VA4eQhFgYgpg7Qgrg/AShAQAMgrAogmQAdgbA2giIKtm0QhfAJhChbQg/hWAOhmQALhWA8hcQAlg4BXhiQhlAnhwgPQhwgQhWhCQhTAVh7BWQiNBig8AZQg1AXhBgCQg/gCg2gXQg5gZgdgpQgggtAJg3QAKg9BCg7QAkgiBQg8QAHAQAJALQAkAuBCAJQA/AIA4gbQBeguBAiEQBCiFAejBQAJg5AbkfQAZkGA9lBQAmjJBTl4QBXmIAji3QA/lCAckEQAklOABmhQAAingHkAQCbhcCTiiQBMhSBsiJQCRi5AggmQApgzAhggQAsgqArgZIA8gbQAkgQAVgNQARgMAlgmQAhggAXgOQAsgcA4ADQA3ADAqAgQApAgASA0QARA0gMAzQgIAigbAwIgrBOQggBLADBwQALCDAEBBQAFBsgQB8QBaiLBTiSQDdmGCdmkQAkhiAhgxQAyhLBFgRQB2ggBNCBQAiA4AMBEQAMBGgOA+QgLA1gcBGIgxB4Qg8CTADBiQEJlnEpkxQAzg0AlgZQA1gkAzgCQBHgFA8A4QA5A1AQBNQAPBBgMBSQgGAzgZBfQCCgiB4BgQB4BfgDCIQA8gOBKgzQAqgeBRhCQBHg3AygRQBCgYA8AcQBLAiAXBhQAUBUgYBfQghBygPA5QgZBkAPBIQBBgPBUg2QAwgfBdhCQBRg2A5gOQBKgUBAAkQAvAaAeA4QAaAwALA/QAcCphJC1Qg1CEiFC/IjhFBQh4C9goCdQA1g4BRgPQBRgQBFAiQBGAgApBHQAoBIgJBNQMCkIcvpzQBLgbAygEQBGgHAuAhQAxAgANBDQALA/gZA7QgVAzgvAxQghAjg8AwQmSFCnUDgQnVDgn2BvQBPBPgwCAQgsB3hsBEQghAUi3BPQiFA8hABCIH6iQQB6ghBhAMQB5AOAfBbQAaBLg6BNQg0BEhXAjIijA5QhfAjgxAwQGthrIjiNQB4gfBIgCQBrgDBHAwQBeBDAOCSQAKBqghCfQBlgVA4gEQBZgHBCAXQBOAZAuBGQAxBKgaBIQghBgicAeIiIAVQhRANgwAUQAsArgGBIQgGBDgsAyQgoArg/AgQgsAWhNAbQtZE0scGZQB2gZBnAhQB1AmAZBgQAUBPg2BNQgUAcgZAVQgnAigzARQhHAYhegFIglgDQg0gFhQgPQgJAggTAaQgjAzhEAjQhLAniBAZQpuB3rzCEQoSBdtTCPI6cEdIigAbQhVAPgzACIgTABQhBAAgxgSgAc9aTIhIATQhzAbg5AQQhjAbg+AoQAnAMAZADQAiAFAdgGQATgDArgUIEiiFQggACgqALgEAweANAQioAvi0AuQAegDA8gBQA8AAAdgDQAqgEAPgFQAagIAvgcQAwgcAZgJQgGgGgLAAQgIAAgJACgAPvgqQgmALgKARQAogCA2gPIBdgbIgTgBQgyAAhGARgEgG8gsxQglA6gYAfQgJASAAAHQAYgPAKgHQATgNALgPQAOgPAHgTQAIgVgEgTIgEgBQgHAAgIALgEg2CgRCQAKhOAMhwIAUi/IAEAOIACAQQABBDAAAeQgBA2gIAqIgQBPQgLAwgBAfg");
	this.shape_2.setTransform(753.3,-619.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E2DEB0").s().p("Eg5xBQxIgMgEQiRgqg+htQgwhTALhoQAEgiAJgkQAhh8Bgh8IAyg8QBShiArg4QBhiAAdhvQhMg/BBhsQA6hhBugzQCkhNCxgsIAOgPQAtgpA4gEQARAAAEgJICcAAQAxgTAogZQB6hMgehrQgUhJhOgaQg0gRh1gCQiJgBgwgIQhjgRgxg3QgyAyhCBrQhJB4gkAqQhEBUhbAjQhmAohSgrQhDgkgkhXQgbhBgNhlQhDoJBoqJQA/mODEr2QAliNBEhXQBVhuBqAYQBBANAzBBQAkAtAlBVIFMLZIC6lzQhog/gdiXQgVhrAPisQBry6gwy3QkyOPiWHHQggBggiA1QgxBLhEATQhGAVhJgtQhEgqgghKQgcg+AAhVQgBg9APhcQAijJBOjvQA0idBrkOQB5kxArh5QBVjxAqjEQAXhiAChGQADhdgdhHQgdhKhGhJQgigjhkhVQhShHgsg7Qg7hQgKhRQgLhbBBhLQBEhNBUAWQgShKhMhFQgsgnhihIQhNg/gghTQglheAyhCQAtg6BcABQBLAABaAkQC9BOCnB0QCoB2CICWQAchMglhbQgehKhFhKIh6iAQhChNgUhHQgYhZA2hSQA4hVBTASQhJhbgfgzQgyhTgKhLQgLhaA1hOQA4hQBTABQghhpA1hnQA4hsBkAMQA0AHAzAuQAMAKBJBOQBPBQBkA2QBkA2BuATQAJg2ArgpQAngmA5gPQA5gQA2ANQA5ANAjAqQAbg2BEgNQA/gNA7AdQAxAYAuAzQAYAbAzBIICrD5QAFARAHAQQAUAsAoA/IBBBpQBJB9gBBgQhHgLg0BCQgyBBAKBNQAJBBAvBFQAdAqBDBJIH3IYQA5A9AjAcQA3AuA1ASQBBAVA9gVQAbgIATgOIERGPQBDChA6CxQBxFTByH6QB7JABDEfQB0HyB8FaQA0CUBKA8IAHATQAgBQBoCLQBoCJAfBRQAYA7gFBHQgEBEgdA7QgdA8gvAeQgzAhg9gNQB1AsA/B6QA/B6giB5IaeBPQBoAGAyAIQBWAOA8AhQBHAnAmBFQApBKgVBIQgaBeh2ArQhZAfiIAAQt+AKp3AEQAOBkgoBXIckAKQCmACB5A/QCSBLgZB9QgSBdhvAwQhVAjiCAHQqLAl0yBHQACCRAHEeQCJACBiAoQB7AxAgBlQAcBTgrBbQgpBVhSA0QhFAphjAWQghAIgyAHQgrAHg4AHQomA/xMCCQm8A0jRAiQlqA6kXBTQjSA/khB1QikBClHCJIgaALIhEAbQjkBYiuA0QkRBRjyAYQg4AFgzAAQhkAAhTgVgEg2mBJwQgdASgSAXQgRAWgDAYIAAAKIDGgVICNgOQBDgIAdgIIBDgZQB7gyCMgOIAqgGQAXgEARgJQANgIARgQIAcgaIAJgHQkAA3kGAeQhTAKgzgBQg7gCgvgQQgyASgnAZgEATQAyzIAIAXQALAigJAmIgEAVQgCAMABAIIAjgJQAKgcgBguQgCg/ACgOIg3AAQABAKAFAOgEgDlAzJQg7AEguANIFIAAQgYgMgggFQgXgDgkAAQhIAAgkADgEgzRAULQghCAgyE7QgtEegvCbIgXBLQgNAtgHAhQgJAvgDBWQgGB9AACdQAABeAEC6QA0g9Ajg7QAohCALg1QAHgkgDg1IgFhbQgHhwAxg6QAXgZApgVIBJggQBSgoBBhFQA/hDAlhVQAUgzADgrQAAgegSg5QgchKhChjQhniYgHgMQhYiSgdiqQgLAIgEAWgEgjmAajIgVAQQgIAGgNADIgWAEIgoAFQgIAAgIAFQgHAHgCAHIgZA2QAZABAngYQAIgHAOgIIAYgQQAlgWAVgUQALgKAAgKIgDAAQgKAAgMAJgALQGlIASgKQgVgwgwgyIhbhTQgjgfgogqIgVgVQgNgKgNgBQBoB7CgCtg");
	this.shape_3.setTransform(-561.6,-400.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#656044").s().p("Eg6mAioQhMgCgvgLQgWgGgTgIQgkgRgYgbQgqgwAEhIQACgyAWgtQAIgPAKgPQAggwA8gsQAhgYBPgvQhHgYhaAOQg/AKhhAjQhtAng0AMQhbAUhHgOQhUgSg0hIQg3hNAfhKQASgqAwghQAggWA+gcIItj6Qg8hPgGhhQgoAZgugMQgqgMgjgmQgjgmgOgyQgPg0AOguQAahWBYhGQA6gvB0g6QKzlcDmh1QmJAUl+BYQmABalnCbQh6A1hfACQh7ACgphXQgohVBMhbQA8hJBvg3QLjlvMGkvQhUgmhFg+QhEg+guhQQh9A8hMAVQh0AghdgWQhsgag3hsQg4hvBDhQQAbggAxgWQAhgPA6gOIA2gOIAMADQB9AhClgRQDygYERhRQCug0DkhYIBkgLQgRgGgPgKIAagLQFHiJCkhCQEhh1DSg/QEXhTFqg6QDRgiG8g0QRMiCImg/QA4gHArgGQCKAlB9AwQBEAbAnAXQA4AgAfArQAyBDgKBcQgJBcg/A4IPnj8QBbgYA9ACQBVADAsAzQAsA0gQBOQgPBKg4AwQgxAphLAZQgxAQhaAPQAsATAKA3QAKA0gaAtQgVAlgtAhQgaATg7AhQkiCZo/EzIAtCzQLlj0MOhmQCAgRBmAlQB5AsgDBlQgDBAg+A1QgsAlhTAmQo9EDrtFPQOGjXNalqQBvguA6gSQBhgdBPADQBfADBNA0QBSA4APBUQAXB4hvBhQhiBWiOAYQhVANivANQiYAUhYA7QAXA1gZA8QgXA6g0AmQgrAfhBAWQgjALhSATQqjCdpSFEQCRg4BVgQQCEgaBjAiQA4ATAsAvQArAsAUA5IAIAYQAMAugHAqQgKA5grAlQgrAlhFALQgpAHhVAAQowAAobCiQAkAeALApQAOAtgRA8QgdBthdAwQhQAphyADQhDABiJgQQrmhPv1C6Qk7A5ouB9QpoCKkAAyQiyAjikAbQjLAhi0AUQlMAlkqAAIhkgBgEgtGAa8Qg+ANgjAaQAVAMAbgGQAXgDAXgLQAqgRAXgTIgJAAQgTAAgiAFgAkMSZQieAhgQABQB+AABAgHQBbgJBCgcQgZgEgeAAQg0AAhCAOgAeLkLQgzAIgXARIAPAWQAIAMADAMQA0gNA+gbQAggOBMgmgA82onQBIgMBWgbQA4gRBhgkQgEgCgFgFQihAYiNBLgAeOywQgiAIhEAWQhHAThyAJIkMAgQgiADgSAEQgdAGgUAMQATAiAGAPQAMAdAAAZQACAjgUAlQgOAageAlQAqABAxgNQAjgKA0gVQBKggBagtQAxgZBwg7QC6hkBcgzQgSgFgXAAQgbAAggAHgAH+25QiYARhPARQhMAQh2AmQiXAxgmAKQBUADBsgQIDCgfQE8gsCdgZQEUgrC5hDIrCBMgA902QQBZAHAtAAQBLgBA6gPIinAAQhEAAggAJgAZ86LQhIANhoAuQBdgLB9gUIDZgjIiCgBIgQAAQhEAAgtAIgAMI+qQgJADgLAIIgVAOQgoAchKAIQhvAMgNADIAAASQApAAAxgIQAdgEA7gNQDCgrCPgeIjHAAQgZAAgMAEgEhC3gW4QhNgHg2geQhAghgbhFQgdhIAkg4QAbgsBAgUQArgOBMgGIIKgmIgyA8QhgB8ghB8QgJAkgEAiIi5AKQgxADgmAAQgeAAgXgCgEg3WgYFQASgXAdgSQAngZAygSQAvAQA7ACQAzABBTgKQEGgdEAg4IgJAHIgcAaQgRAQgNAIQgRAJgXAEIgqAGQiMAOh7AyIhDAZQgdAIhDAIIiNAOIjGALQADgXARgXg");
	this.shape_4.setTransform(-561.5,229.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#7B5A0E").s().p("Eg2NAieQgbgDgVgGQhDgRgigqQgsgzAHhMQAHhJAvg3QApgwBEglQAygaBPgcQhHhHghhlQgghgAIhpQADgrAJgpQhTgDg+gbQhLgiglhKQgmhJAbg/ImJgHQhjgBg8gRQhUgZgkg8Qg7hlBihqQBchkCEgQQBRgJCqgBQCSgKBSg8Qg0AghAgLQg6gKgzgpQgzgqgVg4QgYg8AVg5QAUg6BThSQBXhWAXgyQhiAmhdhaQhThSgeh8QgMg4gBgnQgBg0AUgnQAagxA9ghQArgYBKgWIHpiTQBRh8ChhZIAugZIlIgjQgxgFgcgJQgpgNgYgZQgpgpAMhEIABgDIabkdQNUiPIShdQLziEJth3QCCgZBLgnQBEgjAjgyICfgnIAmADQBdAFBHgYQAzgRAngiQAcgDAWgBQBogFBFAsQAlAYAUAuQASAqgCAvQgDAwgXAfQgXAfgjAGQBegMAyAAQBXgBBAAbQBKAhAlBKQAmBPgkBCQgSAignAbQgbATgyAXQqDEurCB+IA/AOQBOASAqASQAkAQAaAVQMZhgMfBCQBwAKBHAjQBeAtAIBSQAJBUhWBBQhDAzhtAfIj1BFQgaAYghAWQi/B/kSBTQipA0lPBDQhcAShDgMQgpgIgcgSIhaAZQgJAzgVBZQBKgEBhggQA3gTBvgpQBggiBNgIQBggLBMAcQBVAgAtBUQAvBVglBMQB1hADEAMQAlACCCANQBnALA/AAQBaAABugTQBCgMCCgeIIsh9QFlhRDGguQBfgVAwgFQBQgIA/ARQBJASAxA4QA0A7gHBFQgLBlh9AyQhUAhiZANQkfAYm2ChQjsBah3AqQjNBKibAmQiQAkjQAgQjvAhh2ATQmwBCj8B7QCBgrCJA3QCJA3BAB5QApgZAxAJQAuAJAnAiQAnAjASAvQATAygMAvQgXBehiA0QhcAxhogOQApB3hYB9QgvBChEAyQgsAhg2AaQjxB1lkAIQh/AEi7gKQjSgNhngFQnLgWo9A3QlZAhqsBhIlOAwQiOAUhhgVQiAgbglhgQlhCIl+ACQgrAAghgDgAOTZPIgtAIQgdAGgPACQB9gHA9gCQgsgIgjAAIgSABgAvaJTQiLAXg4AKIBgAAIAzgJQAkgIAngLQgFgGgMAAIgKABgAS4qwQgRADgKAHIgEADIA3gRIgYAEg");
	this.shape_5.setTransform(780.9,-142.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#211B06").s().p("Egm0AL5IgSAAQg8gCgcgEQgsgHghgQQhTAFg5gDQhwgHhSgpQiIhEgyifQgyifBJiGQArhQBhhSQBchLBhgxQB9g6EOgjIAHgBQg7gZg9g+QgogmgagoQAiAEAqAAQF+gDFhiIQAlBgCBAcQBhAUCOgTIFOgwQKrhiFZghQI8g2HMAVQBoAFDSANQC6AKCAgDQFkgJDxh1QA1gaAtghQAYAEATAFQBUAXAkA7QAzBUg/BlQg4BbhoAxQApBGBdAdQBPAZBhgKQAWgDCXgeQBogVBFAEQBeAEBJA2QBOA7ACBTQABA5glAxIgIALQgqA0hBAaQg0AXhKAIQgjAEhiAFQmJAPpqB4QlPBEioAgQkjA4jVAcQlxAwpSAVQsBAbjHAOQioAMj6AZQgdAJgjAMIiBAvQieA0jOAPQhfAHidAAIhqgBg");
	this.shape_6.setTransform(695.8,115.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#81581B").s().p("Eg6eARhQgigSgbgYQhchRgQiaIgBgQQgNiuBXihQhDAGg4gpQgPgLgPgPQhDhFAKhVQALhVBRgzQBRgzBRAbQgdgqAJg6QAJg0AkgrQAhgkAzgbQAlgUA+gXIAXgJQDoADB+gJQDOgPCeg0ICBguQAjgNAdgJQD6gZCogLQDHgPMBgbQJUgUFxgwQDVgdEhg4QCoggFPhDQJqh4GJgQQBigEAjgEQBKgJA0gWQBBgbAqg0IAIgLIEVg3QM1ieImgRQBzgDBTAiQBmAqAJBXQAFA3gmAyQgiAtg4AYQgqAUhBANIhxATQhqAWiEA5QghAOjFBfQiLBChcAfQiAAqhyABQB5ATBQA1QBiBCgUBZQgMA8hBApQguAdhTAXQozCfkMBEQnSB1l6A5QjOAfmCAoQmWAqi4AbQkYAommBaIhWASIi5ApQrICgkBAvIg8AJIpiBjQhvARhkASQkIAwi+AwQiYAnhMAGQgZACgXAAQhjAAhIgmgAjiBPQCZAGCKgXQidAAiGARg");
	this.shape_7.setTransform(803.7,211.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#A57D49").s().p("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");
	this.shape_8.setTransform(140.1,533.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#BD9F56").s().p("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");
	this.shape_9.setTransform(199.6,564.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2617.9,-3823.8,4350.5,4745.2);


(lib.content = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		var r = this;
		
		var tl = new TimelineMax();
		tl.fromTo(r.blk, 1.0, {alpha:1}, {alpha:0, ease:Power0.easeNone})
		  .from(r.bg, 1.5, {scaleX:3, scaleY:3, ease:Expo.easeOut}, 0.0)
		  .from(r.lab, 1.2, {x:"+=70", alpha:0, ease:Expo.easeOut}, 1.0)
		  .staggerFrom([r.t1, r.t2, r.t3], 1.5, {y:"+=150", alpha:0, ease:Expo.easeOut}, 0.05, 1.00)
		  
		  .from(r.btn.bord, 2.0, {scaleX:0.4, scaleY:0.4, alpha:0, ease:Elastic.easeOut}, 3.0)
		  .staggerFrom([r.btn.t1, r.btn.t2, r.btn.arr], 1.1, {x:"-=40", alpha:0, ease:Expo.easeOut}, -0.1, 3.50)
		  
		  .to(r.btn, 0.5, {scaleX:0.7, scaleY:0.7, ease:Expo.easeOut}, 6.0)
		  .to(r.btn, 1.5, {scaleX:1, scaleY:1, ease:Elastic.easeOut, onComplete:btnMove}, 6.8)
		  ;
		  
		var z = this.t4;
		function hash() {
			var i = 0;
			for (currObj in z) {
			  if(z[currObj] && typeof z[currObj] == "object" && i>=56){
				  TweenMax.from(z[currObj], 1.0, {x:"+=50", alpha:0, ease:Expo.easeOut, delay:(56-i)*0.03+2.4});
				  }
			i++;
			 }
		}
		hash();
		
		function btnMove() {
			TweenMax.to(r.btn, 0.5, {scaleX:0.7, scaleY:0.7, ease:Expo.easeOut, delay:1.0})
			TweenMax.to(r.btn, 1.5, {scaleX:1, scaleY:1, ease:Elastic.easeOut, delay:1.8, onComplete:btnMove})
		}
		
		
		var qs = [r.bg.l1, r.bg.l2, r.bg.l3, r.bg.l4, r.bg.l5];
		
		var i = 1;
			for (i=0; i<5; i++) {
				//TweenMax.from(qs[i], 1.0, {y:"+=250", ease:Expo.easeOut, delay:6.4});
				TweenMax.to(qs[i], 3.2, {alpha:0.3, yoyo:true, repeat:-1, repeatDelay:0.0, ease:RoughEase.ease.config({ template:  Power0.easeNone, strength: 1, points: 20, taper: "none", randomize: true, clamp: true})})
			 }
		
		/*TweenMax.to(r.bg.l1, 3.2, {alpha:0.3, yoyo:true, repeat:-1, repeatDelay:0.0, ease:RoughEase.ease.config({ template:  Power0.easeNone, strength: 1, points: 20, taper: "none", randomize: true, clamp: true})}, 0.0)
		TweenMax.to(r.bg.l2, 3.5, {alpha:0.3, yoyo:true, repeat:-1, repeatDelay:0.0, ease:RoughEase.ease.config({ template:  Power0.easeNone, strength: 1, points: 20, taper: "none", randomize: true, clamp: true})}, 0.0)
		TweenMax.to(r.bg.l3, 3.0, {alpha:0.3, yoyo:true, repeat:-1, repeatDelay:0.0, ease:RoughEase.ease.config({ template:  Power0.easeNone, strength: 1, points: 20, taper: "none", randomize: true, clamp: true})}, 0.0)
		TweenMax.to(r.bg.l4, 3.4, {alpha:0.3, yoyo:true, repeat:-1, repeatDelay:0.0, ease:RoughEase.ease.config({ template:  Power0.easeNone, strength: 1, points: 20, taper: "none", randomize: true, clamp: true})}, 0.0)
		TweenMax.to(r.bg.l5, 3.8, {alpha:0.3, yoyo:true, repeat:-1, repeatDelay:0.0, ease:RoughEase.ease.config({ template:  Power0.easeNone, strength: 1, points: 20, taper: "none", randomize: true, clamp: true})}, 0.0)
		*/
		TweenMax.to(r.bg.l10, 4.2, {alpha:0, yoyo:true, repeat:-1, repeatDelay:0.0, ease:RoughEase.ease.config({ template:  Power0.easeNone, strength: 1, points: 20, taper: "none", randomize: true, clamp: true})})
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// blk
	this.blk = new lib.blk();
	this.blk.setTransform(0,0,1.854,1.854);

	this.timeline.addTween(cjs.Tween.get(this.blk).wait(1));

	// lab
	this.lab = new lib.label_1();
	this.lab.setTransform(-236,-363,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.lab).wait(1));

	// t1234
	this.t4 = new lib.Symbol4();
	this.t4.setTransform(-25.9,-51.9);

	this.t3 = new lib.Symbol3();
	this.t3.setTransform(-50.5,-137.2);

	this.t2 = new lib.Symbol2();
	this.t2.setTransform(252.8,-242.4);

	this.t1 = new lib.Symbol1();
	this.t1.setTransform(-141.7,-250.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.t1},{t:this.t2},{t:this.t3},{t:this.t4}]}).wait(1));

	// Layer 1
	this.btn = new lib.btn();
	this.btn.setTransform(226,63,1,1,0,0,0,-1.9,0);

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(1));

	// bg
	this.bg = new lib.bg_1();
	this.bg.setTransform(0,224,1,1,0,0,0,0,224);

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2617.9,-3823.8,4350.5,4745.2);


// stage content:
(lib.ngc_900x900_fullscreen = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var page_body = document.getElementsByTagName("body")[0];
		page_body.style.backgroundColor = "#000000";
		page_body.style.overflow = "hidden";
		page_body.style.position = "fixed";
		
		var page_canvas = document.getElementsByTagName("canvas")[0];
		stageWidth = page_canvas.width;
		stageHeight = page_canvas.height;
		
		var viewport = document.querySelector('meta[name=viewport]');
		var viewportContent = 'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=0';
		
		if (viewport === null) {
		 var head = document.getElementsByTagName('head')[0];
		 viewport = document.createElement('meta');
		 viewport.setAttribute('name', 'viewport');
		 head.appendChild(viewport);
		}
		
		viewport.setAttribute('content', viewportContent);
		
		function onResize() {
		 var widthToHeight = stageWidth / stageHeight;
		 var newWidth = window.innerWidth;
		 var newHeight = window.innerHeight;
		 var newWidthToHeight = newWidth / newHeight;
		 //
		 if (newWidthToHeight < widthToHeight) {
		 newWidth = newHeight * widthToHeight;
		 page_canvas.style.height = newHeight + "px";
		 page_canvas.style.width = newWidth + "px";
		 } else {
		 newHeight = newWidth / widthToHeight;
		 page_canvas.style.height = newHeight + "px";
		 page_canvas.style.width = newWidth + "px";
		 }
		 scale = newWidthToHeight / widthToHeight;
		 stage.width = newWidth;
		 stage.height = newHeight;
		 page_canvas.style.marginTop = ((window.innerHeight - newHeight) / 2) + "px";
		 page_canvas.style.marginLeft = ((window.innerWidth - newWidth) / 2) + "px";
		}
		
		window.onresize = function () {
		 onResize();
		}
		
		onResize();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// movie
	this.rolik = new lib.content();
	this.rolik.setTransform(450,450,0.55,0.55);

	this.timeline.addTween(cjs.Tween.get(this.rolik).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-539.8,-1203,2392.7,2609.8);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;