(function ($, win, doc) {

$(function () {
  var rAF = win.requestAnimationFrame || win.webkitRequestAnimationFrame || function (cb) { win.setTimeout(cb, 16); };

  function Gift () {
    return this instanceof Gift
      ? this.init.call(this, arguments)
      : new Gift(arguments);
  }

  Gift.prototype = {
    contructor: Gift,

    init: function () {
      var self = this;

      self.heart();
    },

    heart: function () {
      var self = this,
        $heart = $('#J_heart'),
        offsetX = $heart.width() / 2,
        offsetY = $heart.height() / 2 - 25,
        $canvas = $('#J_canvas'),
        canvasEl = $canvas[0],
        getHeartPoint, heartAnim,
        ctx, garden;

      canvasEl.width = $heart.width();
      canvasEl.height = $heart.height();
      ctx = canvasEl.getContext('2d');
      ctx.globalCompositeOperation = 'lighter';
      garden = new Garden(ctx, canvasEl);

      setInterval(function () {
        garden.render();
      }, Garden.options.growSpeed);
      getHeartPoint = function (angle) {
      	var t = angle / Math.PI,
          standard = window.innerWidth / 375,
          x = standard * 10.6 * (16 * Math.pow(Math.sin(t), 3)),
          y = - standard * 10 * (13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t));
      	return [offsetX + x, offsetY + y];
      };
      heartAnim = function () {
      	var interval = 50,
          angle = 10,
          heart = [];
      	var animationTimer = setInterval(function () {
      		var bloom = getHeartPoint(angle),
            draw = true;
      		for (var i = 0; i < heart.length; i++) {
      			var p = heart[i];
      			var distance = Math.sqrt(Math.pow(p[0] - bloom[0], 2) + Math.pow(p[1] - bloom[1], 2));
      			if (distance < Garden.options.bloomRadius.max * 1.3) {
      				draw = false;
      				break;
      			}
      		}
      		if (draw) {
      			heart.push(bloom);
      			garden.createRandomBloom(bloom[0], bloom[1]);
      		}
      		if (angle >= 30) {
      			clearInterval(animationTimer);
      		}
          else {
      			angle += 0.2;
      		}
      	}, interval);
      };
      heartAnim();
    }
  }
  new Gift();
});

})(Zepto, window, document, undefined);
