export const scroll = (() => {
   SmoothScroll({
      animationTime: 900,
      stepSize: 75,
      keyboardSupport: true,
      arrowScroll: 75,
      pulseAlgorithm: true,
      pulseScale: 2,
      pulseNormalize: 1,
      touchpadSupport: true,
   });
})();
