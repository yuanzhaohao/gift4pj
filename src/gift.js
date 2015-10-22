(function ($, win, doc) {

$(function () {
  var rAF = win.requestAnimationFrame || win.webkitRequestAnimationFrame || function (cb) { win.setTimeout(cb, 16); },
    $gift = $('#J_gift'),
    offsetX = $gift.width() / 2,
    offsetY = $gift.height() / 2 - 25,
    $canvas = $('#J_canvas'),
    canvas = $canvas[0],
    ctx;

  canvas.width = $gift.width();
  canvas.height = $gift.height();
  ctx = canvas.getContext('2d');
  ctx.globalCompositeOperation = 'lighter';
  garden = new Garden(ctx, canvas);

  setInterval(function () {
    garden.render();
  }, Garden.options.growSpeed);

  var getHeartPoint = function (angle) {
  	var t = angle / Math.PI,
      x = 10.5 * (16 * Math.pow(Math.sin(t), 3)),
      y = - 10 * (13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t));
  	return [offsetX + x, offsetY + y];
  };
  var startHeartAnimation = function () {
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

  startHeartAnimation();
});

})(Zepto, window, document, undefined);
