document.addEventListener('DOMContentLoaded', function () {
    var navbar = document.getElementById("navbar");
    var debug = document.getElementById("debug");
    var scrollCount = 0;

    function updateDebug(message) {
        if (debug) {
            debug.innerHTML = message;
        }
    }

    // Initial debug
    updateDebug("DOM loaded. Navbar found: " + (navbar ? "YES" : "NO"));

    if (navbar) {
        // Test if we can add/remove classes manually first
        setTimeout(function () {
            updateDebug("Testing manual class toggle...");
            navbar.classList.add("show");

            setTimeout(function () {
                navbar.classList.remove("show");
                updateDebug("Manual toggle test complete. Setting up scroll listener...");
            }, 2000);
        }, 1000);

        // Mobile-fixed scroll handler
        function handleScroll() {
            scrollCount++;

            // Try multiple methods to get scroll position (mobile fix)
            var scrollTop = Math.max(
                window.pageYOffset || 0,
                document.documentElement.scrollTop || 0,
                document.body.scrollTop || 0,
                window.scrollY || 0
            );

            // Alternative method for stubborn mobile browsers
            if (scrollTop === 0) {
                var rect = document.body.getBoundingClientRect();
                scrollTop = Math.abs(rect.top);
            }

            var message = "Scroll #" + scrollCount + "<br>";
            message += "ScrollTop: " + Math.round(scrollTop) + "px<br>";
            message += "Threshold: 150px<br>";
            message += "Method: " + (scrollTop > 0 ? "SUCCESS" : "FAILED") + "<br>";

            if (scrollTop > 150) {
                navbar.classList.add("show");
                message += "Status: SHOWING navbar<br>";
                message += "HasClass: " + navbar.classList.contains("show");
            } else {
                navbar.classList.remove("show");
                message += "Status: HIDING navbar<br>";
                message += "HasClass: " + navbar.classList.contains("show");
            }

            updateDebug(message);
        }

        // Multiple event listeners for better compatibility
        window.addEventListener('scroll', handleScroll, false);
        document.addEventListener('scroll', handleScroll, false);

        // Also try with passive listeners
        if (window.addEventListener) {
            try {
                window.addEventListener('scroll', handleScroll, { passive: true });
            } catch (e) {
                // Passive not supported, already added regular listener above
            }
        }

        // Touch events for mobile
        document.addEventListener('touchmove', function () {
            setTimeout(handleScroll, 50);
        }, false);

        // Force a scroll check after a delay
        setTimeout(function () {
            updateDebug("Forcing initial scroll check...");
            handleScroll();
        }, 3000);
    }
    const imageEl = document.getElementById('mainLeft');
    const triggers = document.querySelectorAll('.mainRight .trigger');
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
  
        const newSrc = entry.target.dataset.image;
        if (imageEl.src.includes(newSrc)) return;
  
        // fade out → swap → fade in
        imageEl.style.opacity = 0;
        setTimeout(() => {
          imageEl.src     = newSrc;
          imageEl.style.opacity = 1;
        }, 300);
      });
    }, {
      root: null,                 // viewport
      threshold: 0.8,             // 80% of the span must be visible
      rootMargin: '0px 0px -20% 0px'
    });
  
    triggers.forEach(span => observer.observe(span));
});

// Additional mobile debugging
window.addEventListener('load', function () {
    console.log("Window loaded");
    console.log("User agent:", navigator.userAgent);
    console.log("Screen size:", window.innerWidth + "x" + window.innerHeight);
});
