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

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2617.9,-3823.8,4103.7,4273.8);


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

	// bg_pattern
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EhGTBGUMAAAiMnMCMnAAAMAAACMng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2617.9,-3823.8,4103.7,4273.8);


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
		 if (newWidthToHeight > widthToHeight) {
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

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhGSBGUMAAAiMnMCMlAAAMAAACMng");
	mask.setTransform(450,450);

	// movie
	this.rolik = new lib.content();
	this.rolik.setTransform(450,450);

	this.rolik.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.rolik).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(450,450,900,900.1);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;