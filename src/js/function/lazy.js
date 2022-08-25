export const lazy = (() => {
   let lazyLoadVideos = [].slice.call(document.querySelectorAll(".lazy-video"));
   if ("IntersectionObserver" in window) {
      let lazyVideoObserver = new IntersectionObserver(function (entries, observer) {
         entries.forEach(function (video) {
            if (video.isIntersecting) {
               for (let source in video.target.children) {
                  let videoSource = video.target.children[source];
                  if (typeof videoSource.tagName === "string" && videoSource.tagName === "SOURCE") {
                     videoSource.src = videoSource.dataset.src;
                  }
               }
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
