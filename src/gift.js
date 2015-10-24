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

    /**
     * 倒计时功能函数
     */
    var getDaysInMonth =  function (month) {
      var data = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
      return data[month];
    };
    self.count = function (start, now, cb) {
      var seconds = now - start,
        minutes = parseInt(seconds / 60, 10),
        hours = parseInt(seconds / (60 * 60), 10),
        days = parseInt(seconds / (60 * 60 * 24), 10),
        months = parseInt(seconds / (60 * 60 * 24 * 30), 10),
        updateTimer = timer = null,
        months;
      if (seconds < 0) {
        cb && cb();
        return;
      }
      seconds = seconds - minutes * 60;
      minutes = minutes - hours * 60;
      hours = hours - days * 24;
      days = days - months * 30;
      // 直接使用本地时间进行比对
      updateTimer = function () {
        now = parseInt((+new Date) / 1000, 10);
        seconds = now - start;
        minutes = parseInt(seconds / 60, 10);
        hours = parseInt(seconds / (60 * 60), 10);
        seconds = seconds - minutes * 60;
        minutes = minutes - hours * 60;
      };
      timer = setInterval(function () {
        rAF(function () {
          seconds++;
          if (seconds >= 60) {
            seconds -= 60;
            minutes += 1;
          }
          if (minutes >= 60) {
            minutes -= 60;
            hours += 1;
          }
          if (hours >= 24) {
            hours -= 24;
            days += 1;
          }
          if (days >= 30) {
            days -= 30;
            months += 1;
          }
          cb && cb.call(null, {
            hours: hours,
            minutes: minutes,
            seconds: seconds,
            days: days,
            months: months
          });
        });
      }, 980);
      // 返回更新时间的函数
      return updateTimer;
    };

    self.buffer = function (fn, ms, context) {
      var self = this;

      ms = ms || 150;
      if (ms === -1) {
        return function () {
          fn.apply(context || null, arguments);
        };
      }
      var bufferTimer = null;
      function f () {
        f.stop();
        bufferTimer = self.later(fn, ms, 0, context || null, arguments);
      }
      f.stop = function () {
        if (bufferTimer) {
          bufferTimer.cancel();
          bufferTimer = 0;
        }
      };
      return f;
    };

    self.later = function (fn, when, periodic, context, data) {
      if (!fn) {
        return;
      }
      var d = Array.prototype.slice.call(data);
      when = when || 0;
      if (typeof fn === 'string') {
        fn = context[fn];
      }

      var f = function () {
          fn.apply(context, d);
        },
        r = (periodic) ? setInterval(f, when) : setTimeout(f, when);

      return {
        id: r,
        interval: periodic,
        cancel: function () {
          if (this.interval) {
            clearInterval(r);
          }
          else {
            clearTimeout(r);
          }
        }
      };
    };

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

      self.EVENT = utils.hasProp(['animation']) ? 'animationend' : 'webkitAnimationEnd';
      self.heart();
      self.count();
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

    count: function () {
      var self = this,
        $time = $('#J_time'),
        $count = $('.j_count', $time),
        updateFn;

      updateFn = utils.count(
        // parseInt(+new Date('2015-05-27 01:00:00') / 1000, 10),
        1432659600,
        parseInt(+new Date() / 1000, 10),
        function (p) {
          var time = '';

          if (p.months < 10) {
            p.months = '0' + p.months;
          }
          if (p.days < 10) {
            p.days = '0' + p.days;
          }
          if (p.hours < 10) {
            p.hours = '0' + p.hours;
          }
          if (p.minutes < 10) {
            p.minutes = '0' + p.minutes;
          }
          if (p.seconds < 10) {
            p.seconds = '0' + p.seconds;
          }
          // time += '<i>' + p.months + '</i>mon <i>' + p.days + '</i>day <i>' + p.hours +'</i>hr <i>'+ p.minutes +'</i>min <i>'+ p.seconds +'</i>sec';
          time += '<i>' + p.months + '</i>mon <i>' + p.days + '</i>day <i>' + p.hours +'</i>hr <i>'+ p.minutes +'</i>min <i>'+ p.seconds +'</i>sec';
          $count.html(time);
        }
      );
      updateFn && win.addEventListener('scroll', utils.buffer(updateFn, 500), true);
    },

    time: function () {
      var self = this,
        $time = $('#J_time'),
        $info = $('.j_info', $time),
        $count = $('.j_count', $time),
        $text = $('.j_text', $time),
        cls = 'fadeIn anim1500ms',
        cls1 = 'fadeIn anim1000ms',
        EVENT = self.EVENT;

      $info.addClass(cls);
      $count.addClass(cls);
      $count[0].addEventListener(EVENT, function (e) {
        e.currentTarget.removeEventListener(EVENT, arguments.callee);
        $text.addClass(cls1);
        self.cake();
      }, false);
    },

    cake: function () {
      var self = this,
        $cake = $('#J_cake'),
        $title = $('#J_title'),
        $textarea = $('#J_textarea'),
        cls = 'fadeIn anim1500ms',
        EVENT = self.EVENT,
        $velas;

      $cake.html($textarea.text());
      $velas = $('.j_velas', $cake);
      setTimeout(function () {
        $cake.css('opacity', 1);
      }, 500);
      setTimeout(function () {
        $title.addClass(cls);
      }, 3500);
    }
  }
  new Gift();
});

})(Zepto, window, document, undefined);
