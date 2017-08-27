(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 300,
	height: 600,
	fps: 30,
	color: "#FFFFFF",
	webfonts: {},
	manifest: [
		{src:"images/bg.jpg", id:"bg"},
		{src:"images/label.png", id:"label"},
		{src:"images/packs.png", id:"packs"},
		{src:"images/packshot.jpg", id:"packshot"},
		{src:"images/pic1.jpg", id:"pic1"},
		{src:"images/pic2.jpg", id:"pic2"},
		{src:"images/pic3.jpg", id:"pic3"},
		{src:"images/sign.png", id:"sign"},
		{src:"images/texture.jpg", id:"texture"}
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
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.label = function() {
	this.initialize(img.label);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,156,54);


(lib.packs = function() {
	this.initialize(img.packs);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,391);


(lib.packshot = function() {
	this.initialize(img.packshot);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.pic1 = function() {
	this.initialize(img.pic1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.pic2 = function() {
	this.initialize(img.pic2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.pic3 = function() {
	this.initialize(img.pic3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.sign = function() {
	this.initialize(img.sign);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,83,75);


(lib.texture = function() {
	this.initialize(img.texture);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,111,175);


(lib.Symbol43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgyArIBVhjIAQAOIhVBkg");
	this.shape.setTransform(0,4.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgygqIAQgOIBVBjIgQAPg");
	this.shape_1.setTransform(0,-4.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.1,-10.3,10.3,20.6);


(lib.Symbol42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgsBDIAAiFIBZAAIAAAMIhLAAIAAAtIA0AAIAAAJIg0AAIAAA4IBLAAIAAALg");
	this.shape.setTransform(35.1,0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhBBDIAAiFIAOAAIAAB6IAuAAIAAh6IAMAAIAAB6IAuAAIAAh6IANAAIAACFg");
	this.shape_1.setTransform(20.3,0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgwBDIAAiFIAOAAIAAA5IAwAAQATAAAJAJQAHAKAAATQAAAmghAAgAgiA4IAyAAQASAAAAgbQAAgdgTAAIgxAAg");
	this.shape_2.setTransform(6,0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAoBDIAAh5Ig1AAQgDA7gWA+IgPAAQAYhHADg+IBQAAIAACFg");
	this.shape_3.setTransform(-8,0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgsA3QgPgPAAgoQAAgnAPgPQAOgPAeAAQAfAAAOAPQAPAPAAAnQAAAngPAQQgOAPgfAAQgfAAgNgPgAgiguQgKAMAAAiQAAAiAKAMQAJAMAZAAQAaAAAJgMQAKgMAAgiQAAgigKgMQgJgLgaAAQgZAAgJALg");
	this.shape_4.setTransform(-21.1,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgwBDIAAiFIBTAAIAAAMIhFAAIAAAtIAwAAQATAAAJAJQAHAKAAATQAAAmghAAgAgiA4IAyAAQASAAAAgbQAAgdgTAAIgxAAg");
	this.shape_5.setTransform(-34.7,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.6,-7,79.2,14.1);


(lib.Symbol41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgwBDIAAiFIAOAAIAAA5IAwAAQATAAAJAJQAHAKAAATQAAAmghAAgAgiA4IAyAAQASAAAAgbQAAgdgTAAIgxAAg");
	this.shape.setTransform(31,0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgFBDIAAh5IguAAIAAgMIBnAAIAAAMIguAAIAAB5g");
	this.shape_1.setTransform(18.4,0.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAtBDIgPgqIg/AAIgNAqIgOAAQAXhEAbhBIAWAAQAbBSAWAzgAAZAOQgQgtgHgYIgDAAIgbBFIA1AAIAAAAg");
	this.shape_2.setTransform(7.7,0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAjBDIAAhCIhFAAIAABCIgNAAIAAiFIANAAIAAA4IBFAAIAAg4IANAAIAACFg");
	this.shape_3.setTransform(-5.8,0.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgvBAIAEgLQARAFAWAAQAUAAAIgGQAJgHAAgPQAAgQgIgHQgIgGgRAAIgTAAIAAgKIATAAQAQAAAHgGQAGgFAAgOQAAgNgGgFQgIgFgTAAQgWAAgQAFIgEgMQAcgFAOAAQAYAAAMAJQAMAHAAARQAAAOgFAIQgHAJgPACQAeABAAAgQABAWgOAJQgNAJgZAAQgXAAgUgGg");
	this.shape_4.setTransform(-18.4,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgbBDQAMgQAJgRQgGgTgOgdQgOgfgMgVIAQAAQAZAyAMAkQAeg8AIgaIAPAAQgfBMgiA5g");
	this.shape_5.setTransform(-30.5,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.9,-7,71.8,14.1);


(lib.Symbol39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.packshot();
	this.instance.setTransform(-150,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-300,300,600);


(lib.Symbol38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgrA0QgPgQAAgkQAAglAPgOQAOgNAdAAQAfAAANANQAPAOAAAlQAAAkgPAQQgNANgfAAQgdAAgOgNgAgagjQgHAIAAAbQAAAbAHAJQAGAIAUAAQAUAAAHgIQAHgJAAgbQAAgbgHgIQgHgIgUAAQgUAAgGAIg");
	this.shape.setTransform(124.6,1.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAaA/IAAg4IgzAAIAAA4IgYAAIAAh9IAYAAIAAAxIAzAAIAAgxIAYAAIAAB9g");
	this.shape_1.setTransform(111,1.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAeA/IAAhaQgbAxgYApIgfAAIAAh9IAXAAIAABeQAfgyAWgsIAdAAIAAB9g");
	this.shape_2.setTransform(97.5,1.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAaA/IAAgpQgKAGgTAAQgWAAgKgJQgNgKAAgYIAAgvIAYAAIAAAuQAAAOAGADQAFAFANAAQAaAAAAgKIAAg6IAXAAIAAB9g");
	this.shape_3.setTransform(84,1.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AghA/QALgPALgRQgHgTgOgaQgNgegLgSIAcAAQASAiALAhQAWgsAIgXIAaAAQgZA/giA+g");
	this.shape_4.setTransform(73.1,1.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAbA/IAAhoIg0AAIAABoIgYAAIAAh9IBjAAIAAB9g");
	this.shape_5.setTransform(60.9,1.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAlA/IgMggIg1AAIgKAgIgYAAQAQg2AdhHIAjAAQAXBHAWA2gAASALIgRg0IgDAAIgUA0IAoAAIAAAAg");
	this.shape_6.setTransform(48.3,1.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAYA/QgNgjgLgNQgJgLgSgBIAAA8IgYAAIAAh9IAYAAIAAA9QAZgYAWglIAdAAQgfAsgPANQANAFAJAJQAMAPAPAng");
	this.shape_7.setTransform(37,1.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAeBOIAAhZQgbAxgYAoIgfAAIAAh8IAXAAIAABdQAfgyAWgrIAdAAIAAB8gAgZhNIAPAAQAAAGADACQACACAFAAQAGAAADgCQADgCAAgGIAOAAQAAAYgaAAQgZAAAAgYg");
	this.shape_8.setTransform(23.2,-0.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAsA/IAAh9IAYAAIAAB9gAhCA/IAAh9IAXAAIAAAtIArAAQAgAAAAAnQAAApggAAgAgrAqIAmAAQAMAAgBgUQAAgVgMAAIglAAg");
	this.shape_9.setTransform(7.9,1.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AArA/IAAhcQgOAdgVAzIgRAAQgWg4gLgYIAABcIgXAAIAAh9IAgAAQAUApAOAmQALgdAXgyIAfAAIAAB9g");
	this.shape_10.setTransform(-8.7,1.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAeA/IAAhaQgXApgcAxIgfAAIAAh9IAXAAIAABeQAdgwAZguIAcAAIAAB9g");
	this.shape_11.setTransform(-23.9,1.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgxA/IAAh9IBZAAIAAAVIhBAAIAAAeIApAAQAiAAAAAkQAAAmghAAgAgZAqIAmAAQAMAAgBgRQABgTgNAAIglAAg");
	this.shape_12.setTransform(-37,1.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgIA1QgMgOgBggIgcAAIAAA4IgYAAIAAh9IAYAAIAAAxIAcAAQABgdANgMQAJgKAXAAQAZAAALAMQAMAQAAAkQAAAjgMAQQgMAOgYAAQgXAAgKgMgAAGgjQgGAIAAAbQAAAZAGALQAFAIAOAAQAOAAAFgIQAFgKAAgaQAAgcgFgHQgFgIgOAAQgPAAgEAIg");
	this.shape_13.setTransform(-51.9,1.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAfA/IAAhoIglAAQgEA0gSA0IgZAAQAXhFACg4IBSAAIAAB9g");
	this.shape_14.setTransform(-68,1.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAeBOIAAhZQgbAxgYAoIgfAAIAAh8IAXAAIAABdQAdgwAZgtIAcAAIAAB8gAgZhNIAPAAQAAAKAKAAQAMAAAAgKIAOAAQAAAYgaAAQgZAAAAgYg");
	this.shape_15.setTransform(-81,-0.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgrA0QgPgQAAgkQAAglAPgOQANgNAeAAQAfAAAOANQAOAOAAAlQAAAkgOAQQgOANgfAAQgeAAgNgNgAgZgjQgIAIABAbQgBAbAIAJQAGAIATAAQAVAAAGgIQAHgJAAgbQAAgbgHgIQgGgIgVAAQgUAAgFAIg");
	this.shape_16.setTransform(-94.8,1.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AArA/IAAhcIgjBQIgQAAIgihQIAABcIgXAAIAAh9IAhAAQAVAuAMAhQAOgkAUgrIAfAAIAAB9g");
	this.shape_17.setTransform(-109.9,1.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AAHA/IACggIgXAAIgCAgIgVAAIACggIgXAAIACgSIAWAAIACgbIgXAAIACgSIAWAAIADgeIAUAAIgCAeIAXAAIACgeIAUAAIgBAeIAZAAIgCASIgYAAIgDAbIAZAAIgBASIgZAAIgCAggAgNANIAXAAIACgbIgXAAg");
	this.shape_18.setTransform(-124.6,1.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-130.5,-8,261,16);


(lib.Symbol37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhYBmQgdgeAAhIQAAhJAegdQAagaA9AAQA+AAAbAaQAdAdAABJQAABIgdAeQgbAbg+AAQg9AAgbgbgAg1hHQgOAQAAA3QAAA2AOARQANAQAoAAQApAAANgQQAOgRAAg2QAAg3gOgQQgMgPgqAAQgpAAgMAPg");
	this.shape.setTransform(101.3,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAwB8Qgyhhg5hYIAAC5IgvAAIAAj3IA/AAQA2BaAxBYIAAiyIAvAAIAAD3g");
	this.shape_1.setTransform(73.9,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgWB8IAAj3IAtAAIAAD3g");
	this.shape_2.setTransform(55.1,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhABlQgdgeAAhHQAAhKAdgcQAagaA8AAQAmAAAiAJIgKApQgXgIgeAAQgqAAgOAPQgRAQAAA3QAAA1ARASQAPAPApAAQAeAAAXgIIAKAqQgfAJgpAAQg7AAgbgcg");
	this.shape_3.setTransform(39.6,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhABlQgdgeAAhHQAAhKAdgcQAagaA8AAQAlAAAjAJIgLApQgXgIgeAAQgpAAgOAPQgRAQAAA3QAAA1ARASQAOAPApAAQAeAAAXgIIALAqQggAJgoAAQg7AAgbgcg");
	this.shape_4.setTransform(18.7,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhLBvQgcgTAAguIAAirIAvAAIAACkQAAAZANAKQANAJAeAAQAfAAANgJQANgKAAgZIAAikIAvAAIAACrQAAAugcATQgXAPg1AAQg0AAgXgPg");
	this.shape_5.setTransform(-5.8,0.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhiB8IAAj3ICAAAQBFAAAABVQAAAjgQAUQgSAZgiAAIhSAAIAABSgAgzACIBDAAQAfAAAAgoQAAgtgdAAIhFAAg");
	this.shape_6.setTransform(-30,0);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhiB8IAAj3IB/AAQBGAAAABVQAAAjgQAUQgTAZghAAIhSAAIAABSgAgzACIBEAAQAeAAAAgoQAAgtgdAAIhFAAg");
	this.shape_7.setTransform(-53.9,0);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("ABLB8IgYg+IhrAAIgUA+IgyAAQAoh8Azh7IBIAAQAsCKAtBtgAAlAVQgQgpgTg/IgIAAQgPAogXBAIBRAAIAAAAg");
	this.shape_8.setTransform(-79.7,0);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AhABlQgdgeAAhHQAAhKAdgcQAagaA8AAQAmAAAiAJIgKApQgXgIgeAAQgqAAgOAPQgRAQAAA3QAAA1ARASQAPAPApAAQAeAAAXgIIAKAqQgfAJgpAAQg7AAgbgcg");
	this.shape_9.setTransform(-103.8,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-113.2,-13,226.4,26);


(lib.Symbol36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhpB8IAAj3IBgAAQA7AAAbAaQAdAcAABFQAABFgdAcQgbAbg7AAgAg5BTIAqAAQApAAAPgPQAOgRAAgzQAAg0gOgQQgOgOgqAAIgqAAg");
	this.shape.setTransform(36.7,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhRB8IAAj3IAwAAIAADOIBzAAIAAApg");
	this.shape_1.setTransform(14.4,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhYBmQgdgeAAhIQAAhJAdgdQAbgaA9AAQA+AAAbAaQAdAdAABJQAABIgdAeQgbAbg+AAQg9AAgbgbgAg1hHQgOAQAAA3QAAA2AOARQANAQAoAAQAqAAAMgQQAOgRAAg2QAAg3gOgQQgMgPgqAAQgpAAgMAPg");
	this.shape_2.setTransform(-10.6,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhJBmQgdgfAAhHQABhJAfgdQAcgaA+AAQArAAAgAJIgJApQgKgDgUgCQgSgCgOAAQgrAAgOAOQgSARAAA2QAAA1ARASQAPAQApAAQAPAAARgEIAAhAIg2AAIAAgmIBmAAIAACKQggAKg5AAQg7AAgbgbg");
	this.shape_3.setTransform(-37,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47.3,-13,94.7,26);


(lib.Symbol35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhZCcIAAj3ICzAAIAAApIiEAAIAAA3IBeAAIAAAoIheAAIAABGICEAAIAAApgAgehtIAsguIAxAAIg5Aug");
	this.shape.setTransform(70.6,-0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhXB8IAAj3ICvAAIAAApIiAAAIAABGIBdAAIAAAnIhdAAIAABhg");
	this.shape_1.setTransform(49.3,2.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ABKB8IgYg+IhrAAIgTA+IgxAAQAnh7Azh8IBIAAQAuCOAsBpgAAlAWQgQgqgTg/IgIAAQgNAkgZBFIBRAAIAAAAg");
	this.shape_2.setTransform(24.6,2.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhABmQgdgfAAhHQAAhKAdgcQAagaA8AAQAnAAAhAJIgKApQgWgHgfAAQgqAAgOAOQgRARAAA2QAAA1ARASQAPAPApAAQAgAAAVgIIAKArQghAIgnAAQg7AAgbgbg");
	this.shape_3.setTransform(0.5,2.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhaB2IALgoQAcAJAmAAQAdAAANgHQAOgHAAgTQAAgPgLgIQgMgJgggDQgrgEgSgPQgUgOAAghQAAgrAbgUQAagSAzAAQArAAAiALIgLApQgZgJgpAAQgcAAgNAHQgNAHAAASQAAAPALAHQALAHAfADQAsAEAUARQAUAQAAAjQAAArgbASQgZARg2AAQguAAgggLg");
	this.shape_4.setTransform(-21.9,2.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhZB8IAAj3ICzAAIAAApIiEAAIAAA5IBeAAIAAAnIheAAIAABFICEAAIAAApg");
	this.shape_5.setTransform(-43.4,2.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAwB8Qgyhhg5hYIAAC5IguAAIAAj3IA+AAQA3BbAvBXIAAiyIAwAAIAAD3g");
	this.shape_6.setTransform(-69,2.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-79.7,-15.8,159.5,31.7);


(lib.Symbol34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AtKEeQhdAAhChBQhBhCgBheIAAh6QABhdBBhBQBChCBdgBIaUAAQBeABBCBCQBBBBAABdIAAB6QAABehBBCQhCBBheAAgAvajOQg9A9AABUIAAB6QAABVA9A8QA8A9BUgBIaUAAQBVABA8g9QA9g8gBhVIAAh6QABhUg9g9Qg8g8hVABI6UAAIAAAAQhUAAg8A7g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-106.8,-28.7,213.6,57.4);


(lib.Symbol30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AArBeIAAhIIgdAAQgJgBgFADQgGADgGAHQgGAHgGAPQgGAOgHAYIgpAAQAJgaAHgQQAHgPAHgJQAGgJAHgDQAHgEAIgBQgTgBgKgGQgLgGgFgLQgEgLAAgOQAAgPAEgMQAFgNAMgHQALgHAUAAIBgAAIAAC6gAgYg4QgFAIgBAOQABAOAFAIQAGAGAKABIAzAAIAAg6IgzAAQgLAAgFAHg");
	this.shape.setTransform(93.2,-1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAtBeIAAiGIgmBCIgnBEIgvAAIAAi6IAjAAIAACMIArhFIAmhHIArAAIAAC6g");
	this.shape_1.setTransform(75,-1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAoBeIAAhUIhOAAIAABUIgkAAIAAi6IAkAAIAABHIBOAAIAAhHIAjAAIAAC6g");
	this.shape_2.setTransform(55.7,-1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhDBeIAAi6ICHAAIAAAeIhjAAIAAArIBGAAIAAAdIhGAAIAAA1IBjAAIAAAfg");
	this.shape_3.setTransform(39.2,-1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ABGByIAAgpIiLAAIAAApIgfAAIgGhJIAdAAQAMgiAIglQAHgnACgsIB6AAIAACaIAhAAIgFBJgAgXgTQgFAegKAeIBMAAIAAh8Ig2AAQgCAggFAgg");
	this.shape_4.setTransform(20.2,1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ABZBeQgKgbgHgRQgJgRgIgKQgIgJgJgFQgKgEgLgBIAABaIghAAIAAhaQgMABgJAEQgKAFgIAJQgHAKgJARQgIARgJAbIgpAAQALggAJgTQAJgUAIgKQAHgKAIgEQAIgEAIgDQgIgGgQgVQgPgVgZgkIAqAAQANATAMARIAXAfIATAWIAAhZIAhAAIAABZIATgWIAWgfIAagkIAqAAQgZAkgQAVQgQAVgGAGQAHADAHAEQAIAEAIAKQAIAKAJAUQAJATALAgg");
	this.shape_5.setTransform(-2.5,-1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AA4BeIgJgXIgKgYIhQAAIgIAYIgGAXIgmAAIAQgtIARgxIASgvIASgtIA1AAIAQAvIASAwIASAwIARArgAAbAQIgOgnIgMgoIgFAAIgOAoIgPAnIA8AAIAAAAg");
	this.shape_6.setTransform(-23.5,-1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAuBeIAAicIg4AAQgCAYgEAbQgFAYgHAcQgGAbgJAaIgmAAQAJgcAIgfQAJgeAFgfQAGghABghIB9AAIAAC6g");
	this.shape_7.setTransform(-42.4,-1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgfBZQgTgJgKgWQgKgWABgkQgBgdAGgTQAFgTALgKQALgLARgFQARgEAUAAIASABIATACIARAEIgIAfIgMgDIgOgCIgOgBQgPAAgJACQgLADgGAGQgHAHgDANQgDANAAAVQAAAUADANQADANAHAHQAGAHALADQAJACAPAAIAOgBIAOgCQAHgBAFgCIAIAgIgRADIgTADIgSABQgcAAgUgJg");
	this.shape_8.setTransform(-58,-1.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AA4BeIgJgXIgJgYIhQAAIgIAYIgHAXIgmAAIAQgtIARgxIASgvIASgtIA2AAIAPAvIARAwIASAwIARArgAAcAQIgPgnIgLgoIgGAAIgPAoIgOAnIA9AAIAAAAg");
	this.shape_9.setTransform(-74.5,-1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAoBeIAAhUIhOAAIAABUIgkAAIAAi6IAkAAIAABHIBOAAIAAhHIAjAAIAAC6g");
	this.shape_10.setTransform(-92.8,-1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-104.7,-17.6,209.5,35.3);


(lib.Symbol29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgwBZQgVgJgJgWQgKgWAAgkQAAgmAKgVQAKgVAUgJQATgIAdAAQAeAAATAIQAUAJAKAVQAKAVAAAmQAAAkgKAWQgKAWgUAJQgTAJgeAAQgdAAgTgJgAAZA/QAKgDAGgHQAGgHACgNQACgNAAgUQAAgVgCgNQgCgNgGgHQgGgGgKgDQgKgCgPAAQgOAAgKACQgKADgGAGQgFAHgDANQgCANAAAVQAAAUACANQADANAFAHQAGAHAKADQAKADAOgBQAPABAKgDg");
	this.shape.setTransform(85.4,-1.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag+BeIAAi6IB9AAIAAAeIhZAAIAACcg");
	this.shape_1.setTransform(70,-1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgwBZQgVgJgJgWQgKgWAAgkQAAgmAKgVQAKgVAUgJQATgIAdAAQAeAAATAIQAUAJAKAVQAKAVAAAmQAAAkgKAWQgKAWgUAJQgTAJgeAAQgdAAgTgJgAAZA/QAKgDAGgHQAGgHACgNQACgNAAgUQAAgVgCgNQgCgNgGgHQgGgGgKgDQgKgCgPAAQgOAAgKACQgKADgGAGQgFAHgDANQgCANAAAVQAAAUACANQADANAFAHQAGAHAKADQAKADAOgBQAPABAKgDg");
	this.shape_2.setTransform(51.9,-1.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhKBeIAAi6ICGAAIAAAeIhiAAIAAAsIA/AAQAbABAMAPQAMAMgBAcQAAAUgFAMQgGANgLAFQgLAFgPABgAgmA/IA5AAQAKAAAEgGQAEgHAAgNQAAgNgFgIQgEgGgKgBIg4AAg");
	this.shape_3.setTransform(33.2,-1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgxBZQgUgJgJgWQgKgWAAgkQAAgmAKgVQAKgVATgJQAVgIAcAAQAdAAAUAIQAUAJAKAVQAKAVAAAmQAAAkgKAWQgKAWgUAJQgUAJgdAAQgcAAgVgJgAAZA/QAKgDAGgHQAFgHADgNQACgNAAgUQAAgVgCgNQgDgNgFgHQgGgGgKgDQgKgCgPAAQgOAAgKACQgKADgGAGQgGAHgCANQgCANAAAVQAAAUACANQACANAGAHQAGAHAKADQAKADAOgBQAPABAKgDg");
	this.shape_4.setTransform(13.9,-1.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgfBZQgTgJgKgWQgKgWABgkQgBgdAGgTQAFgTALgKQALgLARgFQARgEAUAAIASABIATACIARAEIgIAfIgMgDIgOgCIgOgBQgPAAgJACQgLADgGAGQgHAHgDANQgDANAAAVQAAAUADANQADANAHAHQAGAHALADQAJACAPAAIAOgBIAOgCQAHgBAFgCIAIAgIgRADIgTADIgSABQgcAAgUgJg");
	this.shape_5.setTransform(-3,-1.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgwBZQgUgJgKgWQgKgWAAgkQAAgmAKgVQAKgVAUgJQATgIAdAAQAdAAAUAIQAUAJAKAVQAKAVAAAmQAAAkgKAWQgKAWgUAJQgUAJgdAAQgdAAgTgJgAAZA/QAKgDAGgHQAGgHACgNQACgNAAgUQAAgVgCgNQgCgNgGgHQgGgGgKgDQgKgCgPAAQgOAAgKACQgKADgGAGQgGAHgCANQgCANAAAVQAAAUACANQACANAGAHQAGAHAKADQAKADAOgBQAPABAKgDg");
	this.shape_6.setTransform(-20.9,-1.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AArBeIAAhIIgdAAQgJgBgFADQgGADgGAHQgGAHgGAPQgGAOgHAYIgpAAQAJgaAHgQQAHgPAHgJQAGgJAHgDQAHgEAIgBQgTgBgKgGQgLgGgFgLQgEgLAAgOQAAgPAEgMQAFgNAMgHQALgHAUAAIBgAAIAAC6gAgYg4QgFAIgBAOQABAOAFAIQAGAGAKABIAzAAIAAg6IgzAAQgLAAgFAHg");
	this.shape_7.setTransform(-46.9,-1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AAuBeIAAicIg4AAQgCAYgEAbQgFAYgHAcQgGAbgJAaIgmAAQAJgcAIgfQAJgeAFgfQAGghABghIB9AAIAAC6g");
	this.shape_8.setTransform(-65.2,-1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("ABGByIAAgpIiLAAIAAApIgfAAIgGhJIAdAAQAMgiAIglQAHgnACgsIB6AAIAACaIAhAAIgFBJgAgXgTQgFAegKAeIBMAAIAAh8Ig2AAQgCAggFAgg");
	this.shape_9.setTransform(-84,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-96.9,-17.6,193.9,35.3);


(lib.Symbol28 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhDBeIAAi6ICHAAIAAAeIhjAAIAAArIBGAAIAAAdIhGAAIAAA1IBjAAIAAAfg");
	this.shape.setTransform(29.9,-1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgSBeIAAgZQgegBgRgIQgRgHgIgPQgGgQABgWQgBgWAGgPQAIgPARgIQARgIAegBIAAgXIAiAAIAAAXQAfABASAIQASAIAHAPQAHAPgBAWQABAWgHAQQgHAPgSAHQgSAIgfABIAAAZgAAQApQATgBAKgFQAKgDADgJQACgKAAgNQAAgOgCgIQgDgJgKgFQgKgEgTAAgAgtgjQgJAEgDAJQgEAJABANQgBANAEAKQADAIAJAEQAKAFARABIAAhRQgSABgJAEg");
	this.shape_1.setTransform(10.8,-1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgwBZQgUgJgKgWQgKgWAAgkQAAgmAKgVQAKgVAUgJQATgIAdAAQAdAAAUAIQAUAJAKAVQAKAVAAAmQAAAkgKAWQgKAWgUAJQgUAJgdAAQgdAAgTgJgAAZA/QAKgDAGgHQAGgHACgNQACgNAAgUQAAgVgCgNQgCgNgGgHQgGgGgKgDQgKgCgPAAQgOAAgKACQgKADgGAGQgGAHgCANQgCANAAAVQAAAUACANQACANAGAHQAGAHAKADQAKADAOgBQAPABAKgDg");
	this.shape_2.setTransform(-9.2,-1.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAkBeQgKgcgJgQQgJgRgIgKQgJgJgKgFQgKgEgMgBIAABaIgkAAIAAi6IAkAAIAABaIAUgVIAYggIAbglIAsAAQgbAkgRAVQgSAVgHAGQAIADAIAEQAIAEAJAKQAIAKAKAUQAKATAMAgg");
	this.shape_3.setTransform(-26.4,-1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38.6,-17.6,77.3,35.3);


(lib.Symbol27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AA4BeIgJgXIgKgYIhQAAIgIAYIgGAXIgmAAIAQgtIARgxIASgvIASgtIA1AAIAQAvIASAwIASAwIARArgAAbAQIgOgnIgMgoIgFAAIgOAoIgPAnIA8AAIAAAAg");
	this.shape.setTransform(36.8,-1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAkBeQgKgcgJgQQgJgRgIgKQgJgJgKgFQgKgEgMgBIAABaIgkAAIAAi6IAkAAIAABaIAUgVIAYggIAbglIAsAAQgbAkgRAVQgSAVgHAGQAIADAIAEQAIAEAJAKQAIAKAKAUQAKATAMAgg");
	this.shape_1.setTransform(20,-1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAoBeIAAhUIhOAAIAABUIgkAAIAAi6IAkAAIAABHIBOAAIAAhHIAjAAIAAC6g");
	this.shape_2.setTransform(0.2,-1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhDBeIAAi6ICHAAIAAAeIhjAAIAAArIBGAAIAAAdIhGAAIAAA1IBjAAIAAAfg");
	this.shape_3.setTransform(-17,-1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAoBeIAAicIhOAAIAACcIgkAAIAAi6ICVAAIAAC6g");
	this.shape_4.setTransform(-35.8,-1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-47.7,-17.6,95.5,35.3);


(lib.Symbol26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AArBeIAAhIIgdAAQgJgBgFADQgGADgGAHQgGAHgGAPQgGAOgHAYIgpAAQAJgaAHgQQAHgPAHgJQAGgJAHgDQAHgEAIgBQgTgBgKgGQgLgGgFgLQgEgLAAgOQAAgPAEgMQAFgNAMgHQALgHAUAAIBgAAIAAC6gAgYg4QgFAIgBAOQABAOAFAIQAGAGAKABIAzAAIAAg6IgzAAQgLAAgFAHg");
	this.shape.setTransform(69.3,-1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AA4BeIgJgXIgKgYIhQAAIgIAYIgGAXIgmAAIAPgtIASgxIARgvIASgtIA2AAIAQAvIASAwIASAwIARArgAAbAQIgNgnIgNgoIgFAAIgOAoIgPAnIA8AAIAAAAg");
	this.shape_1.setTransform(51.9,-1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAoBeIAAhUIhOAAIAABUIgkAAIAAi6IAkAAIAABHIBOAAIAAhHIAjAAIAAC6g");
	this.shape_2.setTransform(32.9,-1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAmBeIAAg9QgFAEgNACQgMACgNAAQgUABgQgGQgPgEgIgPQgJgOAAgZIAAhGIAkAAIAABDQAAAOADAJQAEAFAJADQAJACAMAAQASABAKgFQAKgEAAgHIAAhVIAkAAIAAC6g");
	this.shape_3.setTransform(13.4,-1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgwBZQgVgJgJgWQgKgWAAgkQAAgmAKgVQAKgVAUgJQATgIAdAAQAeAAATAIQAUAJAKAVQAKAVAAAmQAAAkgKAWQgKAWgUAJQgTAJgeAAQgdAAgTgJgAAZA/QAKgDAGgHQAGgHACgNQACgNAAgUQAAgVgCgNQgCgNgGgHQgGgGgKgDQgKgCgPAAQgOAAgKACQgKADgGAGQgFAHgDANQgCANAAAVQAAAUACANQADANAFAHQAGAHAKADQAKADAOgBQAPABAKgDg");
	this.shape_4.setTransform(-4.8,-1.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAuBeIAAicIg4AAQgCAYgEAbQgFAYgHAcQgGAbgJAaIgmAAQAJgcAIgfQAJgeAFgfQAGghABghIB9AAIAAC6g");
	this.shape_5.setTransform(-25.5,-1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgwBZQgVgJgJgWQgKgWAAgkQAAgmAKgVQAKgVAUgJQATgIAdAAQAeAAATAIQAUAJAKAVQAKAVAAAmQAAAkgKAWQgKAWgUAJQgTAJgeAAQgdAAgTgJgAAZA/QAKgDAGgHQAGgHACgNQACgNAAgUQAAgVgCgNQgCgNgGgHQgGgGgKgDQgKgCgPAAQgOAAgKACQgKADgGAGQgFAHgDANQgCANAAAVQAAAUACANQADANAFAHQAGAHAKADQAKADAOgBQAPABAKgDg");
	this.shape_6.setTransform(-44.7,-1.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("ABBBeIAAiLIgSApIgSAoIgQAoIgaAAIgQgoIgSgpIgRgoIAACLIgjAAIAAi6IAyAAIASAmIASAqIAOAlIAQgmIASgpIASgmIAuAAIAAC6g");
	this.shape_7.setTransform(-67.2,-1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-81.5,-17.6,163.1,35.3);


(lib.Symbol25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AArBeIAAhIIgdAAQgJgBgFADQgGADgGAHQgGAHgGAPQgGAOgHAYIgpAAQAJgaAHgQQAHgPAHgJQAGgJAHgDQAHgEAIgBQgTgBgKgGQgLgGgFgLQgEgLAAgOQAAgPAEgMQAFgNAMgHQALgHAUAAIBgAAIAAC6gAgYg4QgFAIgBAOQABAOAFAIQAGAGAKABIAzAAIAAg6IgzAAQgLAAgFAHg");
	this.shape.setTransform(77.2,-1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AA4BeIgJgXIgJgYIhRAAIgHAYIgHAXIglAAIAOgtIARgxIASgvIASgtIA2AAIAQAvIARAwIASAwIARArgAAbAQIgNgnIgMgoIgGAAIgPAoIgOAnIA8AAIAAAAg");
	this.shape_1.setTransform(59.7,-1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAoBeIAAhUIhOAAIAABUIgkAAIAAi6IAkAAIAABHIBOAAIAAhHIAjAAIAAC6g");
	this.shape_2.setTransform(40.7,-1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhrBeIAAi6IAkAAIAACZIA3AAIAAiZIAhAAIAACZIA3AAIAAiZIAjAAIAAC6g");
	this.shape_3.setTransform(18,-1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgwBZQgVgJgJgWQgKgWAAgkQAAgmAKgVQAKgVAUgJQATgIAdAAQAeAAATAIQAUAJAKAVQAKAVAAAmQAAAkgKAWQgKAWgUAJQgTAJgeAAQgdAAgTgJgAAZA/QAKgDAGgHQAGgHACgNQACgNAAgUQAAgVgCgNQgCgNgGgHQgGgGgKgDQgKgCgPAAQgOAAgKACQgKADgGAGQgFAHgDANQgCANAAAVQAAAUACANQADANAFAHQAGAHAKADQAKADAOgBQAPABAKgDg");
	this.shape_4.setTransform(-5.3,-1.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAkBeQgKgcgJgQQgJgRgIgKQgJgJgKgFQgKgEgMgBIAABaIgkAAIAAi6IAkAAIAABaIAUgVIAYggIAbglIAsAAQgbAkgRAVQgSAVgHAGQAIADAIAEQAIAEAJAKQAIAKAKAUQAKATAMAgg");
	this.shape_5.setTransform(-23.1,-1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgfBZQgTgJgKgWQgKgWABgkQgBgdAGgTQAFgTALgKQALgLARgFQARgEAUAAIASABIATACIARAEIgIAfIgMgDIgOgCIgOgBQgPAAgJACQgLADgGAGQgHAHgDANQgDANAAAVQAAAUADANQADANAHAHQAGAHALADQAJACAPAAIAOgBIAOgCQAHgBAFgCIAIAgIgRADIgTADIgSABQgcAAgUgJg");
	this.shape_6.setTransform(-40.5,-1.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgxBZQgTgJgKgWQgKgWAAgkQAAgmAKgVQAKgVATgJQAVgIAcAAQAdAAAUAIQAUAJAKAVQAKAVAAAmQAAAkgKAWQgKAWgUAJQgUAJgdAAQgcAAgVgJgAAZA/QAKgDAGgHQAFgHADgNQACgNAAgUQAAgVgCgNQgDgNgFgHQgGgGgKgDQgKgCgPAAQgOAAgKACQgKADgGAGQgGAHgCANQgCANAAAVQAAAUACANQACANAGAHQAGAHAKADQAKADAOgBQAPABAKgDg");
	this.shape_7.setTransform(-59.1,-1.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhKBeIAAi6IBhAAQATAAAMAIQALAIAFAOQAFAPAAATQAAARgFALQgGAOgLAJQgMAIgSABIg9AAIAAA+gAgmACIAzAAQALgBAGgFQAGgJAAgQQAAgRgGgIQgGgJgLAAIgzAAg");
	this.shape_8.setTransform(-77.5,-1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-89.4,-17.6,178.8,35.3);


(lib.Symbol24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgfBZQgTgJgKgWQgKgWABgkQgBgdAGgTQAFgTALgKQALgLARgFQARgEAUAAIASABIATACIARAEIgIAfIgMgDIgOgCIgOgBQgPAAgJACQgLADgGAGQgHAHgDANQgDANAAAVQAAAUADANQADANAHAHQAGAHALADQAJACAPAAIAOgBIAOgCQAHgBAFgCIAIAgIgRADIgTADIgSABQgcAAgUgJg");
	this.shape.setTransform(27.3,-1.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgyBeIAQgYIAQgYIgNggIgRgjQgJgVgKgSIgSggIAqAAIAQAeQAJARAHASIANAiIARghIAPgjIAMgfIAoAAQgJAXgLAZIgYAwIgZAwIgWAqg");
	this.shape_1.setTransform(10.5,-1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAkBeQgKgcgJgQQgJgRgIgKQgJgJgKgFQgKgEgMgBIAABaIgkAAIAAi6IAkAAIAABaIAUgVIAYggIAbglIAsAAQgbAkgRAVQgSAVgHAGQAIADAIAEQAIAEAJAKQAIAKAKAUQAKATAMAgg");
	this.shape_2.setTransform(-5.5,-1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAbBdIhlAAIAAi6IBjAAQATAAAKAGQAKAFAEAKQAEAKgBAOQABANgDAJQgDAJgJAGQgIAFgRACQASABAJAEQAKAGADAKQAEALgBAOQAAAbgMAMQgNANgWAAIgBgBgAgmA/IA5AAQAKAAAEgHQAEgGAAgNQAAgOgFgHQgEgHgKAAIg4AAgAgmgSIA3AAQAJAAAEgGQAEgGAAgLQAAgLgEgFQgEgGgJAAIg3AAg");
	this.shape_3.setTransform(-25,-1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-36.9,-17.6,73.9,35.3);


(lib.Symbol23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAtB1IAAiGIgmBDIgnBDIgvAAIAAi6IAjAAIAACMIArhHIAmhFIArAAIAAC6gAgchYQgKgJgBgTIAYAAQAAAJAEAEQAEADAHAAQAJAAAFgDQAEgEAAgJIAWAAQAAATgKAJQgLAJgTAAQgSAAgKgJg");
	this.shape.setTransform(62.6,-3.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAtBeIAAiGIgmBCIgnBEIgvAAIAAi6IAjAAIAACMIArhFIAmhHIArAAIAAC6g");
	this.shape_1.setTransform(41.7,-1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAkBeQgKgcgJgQQgJgRgIgKQgJgJgKgFQgKgEgMgBIAABaIgkAAIAAi6IAkAAIAABaIAUgVIAYggIAbglIAsAAQgbAkgRAVQgSAVgHAGQAIADAIAEQAIAEAJAKQAIAKAKAUQAKATAMAgg");
	this.shape_2.setTransform(23.6,-1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag+BeIAAi6IB9AAIAAAeIhZAAIAACcg");
	this.shape_3.setTransform(7.4,-1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AArBeIAAhIIgdAAQgJgBgFADQgGADgGAHQgGAHgGAPQgGAOgHAYIgpAAQAJgaAHgQQAHgPAHgJQAGgJAHgDQAHgEAIgBQgTgBgKgGQgLgGgFgLQgEgLAAgOQAAgPAEgMQAFgNAMgHQALgHAUAAIBgAAIAAC6gAgYg4QgFAIgBAOQABAOAFAIQAGAGAKABIAzAAIAAg6IgzAAQgLAAgFAHg");
	this.shape_4.setTransform(-11.7,-1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ABBBeIAAiLIgSApIgSAoIgRAoIgZAAIgRgoIgRgpIgRgoIAACLIgjAAIAAi6IAyAAIASAmIASAqIAOAlIARgmIASgpIASgmIAuAAIAAC6g");
	this.shape_5.setTransform(-32.8,-1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAtBeIAAiGIgmBCIgnBEIgvAAIAAi6IAjAAIAACMIArhFIAmhHIArAAIAAC6g");
	this.shape_6.setTransform(-62.8,-1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75.2,-17.6,150.6,35.3);


(lib.Symbol22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAtB1IAAiGIgmBDIgnBDIgvAAIAAi6IAjAAIAACMIArhHIAmhFIArAAIAAC6gAgchYQgKgJgBgTIAYAAQAAAJAEAEQAEADAHAAQAJAAAFgDQAEgEAAgJIAWAAQAAATgKAJQgLAJgTAAQgSAAgKgJg");
	this.shape.setTransform(57.3,-3.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABCBeIAAi6IAkAAIAAC6gAhlBeIAAi6IAkAAIAABCIBBAAQARABALAHQALAJAFALQAFAOAAARQAAAdgMAQQgMAPgZABgAhBA/IA5AAQAJABAFgIQAEgIAAgPQABgQgGgHQgFgIgIAAIg5AAg");
	this.shape_1.setTransform(34.2,-1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgRBeIAAicIg/AAIAAgeIChAAIAAAeIhAAAIAACcg");
	this.shape_2.setTransform(13.4,-1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AA4BeIgJgXIgJgYIhQAAIgIAYIgHAXIgmAAIAQgtIARgxIASgvIASgtIA2AAIAPAvIARAwIASAwIARArgAAcAQIgPgnIgLgoIgGAAIgPAoIgOAnIA9AAIAAAAg");
	this.shape_3.setTransform(-3.9,-1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag+BeIAAi6IB9AAIAAAeIhZAAIAACcg");
	this.shape_4.setTransform(-19.2,-1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgxBZQgUgJgJgWQgKgWAAgkQAAgmAKgVQAKgVATgJQAVgIAcAAQAdAAAUAIQAUAJAKAVQAKAVAAAmQAAAkgKAWQgKAWgUAJQgUAJgdAAQgcAAgVgJgAAZA/QAKgDAGgHQAFgHADgNQACgNAAgUQAAgVgCgNQgDgNgFgHQgGgGgKgDQgKgCgPAAQgOAAgKACQgKADgGAGQgGAHgCANQgCANAAAVQAAAUACANQACANAGAHQAGAHAKADQAKADAOgBQAPABAKgDg");
	this.shape_5.setTransform(-38.3,-1.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhKBeIAAi6ICGAAIAAAeIhiAAIAAAsIA/AAQAbABAMAPQAMAMgBAcQAAAUgFAMQgGANgLAFQgLAFgPABgAgmA/IA5AAQAKAAAEgGQAEgHAAgNQAAgNgFgIQgEgGgKgBIg4AAg");
	this.shape_6.setTransform(-58,-1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-69.9,-17.6,139.9,35.3);


(lib.Symbol17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgAxAyAMAAAhj/IBjAAMAAABj/g");

	// Layer 2
	this.instance = new lib.texture();
	this.instance.setTransform(-55.5,-308.4,1,3.525);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,-308.4,10,616.8);


(lib.Symbol15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgAxAyAMAAAhj/IBjAAMAAABj/g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,-320,10,640);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.pic1();
	this.instance.setTransform(-150,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-300,300,600);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.pic2();
	this.instance.setTransform(-150,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-300,300,600);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.pic3();
	this.instance.setTransform(-150,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-300,300,600);


(lib.Symbol9copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AAqJOIAAtjIlJD4IAAkdIFzkTIDMAAIAASbg");

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","rgba(255,255,255,0)"],[0,1],0,-41.5,0,41.5).s().p("AnQHRIAAuhIOhAAIAAOhg");
	this.shape.setTransform(-0.4,-50.5);

	this.shape.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.instance = new lib.texture();
	this.instance.setTransform(-48,-75);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28.8,-59,57.7,118.1);


(lib.Symbol9copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AmGJSIAAigIGVmAQBVhTAYg0QAXg0AAhOQAAhYgqgqQgpgtiOAAQiBAAiyA6IAAjHQCCg+DSAAQEAAABoBpQAvAvANA2QANA3AABkQAACCgnBOQgnBLhuBrIj9DsIG8AAIAADIg");

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","rgba(255,255,255,0)"],[0,1],0,-41.5,0,41.5).s().p("AnQHRIAAuhIOhAAIAAOhg");
	this.shape.setTransform(-0.4,-50.5);

	this.shape.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.instance = new lib.texture();
	this.instance.setTransform(-48,-75);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-39.2,-59.4,78.4,118.9);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AmFIUIAAjAQCPAuCnAAQCeAAAvguQAkgkAAhMQAAg+gjgiQgcgdhagLQhbgLjSAAIAAiiIFNkzIm7AAIAAjFIMGAAIAACdIldFMQDfAPBIBIQBVBUAACZQAABagSA7QgVA9gxAzQhhBhkkAAQjLAAhwg2g");

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFFFF","rgba(255,255,255,0)"],[0,1],0,-41.5,0,41.5).s().p("AnQHRIAAuhIOhAAIAAOhg");
	this.shape.setTransform(-0.4,-50.5);

	this.shape.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 1
	this.instance = new lib.texture();
	this.instance.setTransform(-48,-75);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40.3,-58.6,80.7,117.4);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AtyNzQlulugBoFQABoEFuluQFuluIEgBQIFABFuFuQFuFuABIEQgBIFluFuQluFuoFABQoEgBlulug");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-125,-125,250,250);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F8CB60").s().p("AgJAdQAKgMACgSQAEgVAQgBIAWAAIgFAcQgDAOgKAKQgMAMgdgBIgMABQAJgEAIgIgAgrAYIAEgcQAEgOAJgJQALgNAeAAIAMAAQgHADgJAIQgLANgCARQgEAXgQAAgABXADIAAgFIKLAAIAAAFgArhADIAAgFIKeAAIAAAFg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73.8,-4.1,147.7,8.2);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ALpBCQgYgbAAgnIAAAAQAAglAYgbQAZgcAmAAQAnAAAZAcQAYAbAAAlIAAAAQAAAmgYAbQgaAcgmAAQgnAAgYgbgAL3gzQgSAVAAAeIAAAAQAAAfASAWQAUAWAdAAQAeAAATgWQATgWAAgfIAAAAQAAgegTgVQgUgWgdAAQgeAAgTAWgAELBCQgZgaAAgoIAAAAQAAglAZgbQAZgcAlAAQAnAAAdAdIgNAOQgZgYgeAAQgdAAgSAVQgUAWAAAeIAAAAQAAAfAUAWQASAWAdAAQAeAAAagaIANANQgPAPgPAIQgRAIgWAAQglAAgZgbgABLBCQgZgaAAgoIAAAAQAAglAZgbQAZgcAmAAQAmAAAdAdIgOAOQgXgYgfAAQgcAAgTAVQgUAWAAAeIAAAAQAAAfAUAWQATAWAcAAQARAAAOgHQALgGAOgNIANANQgPAPgOAIQgSAIgWAAQglAAgZgbgAh9BJQgUgVAAgmIAAhnIAUAAIAABmQAAAdAOARQANAQAZAAQAYAAAPgQQAOgQAAgdIAAhnIATAAIAABmQAAAngUAVQgTAUghAAQghAAgTgUgAtmBCQgZgaAAgoIAAAAQAAglAYgbQAZgcAmAAQAWAAARAIQAOAHAOAOIgNAOQgZgYgeAAQgcAAgTAVQgTAWAAAeIAAAAQAAAfATAWQATAWAcAAQAfAAAagaIAMANQgdAfgoAAQglAAgYgbgAKTBaIhwiTIAACTIgTAAIAAizIASAAIBtCPIAAiPIATAAIAACzgAG7BaIAAizIAUAAIAACzgAk8BaIAAizIBAAAQAdAAASAPQASAQAAAbIAAAAQAAAcgUAOQgTAPgdAAIgqAAIAABAgAkpAIIAqAAQAWAAANgJQANgMAAgRIAAgBQAAgTgNgKQgMgKgVAAIgsAAgAnwBaIAAizIBAAAQAeAAARAPQASAQAAAbIAAAAQAAAcgUAOQgTAPgdAAIgqAAIAABAgAndAIIArAAQAVAAANgJQANgMAAgRIAAgBQAAgTgMgKQgMgKgWAAIgsAAgAoxBaIgUgvIheAAIgVAvIgUAAIBPi0IASAAIBPC0gAqcAYIBPAAIgnhbg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-89.6,-9.4,179.4,18.8);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F8CB60").s().p("AjIBeQglgmAAg4QAAg2AmglQAmgnA3AAQA3AAAlAlQAjAmAAA3QAAA2gkAmQgmAng2AAQg3AAgmglgAithEQgaAbAAApQAAAoAbAcQAbAdAnAAQAnAAAagcQAagcAAgpQAAgngbgcQgbgdgmAAQgoAAgaAcgAncBeQgkgkAAg6QAAg2AlglQAlgnA2AAQAdAAAWAIQAWAIAWASIADADIgYAbIgEgCQgegcgpAAQgmAAgZAcQgaAcAAAoQAAArAZAbQAaAbAqAAQAlAAAdgWIAAg3IhLAAIAAggIBvAAIAABnIgBAAQgsAog7AAQg5AAgkglgAEfB/IAAj9IBbAAQA6AAAmAkQAnAkAAA2QAAA2gnAlQgmAkg6AAgAFFBcIA1AAQArAAAbgaQAbgaAAgoQAAgogbgaQgbgZgrAAIg1AAgABGB/IAAj9IAmAAIAADaICKAAIAAAjg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-51.3,-13.1,102.7,26.3);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DF0024").s().p("AhQBJQATgGASgTQAagdAIgqQAFgfAOgLQAIgHAPAAIAwAAIgJBCQgIAegWAWQgMAMgWAIQgQAHgQAAg");
	this.shape.setTransform(65.8,-14.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AJACQQgTgUAAg7IAAiPICtAAIAAAvIhtAAIAAAxIBfAAIAAAuIhfAAQAAAjAIAKQAFAJANADQAJACAUAAQAcAAAbgIIAAArQgXALgmAAQhEAAgagZgAF2CiQgUgJAAgYIAAjPICuAAIAAAvIhtAAIAAAxIBjAAIAAAuIhjAAIAABpQgfAAgOgHgAg+CPQgZgZAAhMQAAhMAZgYQAZgaBAABQAggBAVAKIAAAsQgVgHgbgBQggAAgIANQgKAQAAAzQAAA1AKAPQAIANAgAAQAeAAAYgIIgLAtQgRAJgfAAQhBAAgYgagAkjCcIAAgtQAsAMAfAAQAYAAAJgHQAEgEAAgLQABgMgFgDQgHgFgrgPQgmgNgNgMQgPgQACgkQAAgkAQgOQAYgXA2AAQAzAAAVAOIAAAsQgngMgeAAQgYAAgJAHQgFADgBAMQAAALAGAEQAHADAtAPQAoAOALANQASAUgDAjQgCAkgTAOQgaAUg1AAQg0AAgYgNgAngCQQgUgTAAg8IAAiPICuAAIAAAvIhuAAIAAAxIBeAAIAAAuIheAAQAAAjAIAKQAFAJAMADQAJACAWAAQAdAAAZgIIAAArQgVALgnAAQhFAAgZgZgApoCeQgOgLgQgdIhlizIAADhIg6AAIAAlIQAIgEAYAAQAdAAAPAMQAOAJAQAdIBnCyIAAjfIRlAAQAAAVgdAOQgXALgTgBIvlAAIAAEaQgJAFgYAAQgcAAgQgLgAEECkIgJgvIhUAAIgIAvIg6AAQAiikAshOIBJAAQAVApAWBDQAUBCAPBEgACwBNIBCAAQgQg6gSglQgUAugMAxgAMACXQgGgFAAgJQAAgKAGgFQAHgHAJAAQAJAAAHAHQAGAFAAAKQAAAJgGAFQgHAHgJAAQgJAAgHgHgAMEB8QgFAGAAAHQAAAHAFAFQAFAFAHAAQAIAAAEgFQAFgFAAgHQAAgHgFgGQgEgEgJAAQgGAAgFAEgAMVCUIgBgFQAAgDgFAAIgCAAIAAAIIgGAAIAAgWIAIAAQAGAAACACQADAAAAAEQAAAEgFABIAAABQACAAABAFIACAFgAMNCIIACAAQAGAAAAgDQgBgEgFABIgCAAg");
	this.shape_1.setTransform(0,4.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80.6,-21.7,161.3,43.5);


(lib.packs_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.packs();
	this.instance.setTransform(-150,-195);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-195,300,391);


(lib.link = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Egx/AfPMAAAg+dMBj/AAAMAAAA+dg");
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.label_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.label();
	this.instance.setTransform(-78,-27);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-78,-27,156,54);


(lib.blk = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CD9848").s().p("AyufPMAAAg+dMAldAAAMAAAA+dg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120,-200,240,400);


(lib.Symbol40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.l1 = new lib.Symbol4();
	this.l1.setTransform(0,24.8);

	this.t3 = new lib.Symbol3();
	this.t3.setTransform(0,49.7);

	this.t2 = new lib.Symbol2();
	this.t2.setTransform(0,2.3);

	this.t1 = new lib.Symbol1();
	this.t1.setTransform(2.2,-28.2,1,1,0,0,0,0,9.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.t1},{t:this.t2},{t:this.t3},{t:this.l1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-89.6,-59,179.4,118.1);


(lib.Symbol32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.b3 = new lib.Symbol43();
	this.b3.setTransform(85.3,-0.6);

	this.b2 = new lib.Symbol42();
	this.b2.setTransform(30.9,0.4);

	this.b1 = new lib.Symbol41();
	this.b1.setTransform(-53.1,0.4);

	this.instance = new lib.Symbol34();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.b1},{t:this.b2},{t:this.b3}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-106.8,-28.7,213.6,57.4);


(lib.Symbol31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.mc = new lib.Symbol39();

	this.timeline.addTween(cjs.Tween.get(this.mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-300,300,600);


(lib.Symbol21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.t3 = new lib.Symbol24();
	this.t3.setTransform(0.1,30.3);

	this.t2 = new lib.Symbol23();
	this.t2.setTransform(0.1,0);

	this.t1 = new lib.Symbol22();
	this.t1.setTransform(0.1,-30.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.t1},{t:this.t2},{t:this.t3}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75.2,-47.9,150.6,95.9);


(lib.Symbol20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.t3 = new lib.Symbol27();
	this.t3.setTransform(0.1,30.3);

	this.t2 = new lib.Symbol26();
	this.t2.setTransform(0.1,0);

	this.t1 = new lib.Symbol25();
	this.t1.setTransform(0.1,-30.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.t1},{t:this.t2},{t:this.t3}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-89.3,-47.9,178.8,95.9);


(lib.Symbol19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1 copy
	this.t3 = new lib.Symbol30();
	this.t3.setTransform(0.1,30.3);

	this.t2 = new lib.Symbol29();
	this.t2.setTransform(0.1,0);

	this.t1 = new lib.Symbol28();
	this.t1.setTransform(0.1,-30.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.t1},{t:this.t2},{t:this.t3}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-104.6,-47.9,209.5,95.9);


(lib.Symbol18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol15();
	this.instance.setTransform(0,0,26.56,1,0,0,0,5,0);
	this.instance.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-265.6,-320,265.6,640);


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.sign();
	this.instance.setTransform(-47,-23);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.instance_1 = new lib.Symbol17();
	this.instance_1.setTransform(0,0,1,1.053,0,18.3,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer 2
	this.mc = new lib.Symbol18();
	this.mc.setTransform(0,0,1,1.053,0,18.3,0);

	this.timeline.addTween(cjs.Tween.get(this.mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-371.2,-320,528.6,640);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.mc = new lib.Symbol10();

	this.timeline.addTween(cjs.Tween.get(this.mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-300,300,600);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.mc = new lib.Symbol11();

	this.timeline.addTween(cjs.Tween.get(this.mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-300,300,600);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.mc = new lib.Symbol12();

	this.timeline.addTween(cjs.Tween.get(this.mc).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-300,300,600);


(lib.sc3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.hash = new lib.Symbol38();
	this.hash.setTransform(-0.5,-66.5);

	this.t3 = new lib.Symbol37();
	this.t3.setTransform(-18.6,-115.7);

	this.t2 = new lib.Symbol36();
	this.t2.setTransform(88.5,-152.9);

	this.t1 = new lib.Symbol35();
	this.t1.setTransform(-50.8,-155.8);

	this.lab = new lib.label_1();
	this.lab.setTransform(-53,-230);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.lab},{t:this.t1},{t:this.t2},{t:this.t3},{t:this.hash}]}).wait(1));

	// btn
	this.btn = new lib.Symbol32();
	this.btn.setTransform(0,221.9);

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(1));

	// bg
	this.bg = new lib.Symbol31();

	this.timeline.addTween(cjs.Tween.get(this.bg).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-300,300,600);


(lib.sc2 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// odin
	this.odin = new lib.Symbol9copy2();
	this.odin.setTransform(-77,-195);

	this.timeline.addTween(cjs.Tween.get(this.odin).wait(1));

	// dva
	this.dva = new lib.Symbol9copy();
	this.dva.setTransform(-77,-195);

	this.timeline.addTween(cjs.Tween.get(this.dva).wait(1));

	// tri
	this.tri = new lib.Symbol9();
	this.tri.setTransform(-77,-195);

	this.timeline.addTween(cjs.Tween.get(this.tri).wait(1));

	// t1
	this.t1 = new lib.Symbol21();
	this.t1.setTransform(18.1,226.1,1.2,1.2);

	this.timeline.addTween(cjs.Tween.get(this.t1).wait(1));

	// t2
	this.t2 = new lib.Symbol20();
	this.t2.setTransform(18.1,226.1,1.2,1.2);

	this.timeline.addTween(cjs.Tween.get(this.t2).wait(1));

	// t3
	this.t3 = new lib.Symbol19();
	this.t3.setTransform(18.1,226.1,1.2,1.2);

	this.timeline.addTween(cjs.Tween.get(this.t3).wait(1));

	// grad
	this.grad = new lib.Symbol13();
	this.grad.setTransform(-40,0);

	this.timeline.addTween(cjs.Tween.get(this.grad).wait(1));

	// pic3.jpg
	this.pic3 = new lib.Symbol8();

	this.timeline.addTween(cjs.Tween.get(this.pic3).wait(1));

	// pic2.jpg
	this.pic2 = new lib.Symbol7();

	this.timeline.addTween(cjs.Tween.get(this.pic2).wait(1));

	// pic1.jpg
	this.pic1 = new lib.Symbol6();

	this.timeline.addTween(cjs.Tween.get(this.pic1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-411.2,-320,561.3,640);


(lib.sc1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// packs
	this.packs = new lib.packs_1();
	this.packs.setTransform(0,80);

	this.timeline.addTween(cjs.Tween.get(this.packs).wait(1));

	// t1
	this.t1 = new lib.Symbol40();
	this.t1.setTransform(0,-112.5);

	this.timeline.addTween(cjs.Tween.get(this.t1).wait(1));

	// circ
	this.circ = new lib.Symbol5();
	this.circ.setTransform(0,-95);

	this.timeline.addTween(cjs.Tween.get(this.circ).wait(1));

	// Layer 1
	this.instance = new lib.bg();
	this.instance.setTransform(-150,-300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-195,-332,404,684);


(lib.content = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		var r = this;
		var count = 1;
		var repeat = 200;
		var time2 = 2;
			time3 = time2 + 2.2;
			time4 = time3 + 1.5;
			time5 = time4 + 1.5;
		
		/*TweenMax.to(this.tree.d2.mc, 5.5, {x:"+=4", yoyo:true, repeat:-1, repeatDelay:0.0, ease:Sine.easeInOut}, 0.0)
		TweenMax.to(this.tree.d2.mc, 4.0, {y:"-=4", yoyo:true, repeat:-1, repeatDelay:0.0, ease:Sine.easeInOut}, 0.0)
		TweenMax.to(this.tree.d1.mc, 4.3, {x:"-=4", yoyo:true, repeat:-1, repeatDelay:0.0, ease:Sine.easeInOut}, 0.0)
		TweenMax.to(this.tree.d1.mc, 5.6, {y:"-=4", yoyo:true, repeat:-1, repeatDelay:0.0, ease:Sine.easeInOut}, 0.0)*/
		
		
		var tl = new TimelineMax();
		tl.to(r.blk, 0.8, {alpha:0, ease:Power0.easeNone}, 0.0)
		  .from(r.sc1.packs, 1.0, {y:"-=200", alpha:0, ease:Expo.easeOut}, 0.2)
		  .from(r.sc1.circ, 1.2, {scaleX:0, scaleY:0, ease:Expo.easeOut}, 0.2)
		  .from(r.sc1.t1, 1.2, {scaleX:0, scaleY:0, ease:Expo.easeOut}, 0.4)
		  
		  //2
		  .to(r.sc1.circ, 1.0, {scaleX:2.5, scaleY:2.5, ease:Expo.easeIn}, time2-0.2)
		  .from(r.sc2.pic1, 1.5, {alpha:0, ease:Cubic.easeInOut}, time2)
		  
		  .from(r.sc2.grad, 0.8, {x:"-=400", ease:Expo.easeOut}, time2+0.8)
		  .from(r.sc2.tri, 0.8, {scaleX:0, scaleY:0, ease:Expo.easeOut}, time2+0.8)
		  
		  .staggerFrom([r.sc2.t1.t1, r.sc2.t1.t2, r.sc2.t1.t3], 0.5, {cycle:{x:['+=20', '-=20']}, alpha:0, ease:Expo.easeOut}, 0.04, time2+1.1)
		  
		  
		  //3
		  .to(r.sc2.tri, 0.5, {scaleX:1.2, scaleY:1.2, alpha:0, ease:Back.easeIn}, time3-0.3)
		  .staggerTo([r.sc2.t1.t1, r.sc2.t1.t2, r.sc2.t1.t3], 0.5, {cycle:{x:['+=20', '-=20']}, alpha:0, ease:Expo.easeIn}, 0.04, time3-0.3)
		  .from(r.sc2.pic2, 1.3, {alpha:0, ease:Cubic.easeInOut}, time3)
		  .from(r.sc2.dva, 0.5, {scaleX:0, scaleY:0, ease:Expo.easeOut}, time3+0.4)
		  .staggerFrom([r.sc2.t2.t1, r.sc2.t2.t2, r.sc2.t2.t3], 0.5, {cycle:{x:['+=20', '-=20']}, alpha:0, ease:Expo.easeOut}, 0.04, time3+0.4)
		  
		  //4
		  .to(r.sc2.dva, 0.5, {scaleX:1.2, scaleY:1.2, alpha:0, ease:Back.easeIn}, time4-0.3)
		  .staggerTo([r.sc2.t2.t1, r.sc2.t2.t2, r.sc2.t2.t3], 0.4, {cycle:{x:['+=20', '-=20']}, alpha:0, ease:Expo.easeIn}, 0.04, time4-0.3)
		  .from(r.sc2.pic3, 1.3, {alpha:0, ease:Cubic.easeInOut}, time4)
		  .from(r.sc2.odin, 0.5, {scaleX:0, scaleY:0, ease:Expo.easeOut}, time4+0.4)
		  .staggerFrom([r.sc2.t3.t1, r.sc2.t3.t2, r.sc2.t3.t3], 0.5, {cycle:{x:['+=20', '-=20']}, alpha:0, ease:Expo.easeOut}, 0.04, time4+0.4)
		  
		  
		  //5
		  .to(r.sc2.odin, 0.5, {scaleX:1.2, scaleY:1.2, alpha:0, ease:Back.easeIn}, time5-0.3)
		  .staggerTo([r.sc2.t3.t1, r.sc2.t3.t2, r.sc2.t3.t3], 0.4, {cycle:{x:['+=20', '-=20']}, alpha:0, ease:Expo.easeIn}, 0.04, time5-0.3)
		  .to(r.sc2.grad, 0.5, {x:"-=400", ease:Expo.easeIn}, time5-0.0)
		  .from(r.sc3.bg, 1.0, {alpha:0, ease:Cubic.easeOut}, time5+0.6)
		  .from(r.sc3.lab, 0.8, {y:"-=200", ease:Expo.easeOut}, time5+0.6)
		  .staggerFrom([r.sc3.t2, r.sc3.t1, r.sc3.t3, r.sc3.hash, r.sc3.btn], 0.9, {x:"-=300", ease:Expo.easeOut}, 0.03, time5+0.8)
		  //.from(r.sc3.hash, 1.2, {x:"-=300", alpha:0, ease:Expo.easeOut}, time5+1.0)
		  .staggerFrom([r.sc3.btn.b1, r.sc3.btn.b2, r.sc3.btn.b3], 0.5, {y:"+=20", alpha:0, ease:Expo.easeOut}, 0.04, time5+1.5)
		  
		  .call(replay)
		  .to(this.blk, 0.5, {alpha:1, ease:Power0.easeNone, onComplete:restart}, time5+3.5)
		  ;
		
		tl.timeScale( 1.3 );
		
		
		function replay() {
		  if (count == repeat){
			  tl.kill();
			  TweenMax.killAll();
			  createjs.Ticker.setFPS(1);
		  } else {
		  if (count != repeat) {
			  count++;
			  tl.play();
		  }
		  }
		}
		
		function restart() {
			tl.play(0);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1,3,true).p("EgXbgu3MAu3AAAMAAABdvMgu3AAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// blk
	this.blk = new lib.blk();
	this.blk.setTransform(0,0,1.25,1.5);

	this.timeline.addTween(cjs.Tween.get(this.blk).wait(1));

	// sc3
	this.sc3 = new lib.sc3();

	this.timeline.addTween(cjs.Tween.get(this.sc3).wait(1));

	// sc2
	this.sc2 = new lib.sc2();

	this.timeline.addTween(cjs.Tween.get(this.sc2).wait(1));

	// sc1
	this.sc1 = new lib.sc1();

	this.timeline.addTween(cjs.Tween.get(this.sc1).wait(1));

	// bg
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C5A14D").s().p("EgXbAu3MAAAhdtMAu3AAAMAAABdtg");

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-411.2,-320,562.3,640);


// stage content:
(lib.ngc_300x600 = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.btnMain.addEventListener("click", fl_ClickToGoToWebPage);
		
		function fl_ClickToGoToWebPage() {
			//console.log("hit");
			admixAPIGlobal.click();
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// link
	this.btnMain = new lib.link();
	this.btnMain.setTransform(150,300,0.469,1.5);
	new cjs.ButtonHelper(this.btnMain, 0, 1, 2, false, new lib.link(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btnMain).wait(1));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgXaAu3MAAAhdtMAu1AAAMAAABdtg");
	mask.setTransform(150,300);

	// movie
	this.rolik = new lib.content();
	this.rolik.setTransform(150,300);

	this.rolik.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.rolik).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(150,300,300,600);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;