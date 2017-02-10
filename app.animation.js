angular.
  module('app').
  animation('.picture-item', function phoneAnimationFactory() {
    return {
      addClass: animateIn,
      removeClass: animateOut
    };

    function animateIn(element, className, done) {
      if (className !== 'selected') return;

      element.
        css({
          display: 'block',
          position: 'absolute',
          top: 350,
          left: 0
        }).
        animate({
          top: 0
        }, done);

      return function animateInEnd(wasCanceled) {
        if (wasCanceled) element.stop();
      };
    }

    function animateOut(element, className, done) {
      if (className !== 'selected') return;

      element.
        css({
          position: 'absolute',
          top: 0,
          left: 0
        }).
        animate({
          top: -350
        }, done);

      return function animateOutEnd(wasCanceled) {
        if (wasCanceled) element.stop();
      };
    }
  });