document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("navMenu");

    if (hamburger && navMenu) {
        hamburger.addEventListener("click", () => {
            navMenu.classList.toggle("active");
        });
    }
});

document.addEventListener("DOMContentLoaded", () => {

    const PRODUCTS = {
        surescore: {
            title: "Innovatronix SureScore 2",
            image: "assets/product1.1.jpg",
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
            image: "assets/product1.2.jpg",
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
            image: "assets/product1.3.jpg",
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
            image: "assets/product1.4.jpg",
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
            image: "assets/product1.5.jpg",
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
        },

        zeal2: {
            title: "Zeal 2.0 (12Vdc Mini UPS)",
            image: "assets/product2.1.jpg",
            desc: "To ensure continuous power that will last at least 4 hours for a single typical router/modem during power interruptions or sudden power failures.",
            manual: "assets/manuals/zeal2-manual.pdf",

            technicalSpecs: [
                "Input voltage: 12Vdc",
                "Output voltage: 12Vdc and 5Vdc",
                "Capacity: 26.4Whr",
                "Transfer time : Approx. 0.01sec",
                "Maximum output current : 2A",
                "Battery low voltage protection : Yes",
                "Battery overcharge protection : Yes",
                "Battery Type : Lithium Ion",
                "Dimension (LxWxH) : 13.5cmx7.5cmx5cm"
            ]
        },

        appliancetimer: {
            title: "Appliance Timer",
            image: "assets/product2.2.jpg",
            desc: "Automatically turn off appliances with zero effort. The Tronix Appliance Timer works in three efficient ways:",
            manual: "assets/manuals/appliancetimer-manual.pdf",

            features: [
                "It protects every appliance against harmful power fluctuations and surges by keeping appliance OFF.",
                "Minimize unnecessary electrical charges, leaving the whole household worry-free and cost efficient.",
                "Safeguard home against fire.",
            ]
        },

        refclocksaver: {
            title: "Ref Clock Saver",
            image: "assets/product2.3.jpg",
            desc: "RCS is an electronic device that can generate a low-power consumption for refrigerators and improve the on-off cycle for a smoother temperature regulation.",
            manual: "assets/manuals/refclocksaver-manual.pdf",

            features: [
                "The guaranteed savings is based on the preferred time setting and saving mode. This device can cut the refrigerator's power consumption to almost half than the usual month use. This device is equipped with a power-on-delay feature.",
            ]
        },

        aircontimer: {
            title: "Aircon Timer",
            image: "assets/product2.4.jpg",
            desc: "The Tronix ACT 20 II is an electronic device that saves energy and protects appliances from power surge caused by brown out. AirCon units can be set to turn on from 1 to 9 hours or continues on. It has a fan outlet that turns on the electric fan when the timer lapses. It is recommended for window-type airconditioners rated 3HP below.",
            manual: "assets/manuals/aircontimer-manual.pdf",
        },

        nightlight: {
            title: "Automatic Night Light",
            image: "assets/product2.5.jpg",
            desc: "Product Details of Tronix Automatic Night Light (ANL)",
            manual: "assets/manuals/nightlight-manual.pdf",

            technicalSpecs: [
                "Heavy-duty sensor switch",
                "It uses a light sensor switch",
                "Very easy to use",
                "Automatically turns on the light at night & turns off in the morning",
                "Compatible up to 80 watts CFL and LED Lights",
                "Product developed since 1995- Developed and Manufactured by Filipino Engineers",
                "Input Voltage: 220 VAC",
                "Max Loading Capacity: 80 watts CFL/ LED light"
            ]
        },

        powerondelay: {
            title: "Power on Delay",
            image: "assets/product2.6.jpg",
            desc: "This deviceis ideal for refrigerators, freezers, TV sets, audio systems and fax machines.",
            manual: "assets/manuals/powerondelay-manual.pdf",

            features: [
                "Brownouts, power failures and severe voltage fluctuations can damage electronic appliances. The Tronix POD 10 device protects homes and offices by delaying electrical connection until the power stabilizes. Appliances with compressors, need atleast 2 minutes for their pressure to equalize.",
            ]
        },

        cpflash550w: {
            title: "Innovatronix CPFlash 550W",
            image: "assets/product3.1.jpg",
            desc: "Portable Electronic Scoreboard is a line of electronic display products designed for sports and event management.",
            manual: "assets/manuals/cpflash550w-manual.pdf",

            features: [
                "550W high efficiency LED technology",
                "FREE Smartphone Application with very user-friendly interface",
                "Up to 7 hours continuous use from single full charge",
                "Compatible with iOS and Android, DSLR and mirrorless camera (iOS 11, Android 6 and above operating system)",
                "Wireless connection via Bluetooth (Smartphone to Master)",
                "UHF wireless connection (Master to Slave)",
                "Powered by rechargeable Li-Ion Industry Standard 18650 battery (That cost $5.00 USD in Amazon.com)",
                "Compatible with your existing speedlite accessories",
                "Power output : 550W",
                "Lux output : 95,000 at 0.5 meter with light modifier",
                "Adjustable flash power from 0.5% to 100%",
                "Adjustable flash duration from 80 milliseconds to 500 milliseconds",
                "Can sync with your smartphone at any shutter speed",
                "100 flashes at full-power on a full-charged battery",
                "For normal shooting conditions, 300-500 flashes can be achieved",
                "Battery field-replaceable or can be charged using micro USB(4 hours charging time)",
                "20 watts maximum video light / FX power",
                "Adjustable video light power from 0.5% to 100%",
                "Comes with a free downloadable application",
                "Compatible with iOS 11 and above, Android 6 and above, DSLRsand mirrorless cameras",
                "Connection via Bluetooth (CPFlash 550W to App)",
                "Radio Connection (Master to Slave)",
                "Connect as many CPFlash 550W units as you want",
                "Range (Master CPFlash to Smartphone) : 20 meters line of sight",
                "Range (Master CPFlash to Slave CPFlash) : 50 meters line of sight",
                "Extruded Aluminum Metal Casing",
                "Patent Numbers : 2-2016-000506,  2-2016-000842,  2-2016-000505"
            ],
            inclusion: [
                "1 Innovatronix CPFlash 550W",
                "6 magnetic acrylic glass filters",
                "1 rechargeable smartphone camera trigger",
                "1 wireless hotshoe DSLR and mirrorless camera trigger",
                "1 micro USB cable for charging",
                "1 detachable metal bracket"
            ]
        },

        explorerxt3: {
            title: "Explorer XT3",
            image: "assets/product3.2.jpg",
            desc: "Available in 115V/60Hz (North AMerican/Japan) model and 230V/50Hz (Rest of the world/Universal) model.",
            manual: "assets/manuals/explorerxt3-manual.pdf",
            compatibility: "assets/compatibility/explorer-compatibility.pdf",

            features: [
                "The Tronix Explorer XT3. (The most powerful Tronix Explorer yet!) Works with multiple digital and bi-voltage monolights/flash units (and analog flash units as well). and capable of powering compacts/monoblocks giving several hundreds of pops at faster recycling time, as fast as that of a wall socket's recycling time. Rated at 800watts continuous, up to 2400w/s."
            ]
        },

        explorerxtse: {
            title: "Explorer XT SE",
            image: "assets/product3.3.jpg",
            desc: "Available in 115V/60Hz (North American/Japan) model and 230V/50Hz (Rest of the world/Universal) model.",
            manual: "assets/manuals/explorerxtse-manual.pdf",
            compatibility: "assets/compatibility/explorer-compatibility.pdf",

            features: [
                "The Tronix Explorer XT SE. (Special Edition of Tronix Explorer XT) Designed to power up at least one (1) bi-voltage monoblock/flash units. Capable of powering compacts/monoblocks giving almost a thousand pops, though the recycling time is not as fast as that of Explorer XT3 or Explorer Mini. Rated at 350watts continuous, up to 2400w/s. Also compatible with analog flashes."
            ]
        },

        explorermini: {
            title: "Explorer Mini",
            image: "assets/product3.4.jpg",
            desc: "Available in 115V/60Hz (North AMerican/Japan) model and 230V/50Hz (Rest of the world/Universal) model.",
            manual: "assets/manuals/explorermini-manual.pdf",
            compatibility: "assets/compatibility/explorer-compatibility.pdf",

            features: [
                "The Tronix Explorer Mini. Despite its small size, it packs the punch with its capability to power up at least two (2) bi-voltage monoblocks/compacts (regular digital and analog compacts/monoblocks as well). It can provide enough pops for a quick photoshoot. Rated at 400watts continuous, up to 1200w/s. Also compatible with analog and digital flashes."
            ]
        },

        speedfire: {
            title: "SpeedFire",
            image: "assets/product3.5.jpg",
            desc: "The Tronix SpeedFire is an external power supply for small flashes which connects directly to AC/wall socket. It is designed for small shoe-mounted flash units or flash guns. It converts AC power to high voltage DC power that connects to the flash gun's external power port.",
            manual: "assets/manuals/speedfire-manual.pdf",

            features: [
                "It effectively reduces recycling time and provides unlimited number of flashes. 12.85cm x 7.45cm x 5.20cm, 282 grams. Best recommended for home/studio or semi-permanent studio set up. Compatible with Canon and Nikon flashes with external battery port."
            ]
        },

        speedfireii: {
            title: "SpeedFire II",
            image: "assets/product3.6.jpg",
            desc: "The Tronix SpeedFire II is the updated version of Tronix SpeedFire, it has dummy battery that will allow you to use your speedlights without using battery.",
            manual: "assets/manuals/speedfireii-manual.pdf",

            features: [
                "Tronix SpeedFire II is an external power supply which connects directly to AC/wall socket, designed for small shoe-mounted flash units or flash guns. It converts AC power to high voltage DC power that connects to the flash gun's external power port. It effectively reduces recycling time and provides unlimited number of flashes.",
                "Best recommended for home/studio or semi-permanent studio set up. (For Canon 580EX2/580EX/550EX/540EX/430EZ)"
            ]
        },

        evo3: {
            title: "Evo 3",
            image: "assets/product3.7.jpg",
            desc: "The Tronix EVO3 is a digital photo printing machine, equipped with Continuous Ink System for easy ink refilling and cheaper material cost. Print pictures into wallet sizes, 2R, 3R, 4R and A4 and sell them at a price relatively cheaper compared to existing printers in the market today. Earn as much as 60% with only P1.20+ material cost per print. This is the machine used by Tronix Imaging Centers nationwide.",
        },

        map: {
            title: "Tronix Imaging Locations",
            desc: "Find Tronix Imaging Centers near you",
            mapEmbed: "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d61772.090402504866!2d121.01285189990519!3d14.612990838092722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1stronix%20imaging%20locations!5e0!3m2!1sen!2sph!4v1765814156210!5m2!1sen!2sph"
        },
    };

    const modal = document.getElementById("product-modal");
    const modalImg = modal.querySelector(".modal-img");
    const modalTitle = modal.querySelector(".modal-title");
    const modalDesc = modal.querySelector(".modal-desc");
    const sectionFeatures = modal.querySelector(".section-features");
    const sectionInclusion = modal.querySelector(".section-inclusion");
    const sectionComplete = modal.querySelector(".section-complete");
    const sectionStandard = modal.querySelector(".section-standard");
    const sectionTechnical = modal.querySelector(".section-technical");
    const manualBtn = modal.querySelector(".modal-manual-btn");
    const compatibilityBtn = modal.querySelector(".modal-compatibility-btn");
    const mapBtn = modal.querySelector(".modal-map-btn");

    // Get or create map container
    let mapContainer = modal.querySelector(".map-container");
    if (!mapContainer) {
        mapContainer = document.createElement("div");
        mapContainer.className = "map-container";
        modal.querySelector(".modal-right").appendChild(mapContainer);
    }

    document.querySelectorAll(".open-modal").forEach(btn => {
        btn.addEventListener("click", () => {
            const key = btn.dataset.product;
            const data = PRODUCTS[key];
            if (!data) return;

            // Reset modal state first
            sectionFeatures.style.display = "block";
            sectionInclusion && (sectionInclusion.style.display = "block");
            sectionComplete && (sectionComplete.style.display = "block");
            sectionStandard && (sectionStandard.style.display = "block");
            sectionTechnical && (sectionTechnical.style.display = "block");
            mapContainer.style.display = "none";
            mapBtn.style.display = "none";
            manualBtn.style.display = "none";
            compatibilityBtn && (compatibilityBtn.style.display = "none");

            // Only show image for products that have one
            if (data.image) {
                modalImg.src = data.image;
                modalImg.alt = data.title;
                modalImg.style.display = "block";
            } else {
                modalImg.style.display = "none";
            }
            
            modalTitle.textContent = data.title || "";
            modalDesc.textContent = data.desc || "";

            // Fill all sections using the fillListSection function
            fillListSection(sectionFeatures, data.features);
            fillListSection(sectionInclusion, data.inclusion);
            fillListSection(sectionComplete, data.completeSet);
            fillListSection(sectionStandard, data.standardSet);
            fillListSection(sectionTechnical, data.technicalSpecs);

            // For MAP product: Show map immediately
            if (key === "map" && data.mapEmbed) {
                // Hide image and all sections for map
                modalImg.style.display = "none";
                sectionFeatures.style.display = "none";
                sectionInclusion && (sectionInclusion.style.display = "none");
                sectionComplete && (sectionComplete.style.display = "none");
                sectionStandard && (sectionStandard.style.display = "none");
                sectionTechnical && (sectionTechnical.style.display = "none");
                manualBtn.style.display = "none";
                compatibilityBtn && (compatibilityBtn.style.display = "none");
                
                // Hide the left side (image container) completely
                modal.querySelector(".modal-left").style.display = "none";
                
                // Make the right side take full width
                modal.querySelector(".modal-right").style.width = "100%";
                modal.querySelector(".modal-right").style.flex = "1 0 100%";

                // Show map directly
                mapContainer.innerHTML = `
                    <iframe 
                        src="${data.mapEmbed}" 
                        width="100%" 
                        height="500" 
                        style="border:0; border-radius: 8px;" 
                        allowfullscreen="" 
                        loading="lazy" 
                        referrerpolicy="no-referrer-when-downgrade">
                    </iframe>
                `;
                mapContainer.style.display = "block";
                mapContainer.style.height = "100%";
                mapContainer.style.marginTop = "0";
            } 
            // For other products: Show product details
            else {
                // Show product image
                if (data.image) {
                    modalImg.src = data.image;
                    modalImg.alt = data.title;
                    modalImg.style.display = "block";
                }
                
                // Handle manual button for products
                if (data.manual) {
                    manualBtn.style.display = "inline-block";
                    manualBtn.onclick = () => window.open(data.manual, "_blank");
                } else {
                    manualBtn.style.display = "none";
                }

                // Handle compatibility button
                if (compatibilityBtn && data.compatibility) {
                    compatibilityBtn.style.display = "inline-block";
                    compatibilityBtn.onclick = () => window.open(data.compatibility, "_blank");
                } else if (compatibilityBtn) {
                    compatibilityBtn.style.display = "none";
                }
            }

            modal.classList.add("show");
        });
    });

    const closeBtn = modal.querySelector(".modal-close");
    closeBtn.addEventListener("click", () => {
        modal.classList.remove("show");
        // Reset for next opening
        sectionFeatures.style.display = "block";
        sectionInclusion && (sectionInclusion.style.display = "block");
        sectionComplete && (sectionComplete.style.display = "block");
        sectionStandard && (sectionStandard.style.display = "block");
        sectionTechnical && (sectionTechnical.style.display = "block");
        mapContainer.style.display = "none";
        mapContainer.innerHTML = "";
        modalImg.style.display = "block";
        modalImg.src = "";
    });
    
    modal.addEventListener("click", e => {
        if (e.target === modal) {
            modal.classList.remove("show");
            // Reset for next opening
            sectionFeatures.style.display = "block";
            sectionInclusion && (sectionInclusion.style.display = "block");
            sectionComplete && (sectionComplete.style.display = "block");
            sectionStandard && (sectionStandard.style.display = "block");
            sectionTechnical && (sectionTechnical.style.display = "block");
            mapContainer.style.display = "none";
            mapContainer.innerHTML = "";
            modalImg.style.display = "block";
            modalImg.src = "";
        }
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

document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("scheduleVisitModal");
  const openBtn = document.getElementById("openVisitModal");
  const closeBtn = document.getElementById("closeVisitModal");

  function openModal() {
    modal.classList.add("show");
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    modal.classList.remove("show");
    document.body.style.overflow = "";
  }

  // open
  if (openBtn) openBtn.addEventListener("click", openModal);

  // close button
  if (closeBtn) closeBtn.addEventListener("click", closeModal);

  // click outside dialog closes modal
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  // ESC closes modal
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("show")) {
      closeModal();
    }
  });
});

