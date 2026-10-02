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
