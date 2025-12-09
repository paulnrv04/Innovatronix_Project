document.addEventListener("DOMContentLoaded", () => {

    const PRODUCTS = {
        surescore: {
            title: "Innovatronix SureScore 2",
            image: "assets/product1.jpg",
            desc: "Portable Electronic Scoreboard is a line of electronic display products designed for sports and event management.",
            manual: "assets/manuals/surescore2-manual.pdf",

            features: [
                "Wireless UHF Connection",
                "Battery-powered main controller (can also be powered using MicroUSB charger or powerbank)",
                "Up to 7 hours continuous use from single full charge",
                "With Wireless Air Horn",
                "Customizable Team Names",
                "Patent number: 2-2016-00050"
            ],
            inclusion: [
                "Main Controller",
                "Sub-Controller",
                "Display Receiver",
                "3 x HDMI Cable",
                "3 x Antenna for Display Receivers",
                "Wireless Air Horn",
                "Power Cable",
                "4 x 5V MicroUSB",
                "SureScore 2 User's Guide",
                "Carrying Bag"
            ]
        },

        scoreboard: {
            title: "Electronic Score Board",
            image: "assets/product1.jpg",
            desc: "Full electronic scoring system with bright LED digits, backup power, and optional shot clock set.",
            manual: "assets/manuals/surescore2-manual.pdf",

            features: [
                "Easy to install and maintain",
                "Low-cost and highly reliable",
                "Use of 6\" seven segment bright LED",
                "Use of aluminum-reinforced casing",
                "With 3–4 hours back-up battery for main controller",
                "With provision for extra Main Display Board",
                "One (1) year lismited warranty",
                "Game time display on Shot Clock Display Board"
            ],
            completeSet: [
                "Main Display",
                "Main Controller",
                "Shot Clock Set (2 pcs.)",
                "Team Fouls with Periods Display",
                "Professional Airhorn"
            ],
            standardSet: [
                "Main Display",
                "Main Controller"
            ],
            technicalSpecs: [
                "Power Source – 220 VAC for Main Controller; 220 VAC for Main Display",
                "Digit Size / Color – 6\" x 3\" / Red and Green",
                "Cable Length – 1 piece 75 meters (250 ft.) for Main Display to Controller; 2 pieces 35 meters (116.67 ft.) for Shot Clock to Main Controller",
                "Back-up Battery – 3–4 hours (Main Controller only)"
            ]
        },

        portablescoreboard: {
            title: "Portable Electronic Scoreboard",
            image: "assets/product2.jpg",
            desc: "Professional shot clock system with built-in buzzer and preset timing values.",
            manual: "assets/manuals/surescore2-manual.pdf",

            features: [
                "Portable tabletop scroboard for indoor and outdoor programs",
                "Uses super bright LED displays",
                "Displays time, score,ball possession, team fouls and period",
                "Built-in control panel located at the back",
                "With provisions for add-on shot clock set",
                "With built-in buzzer",
                "Suitable for basketball, volleyball and other sports"
            ],
            technicalSpecs: [
                "Power Source – Autovolt (90-250VAC)",
                "Digit Size/Color – Time of the Game – 3″ Red; Scores (Home & Visitors) – 2.5″ / Red; Period & Team Fouls – 2″ / Yellow & Green",
                "Dimension (LxWxH) – 19.5 x 5″ x 13″",
                "Weight – 11.8 lbs"
            ]
        },

        shotclock: {
            title: "Independent Shot Clock",
            image: "assets/product2.jpg", // change if needed
            desc: "Professional shot clock system with built-in buzzer and multiple preset timing values.",
            manual: "assets/manuals/surescore2-manual.pdf",

            features: [
                "Has a built-in buzzer",
                "Has four preset values of 30, 25, 24 and 23 seconds"
            ],

            technicalSpecs: [
                "Power Source – 220 VAC (Shot Clock Display and Controller)",
                "Shot Clock Display Unit (LxWxH) – 16\" x 3\" x 13\"",
                "Shot Clock Controller (LxWxH) – 3.5\" x 10\" x 4.25\"",
                "Digit Size / Color – 6\" x 4\" / Red",
                "Cable Length – 2 x 35 meters (116.67 ft.)",
                "Shot Clock Display Weight – 11 lbs",
                "Shot Clock Controller Weight – 11 lbs"
            ]
        },

        minutetimer: {
            title: "10-Minute Timer",
            image: "assets/product3.jpg", // adjust to real image
            desc: "Countdown and count-up timer designed for sports and training sessions.",
            manual: "assets/manuals/surescore2-manual.pdf",

            technicalSpecs: [
                "Dimension: 27\" (Length) x 13\" (Height) x 4.5\" (Thickness)",
                "Digit Size / Color: 6\" / Red (4 digits)",
                "Visibility: 75 to 100 meters (246 to 328 ft.)",
                "Optional: 1 Slave display board (4 digits)",
                "With back-up battery for 3 to 4 hours",
                "Automatic buzzer after the set time has elapsed",
                "Fiberglass-reinforced wood enclosure (indoor use only)",
                "Count-down timer for 10 minutes (also programmable for count-up timer)"
            ]
        }
    };


    const modal = document.getElementById("product-modal");
    const modalImg = modal.querySelector(".modal-img");
    const modalTitle = modal.querySelector(".modal-title");
    const modalDesc = modal.querySelector(".modal-desc");
    const sectionFeatures = modal.querySelector(".section-features");
    const sectionComplete = modal.querySelector(".section-complete");
    const sectionStandard = modal.querySelector(".section-standard");
    const sectionTechnical = modal.querySelector(".section-technical");
    const manualBtn = modal.querySelector(".modal-manual-btn");

    document.querySelectorAll(".open-modal").forEach(btn => {
        btn.addEventListener("click", () => {
            const key = btn.dataset.product;
            const data = PRODUCTS[key];
            if (!data) return;

            modalImg.src = data.image || "";
            modalImg.alt = data.title || "";
            modalTitle.textContent = data.title || "";
            modalDesc.textContent = data.desc || "";

            fillListSection(sectionFeatures, data.features);
            fillListSection(sectionComplete, data.completeSet);
            fillListSection(sectionStandard, data.standardSet);
            fillListSection(sectionTechnical, data.technicalSpecs);

            modal.classList.add("show");

            if (data.manual) {
                manualBtn.style.display = "inline-block";
                manualBtn.onclick = () => window.open(data.manual, "_blank");
            } else {
                manualBtn.style.display = "none"; // hide if no manual
            }
        });
    });

    const closeBtn = modal.querySelector(".modal-close");
    closeBtn.addEventListener("click", () => modal.classList.remove("show"));
    modal.addEventListener("click", e => {
        if (e.target === modal) modal.classList.remove("show");
    });
});

function fillListSection(container, items) {
    if (!container) return;

    const ul = container.querySelector("ul");
    if (!ul) return;

    const list = Array.isArray(items) ? items : [];

    ul.innerHTML = "";

    if (list.length === 0) {
        container.style.display = "none";
        return;
    }

    container.style.display = "";
    list.forEach(text => {
        const li = document.createElement("li");
        li.textContent = text;
        ul.appendChild(li);
    });
}