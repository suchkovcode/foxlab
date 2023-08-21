/* eslint-disable prefer-const */
export const lazy = (() => {
   const lazyLoadVideos = [].slice.call(document.querySelectorAll(".lazy-video"));
   if ("IntersectionObserver" in window) {
      const lazyVideoObserver = new IntersectionObserver(function (entries) {
         entries.forEach(function (video) {
            if (video.isIntersecting) {
               for (let source in video.target.children) {
                  let videoSource = video.target.children[source];
                  if (typeof videoSource.tagName === "string" && videoSource.tagName === "SOURCE") {
                     // @ts-ignore
                     videoSource.src = videoSource.dataset.src;
                  }
               }
               // @ts-ignore
               video.target.load();
               video.target.classList.remove(".lazy-video");
               lazyVideoObserver.unobserve(video.target);
            }
         });
      });
      lazyLoadVideos.forEach(function (lazyVideo) {
         lazyVideoObserver.observe(lazyVideo);
      });
   }
})();
