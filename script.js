const sentinel = document.getElementById("sentinel");
      document.addEventListener("mousemove", (e) => {
        sentinel.style.left = e.clientX + "px";
        sentinel.style.top = e.clientY + "px";
      });

      document.querySelectorAll("a").forEach((el) => {
        el.addEventListener(
          "mouseenter",
          () => (sentinel.style.transform = "translate(-50%, -50%) scale(6)"),
        );
        el.addEventListener(
          "mouseleave",
          () => (sentinel.style.transform = "translate(-50%, -50%) scale(1)"),
        );
      });
