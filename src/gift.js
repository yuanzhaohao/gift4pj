(function ($, win, doc) {

$(function () {
  var rAF = win.requestAnimationFrame || win.webkitRequestAnimationFrame || function (cb) { win.setTimeout(cb, 16); };

  var utils = (function () {
    var self = {};

    /**
     * 检测环境支持
     */
    var div = doc.createElement('div'),
      pfx = ['webkit', 'moz', 'MS', 'o', ''];

    var ucFirst = function (str) {
      return str.charAt(0).toUpperCase() + str.substr(1);
    };
    var some = function (ary, callback) {
      for (var i = 0, len = ary.length; i < len; i++) {
        if (callback(ary[i], i)) {
          return true;
        }
      }
      return false;
    };
    var getCSSVal = function (prop) {
      if (div.style[ prop ] !== undefined) {
        return prop;
      }
      else {
        var ret;
        some(pfx, function(_pfx) {
          var _prop = ucFirst(_pfx) + ucFirst(prop);
          if (div.style[_prop] !== undefined) {
            ret = '-' + _pfx + '-' + prop;
            return true;
          }
        });
        return ret;
      }
    };
    var hasProp = function (props) {
      return some(props, function(prop) {
        return div.style[prop] !== undefined;
      });
    };
    var supportProp = function (prop, values) {
      return some(values, function(value) {
        div.style[prop] = value;
        var v = div.style[prop];
        return v === value;
      });
    };

    self.some = some;
    self.getCSSVal = getCSSVal;
    self.hasProp = hasProp;
    self.supportProp = supportProp;

    return self;
  })(undefined);

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
        $canvas = $('#J_canvas'),
        canvasEl = $canvas[0],
        getHeartPoint, heartAnim,
        ctx, garden,
        offsetX, offsetY;

      resize = function () {
        offsetX = $heart.width() / 2;
        offsetY = $heart.height() / 2 - 25;
        canvasEl.width = $heart.width();
        canvasEl.height = $heart.height();
        ctx = canvasEl.getContext('2d');
        ctx.globalCompositeOperation = 'lighter';
        garden = new Garden(ctx, canvasEl);
      }
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
            self.time();
      		}
          else {
      			angle += 0.2;
      		}
      	}, interval);
      };
      resize();
      heartAnim();
      setInterval(function () {
        garden.render();
      }, Garden.options.growSpeed);
    },

    time: function () {
      var self = this,
        $time = $('#J_time'),
        $info = $('.j_info', $time),
        $count = $('.j_count', $time),
        $text = $('.j_text', $time),
        fadeCls = 'fadeIn',
        EVENT = utils.hasProp(['animation']) ? 'animationend' : 'webkitAnimationEnd';

      $info.addClass(fadeCls);
      $count.addClass(fadeCls);
      $count[0].addEventListener(EVENT, function (e) {
        e.currentTarget.removeEventListener(EVENT, arguments.callee);
        $text.addClass(fadeCls);
      }, false);
      $text[0].addEventListener(EVENT, function (e) {
        e.currentTarget.removeEventListener(EVENT, arguments.callee);
        self.cake();
      }, false);
    },

    cake: function () {
      var self = this,
        $cake = $('#J_cake'),
        $textarea = $('#J_textarea');

      $cake.html($textarea.text());
    }
  }
  new Gift();
});

})(Zepto, window, document, undefined);
