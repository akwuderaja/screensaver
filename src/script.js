(function() {
  var mod = {
    has: function(value) {
      return typeof value !== "undefined" && value !== null && value !== "";
    },
    restart: function() {
      var node = document.querySelector(".words-intro");
      if (mod.has(node)) {
        node.className = node.className.split(" wi-stop").join("") + " wi-stop";
        setTimeout(function() {
          node.className = node.className.split(" wi-stop").join("").split(" wi-play").join("");
          setTimeout(function() {
            node.className = node.className.split(" wi-stop").join("").split(" wi-play").join("") + " wi-play";
            setTimeout(mod.restart, 15000);
          }, 2000);
        }, 2000);
      }
    },
    resize: function() {
      var node = document.querySelector(".words-intro");
      if (mod.has(node)) {
        var fontSize = (window.innerWidth / 800) * 12;
        if (fontSize < 10) fontSize = 10;
        node.style.fontSize = fontSize + "px";
      }
    },
    start: function() {
      var node = document.querySelector(".words-intro");
      if (mod.has(node)) {
        window.addEventListener("resize", mod.resize);
        window.dispatchEvent(new CustomEvent("resize"));
        setTimeout(function() {
          node.className = node.className.split(" wi-play").join("") + " wi-play";
          setTimeout(mod.restart, 15000);
        }, 2000);
      }
    }
  };
  mod.start();
})();