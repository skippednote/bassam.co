var app = {
  serviceWorker: function() {
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", function() {
        navigator.serviceWorker
          .register("/sw.js")
          .then(function(registration) {
            console.log("SW registered: ", registration);
          })
          .catch(function(registrationError) {
            console.log("SW registration failed: ", registrationError);
          });
      });
    }
  },
  analytics: function() {
    if (navigator.userAgent.indexOf("Speed Insights") == -1) {
      (function(i, s, o, g, r, a, m) {
        i["GoogleAnalyticsObject"] = r;
        (i[r] =
          i[r] ||
          function() {
            (i[r].q = i[r].q || []).push(arguments);
          }),
          (i[r].l = 1 * new Date());
        (a = s.createElement(o)), (m = s.getElementsByTagName(o)[0]);
        a.async = 1;
        a.src = g;
        m.parentNode.insertBefore(a, m);
      })(
        window,
        document,
        "script",
        "https://www.google-analytics.com/analytics.js",
        "ga"
      );
      ga("create", "UA-81121528-1", "auto");
      ga("send", "pageview");
    }
  },
  aliya: function() {
    var footer = document.getElementsByClassName("footer")[0];
    var body = document.getElementsByTagName("body")[0];
    var counter = 0;
    footer.addEventListener("click", function() {
      counter++,
        3 > counter || (body.innerHTML = "<p class='alo'>♡♡ALIYA♡♡</p>"),
        setTimeout(function() {
          counter = 0;
        }, 1e3);
    });
  },
  sayBassam: function() {
    var files = ["aiza.mp3", "aliya.mp3", "bassam.mp3"];
    var saybassam = document.querySelector(".saybassam");
    saybassam.addEventListener("click", function() {
      var rand = Math.round(Math.floor(Math.random() * files.length));
      var file = files[rand];
      var b = new Audio("/audio/" + file);
      b.onended = function() {
        saybassam.classList.remove("active");
      };
      if (!saybassam.classList.contains("active")) {
        b.play();
      }
      saybassam.classList.add("active");
    });
  },
  init: function() {
    this.serviceWorker();
    this.analytics();
    this.aliya();
    this.sayBassam();
  }
};

app.init();
