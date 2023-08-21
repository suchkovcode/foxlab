import $ from "jquery";
import "jquery.marquee";


export const marquee = (() => {
   $(".section-4__marquee-1").marquee({
      duration: 21000,
      gap: 20,
      delayBeforeStart: 0,
      startVisible: true,
      direction: "left",
      duplicated: true,
   });
   $(".section-4__marquee-2").marquee({
      duration: 21000,
      gap: 20,
      delayBeforeStart: 0,
      startVisible: true,
      direction: "right",
      duplicated: true,
   });
})();
