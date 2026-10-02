const nav = document.querySelector('.navbar');
const menu = document.querySelector('.menu-btn');
const links = document.querySelector('.nav-links');

window.addEventListener('scroll', () => {
  nav?.classList.toggle('scrolled', window.scrollY > 20);
});
menu?.addEventListener('click', () => links?.classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(a => a.addEventListener('click', () => links?.classList.remove('open')));

document.querySelectorAll('.reveal').forEach(el => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => { if(entry.isIntersecting){ entry.target.classList.add('show'); observer.unobserve(entry.target); } });
  }, {threshold:.12});
  observer.observe(el);
});

document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
/* =========================================
   JOIN US FLOATING WIDGET
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    const joinWidget = document.createElement("div");

    joinWidget.className = "join-widget";

    joinWidget.innerHTML = `

        <!-- Floating Button -->

        <button
            class="join-toggle"
            aria-label="Join Us"
            aria-expanded="false"
        >

            <span class="join-dot"></span>

            <span>
                Join Us
            </span>

        </button>


        <!-- Join Card -->

        <div
            class="join-card"
            role="dialog"
            aria-label="Join Virus Student Union"
        >

            <button
                class="join-close"
                aria-label="Close"
            >
                ×
            </button>


            <div class="join-eyebrow">
                Be Part Of It
            </div>


            <h3>
                Become Part<br>
                of the Story.
            </h3>


            <p class="join-description">
                Join our community, meet new people,
                build real experience and create
                moments worth remembering.
            </p>


            <div class="join-benefits">

                <div class="join-benefit">

                    <span class="join-number">
                        01
                    </span>

                    <span>
                        Build real experience
                    </span>

                </div>


                <div class="join-benefit">

                    <span class="join-number">
                        02
                    </span>

                    <span>
                        Meet new people
                    </span>

                </div>


                <div class="join-benefit">

                    <span class="join-number">
                        03
                    </span>

                    <span>
                        Work on real events
                    </span>

                </div>


                <div class="join-benefit">

                    <span class="join-number">
                        04
                    </span>

                    <span>
                        Grow your skills
                    </span>

                </div>

            </div>


            <a
                href="contact.html"
                class="join-apply"
            >
                Apply Now →
            </a>

        </div>

    `;


    document.body.appendChild(joinWidget);


    const toggle =
        joinWidget.querySelector(".join-toggle");

    const close =
        joinWidget.querySelector(".join-close");


    /* Open */

    toggle.addEventListener("click", () => {

        const isOpen =
            joinWidget.classList.toggle("open");

        toggle.setAttribute(
            "aria-expanded",
            isOpen
        );

    });


    /* Close */

    close.addEventListener("click", () => {

        joinWidget.classList.remove("open");

        toggle.setAttribute(
            "aria-expanded",
            "false"
        );

    });


    /* Click outside */

    document.addEventListener("click", (event) => {

        if (
            !joinWidget.contains(event.target)
        ) {

            joinWidget.classList.remove("open");

            toggle.setAttribute(
                "aria-expanded",
                "false"
            );

        }

    });


    /* ESC */

    document.addEventListener("keydown", (event) => {

        if(event.key === "Escape") {

            joinWidget.classList.remove("open");

            toggle.setAttribute(
                "aria-expanded",
                "false"
            );

        }

    });

});

/* =========================================
   🌐 EASTER EGG
   Click the logo 5 times
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    const logo = document.querySelector(".nav-logo");

    if (!logo) return;

    let clickCount = 0;
    let clickTimer = null;

    logo.addEventListener("click", (event) => {

        // Prevent navigating to home
        event.preventDefault();

        clickCount++;

        // Reset if the 5 clicks take too long
        clearTimeout(clickTimer);

        clickTimer = setTimeout(() => {
            clickCount = 0;
        }, 1800);


        // Small logo animation
        logo.classList.remove("easter-shake");

        void logo.offsetWidth;

        logo.classList.add("easter-shake");


        // Activate after 5 clicks
        if (clickCount >= 5) {

            clickCount = 0;

            clearTimeout(clickTimer);

            showEasterEgg();

        }

    });


    function showEasterEgg() {

        // Prevent multiple overlays
        if (document.querySelector(".easter-overlay")) return;


        const overlay =
            document.createElement("div");

        overlay.className =
            "easter-overlay";


        overlay.innerHTML = `

            <div class="easter-content">

                <div class="easter-stars">
                    <span>✦</span>
                    <span>✦</span>
                    <span>✦</span>
                </div>

                <div class="easter-small">
                    YOU FOUND US
                </div>

                <h2>
                    👀
                </h2>

                <p>
                    Some memories are hidden
                    in plain sight.
                </p>

            <a
    href="memories.html"
    class="easter-close"
>
    Continue exploring →
</a>

            </div>

        `;


        document.body.appendChild(overlay);


        // Trigger animation
        requestAnimationFrame(() => {
            overlay.classList.add("show");
        });


        // Close button
        const closeButton =
            overlay.querySelector(".easter-close");


        closeButton.addEventListener(
            "click",
            closeEasterEgg
        );


        // Click outside
        overlay.addEventListener(
            "click",
            (event) => {

                if (
                    event.target === overlay
                ) {

                    closeEasterEgg();

                }

            }
        );


        // ESC
        const escapeHandler =
            (event) => {

                if(event.key === "Escape") {

                    closeEasterEgg();

                }

            };


        document.addEventListener(
            "keydown",
            escapeHandler
        );


        function closeEasterEgg() {

            overlay.classList.remove("show");

            setTimeout(() => {

                overlay.remove();

                document.removeEventListener(
                    "keydown",
                    escapeHandler
                );

            }, 300);

        }

    }

});

const semesterEvents = [
    {
        date: "OCT 01",
        title: "Opening",
        time: "10:00 AM",
        location: "Campus"
    },
    {
        date: "OCT 20",
        title: "Sports Day",
        time: "10:00 AM",
        location: "Sports Field"
    }
];
