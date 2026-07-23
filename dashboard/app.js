// Data Store
const archiveData = {
    timeline: [
        {
            time: "July 20, 2026, 11:30 AM",
            type: "peaceful",
            title: "Chalo Sansad March Commences",
            desc: "Thousands of NEET aspirants and student organizations begin a march from Jantar Mantar toward Parliament House, demanding accountability for the 2026 NEET-UG paper leak.",
            details: [
                "Led by the Cockroach Janta Party (CJP), SFI, AISA, and medical aspirants.",
                "Strict peaceful protest guidelines observed by coordinating students.",
                "Stopped by heavy police barricading near Raisina Road and Parliament Street."
            ]
        },
        {
            time: "July 20, 2026, 02:00 PM",
            type: "incident",
            title: "Police Crackdown & Tear Gas",
            desc: "Without warning, police launch a severe lathi-charge and deploy tear gas to disperse the march near Parliament Street and Shastri Bhawan.",
            details: [
                "Over 170 people injured, including 100+ students and multiple volunteer first-aid doctors.",
                "Main protest stage and medical tents at Jantar Mantar dismantled by police.",
                "90+ students detained across five central Delhi police stations; mobile networks throttled."
            ]
        },
        {
            time: "July 21, 2026, 09:00 AM",
            type: "peaceful",
            title: "Mass Re-assembly at Jantar Mantar",
            desc: "Defying the previous day's crackdown, thousands of students and citizens re-assemble at Jantar Mantar, driven by anger over police brutality.",
            details: [
                "Protest slogans demand the resignation of Union Education Minister Dharmendra Pradhan.",
                "Security forces heavily surround the site but peaceful assembly resumes."
            ]
        },
        {
            time: "July 21, 2026, 01:00 PM",
            type: "system",
            title: "Rejection of Closed-Door Negotiations",
            desc: "CJP spokespersons Saurav Das and Ashutosh Ranka meet Union Minister JP Nadda but reject any private or government-office discussions.",
            details: [
                "CJP insists all negotiations occur publicly at Jantar Mantar or a neutral open venue.",
                "Demanded transparent hearings and structural examination reforms."
            ]
        },
        {
            time: "July 22, 2026, 12:00 PM",
            type: "system",
            title: "Parliamentary Standstill (Monsoon Session Day 3)",
            desc: "Both houses of Parliament experience repeated disruptions and adjournments as opposition leaders demand the Education Minister's resignation.",
            details: [
                "INDIA opposition bloc blocks standard business to demand an exclusive debate on the NEET paper leak.",
                "Government rejects resignation as a pre-condition, stalls legislative work."
            ]
        },
        {
            time: "July 22, 2026, 04:00 PM",
            type: "system",
            title: "Sonam Wangchuk Shifted to Medanta",
            desc: "Climate activist Sonam Wangchuk, on hunger strike since June 28 at Jantar Mantar, is transferred to Medanta Hospital in Gurugram.",
            details: [
                "Transferred under Delhi High Court orders due to critical health status.",
                "Ministers J.P. Nadda and Jitendra Singh visit him to express government willingness for dialogue."
            ]
        },
        {
            time: "July 22, 2026, 06:00 PM",
            type: "system",
            title: "Mobile Internet Suspension Imposed",
            desc: "The Ministry of Home Affairs orders temporary suspension of mobile internet within a 1.5-km radius of Jantar Mantar, citing public safety.",
            details: [
                "Barricades reinforced at Janpath, Parliament Street, and Connaught Place access points.",
                "Communication disruption makes live-streaming and coordination difficult."
            ]
        },
        {
            time: "July 23, 2026, 10:00 AM",
            type: "system",
            title: "PM Announces Fast-Track Courts",
            desc: "Prime Minister Narendra Modi announces the creation of dedicated fast-track courts to try paper leak and exam malpractice cases.",
            details: [
                "PM states: 'Nothing is more important than the welfare and future of our youth.'",
                "Student groups label the announcement a diversionary tactic, keeping resignation demands active."
            ]
        },
        {
            time: "July 23, 2026, 05:00 PM",
            type: "peaceful",
            title: "Peaceful Gathering",
            desc: "Students and citizens gather peacefully at Jantar Mantar to voice their demands. The assembly is orderly, creative, and strictly non-violent.",
            details: [
                "Students from multiple universities join hands.",
                "Placards demanding academic freedom and student welfare displayed.",
                "Strict peaceful protest guidelines followed by all coordinators."
            ]
        },
        {
            time: "July 23, 2026, 06:30 PM",
            type: "system",
            title: "CP Commercial Advisory Issued",
            desc: "New Delhi Traders Association (NDTA) advises all retail shops in Connaught Place to close early due to security risks and police cordons.",
            details: [
                "Heavy police and Rapid Action Force (RAF) deployment reinforced.",
                "Mobile internet suspension extended until 12:00 AM midnight."
            ]
        },
        {
            time: "July 23, 2026, 07:30 PM",
            type: "system",
            title: "Police Mobilization",
            desc: "A large contingent of police forces, barricades, and water cannons are positioned around the protest site. Entry and exit points are restricted.",
            details: [
                "Heavy police presence, including rapid action forces, deployed.",
                "Barricades placed around Jantar Mantar path.",
                "Water cannons brought in."
            ]
        },
        {
            time: "July 23, 2026, 08:15 PM",
            type: "incident",
            title: "Sudden Lathi Charge and Violence",
            desc: "Without warning or clear orders to disperse, the police launch a sudden lathi charge on the peaceful protesters, severely beating students.",
            details: [
                "Protesters were chased and beaten with batons.",
                "Several students sustained head injuries and fractures.",
                "Female students reported severe harassment and inappropriate handling by officers.",
                "Internet disruption reported in the vicinity."
            ]
        },
        {
            time: "July 23, 2026, 09:20 PM",
            type: "system",
            title: "Initial Archive Setup",
            desc: "The digital archive is initiated by Comrade to compile all testimonies, media proof, and emergency resources in a centralized folder.",
            details: [
                "README and initial incident timeline generated.",
                "Dashboard interface compiled.",
                "Emergency medical and legal support details curated."
            ]
        },
        {
            time: "July 23, 2026, 09:30 PM",
            type: "system",
            title: "Nationwide Protest Call for July 24",
            desc: "In response to the evening lathi-charge, CJP and allied student unions issue a nationwide call for protest on Friday, July 24.",
            details: [
                "Campaign theme: 'Every District. One Day. One Demand.'",
                "Protesters demand a complete exam system overhaul and ministerial accountability."
            ]
        }
    ],
    testimonies: [
        {
            text: "We were just sitting in a circle holding candles and singing songs. Suddenly, the police began pushing the barricades over. Before we could even stand up, they started beating us with lathis. They didn't even spare the women. My friend was hit on her shoulder while trying to shield a younger student.",
            author: "Aisha R.",
            meta: "Student Activist, Eyewitness"
        },
        {
            text: "They turned off the streetlights right before charging. It was pitch black, and people were screaming and running in all directions. I saw multiple students bleeding from their heads. When we tried to help them get into ambulances, we were pushed back. It was an absolute abuse of power.",
            author: "Anonymous Student",
            meta: "University of Delhi"
        },
        {
            text: "The police chased us into the corridors near Connaught Place. We were not even protesting there; we were just trying to get to the metro station. They hit me with batons on my legs and back. We had to seek shelter inside a local restaurant that kindly locked their doors to protect us.",
            author: "Sanjay K.",
            meta: "Medical Aspirant, Eyewitness"
        },
        {
            text: "PM Modi's announcement about fast-track courts is just to quieten the anger. Fast-track courts won't change the fact that this year's paper leak ruined our hard work. We want a clean examination system and accountability from the top. We will not back down.",
            author: "Meera S.",
            meta: "NEET Aspirant from Jaipur"
        }
    ],
    media: [
        {
            url: "protest_illustration.jpg",
            title: "Jantar Mantar twilight assembly before the crackdown",
            date: "July 23, 2026, 06:30 PM"
        }
    ]
};

// Document Elements
document.addEventListener("DOMContentLoaded", () => {
    loadCustomData();
    initNavigation();
    initTimeline("all");
    initTestimonies();
    initGallery();
    initFormHandler();
    initLightbox();
});

// Navigation Handling
function initNavigation() {
    const navLinks = document.querySelectorAll(".nav-link");
    const screens = document.querySelectorAll(".screen");

    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            const tabId = link.getAttribute("data-tab");
            if (!tabId) return; // Allow default navigation for external links (like Blogger)

            e.preventDefault();

            // Update active link
            navLinks.forEach(item => {
                if (item.getAttribute("data-tab")) {
                    item.classList.remove("active");
                }
            });
            link.classList.add("active");

            // Update active screen
            screens.forEach(screen => {
                screen.classList.remove("active");
                if (screen.id === `${tabId}-screen`) {
                    screen.classList.add("active");
                }
            });
        });
    });
}

// Timeline Renderer
function initTimeline(filterType = "all") {
    const container = document.getElementById("timeline-container");
    container.innerHTML = "";

    const filteredData = archiveData.timeline.filter(item => {
        if (filterType === "all") return true;
        return item.type === filterType;
    });

    if (filteredData.length === 0) {
        container.innerHTML = `<div class="card"><p>No timeline entries found in this category.</p></div>`;
        return;
    }

    filteredData.forEach(item => {
        const itemEl = document.createElement("div");
        itemEl.className = `timeline-item ${item.type}`;

        let detailsHtml = "";
        if (item.details && item.details.length > 0) {
            detailsHtml = `
                <ul class="timeline-details-list">
                    ${item.details.map(detail => `<li>${detail}</li>`).join("")}
                </ul>
            `;
        }

        itemEl.innerHTML = `
            <div class="timeline-marker"></div>
            <div class="timeline-time">${item.time}</div>
            <div class="timeline-content">
                <h3>${item.title}</h3>
                <p>${item.desc}</p>
                ${detailsHtml}
            </div>
        `;

        container.appendChild(itemEl);
    });

    // Wire up filter buttons
    const filterButtons = document.querySelectorAll(".btn-filter");
    filterButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            filterButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            initTimeline(btn.getAttribute("data-filter"));
        });
    });
}

// Testimonies Renderer
function initTestimonies() {
    const container = document.getElementById("testimonies-container");
    container.innerHTML = "";

    archiveData.testimonies.forEach(item => {
        const card = document.createElement("div");
        card.className = "card testimony-card";
        card.innerHTML = `
            <div>
                <i class="fa-solid fa-quote-left quote-icon"></i>
                <p class="testimony-text">"${item.text}"</p>
            </div>
            <div class="testimony-author">
                <span class="author-name">${item.author}</span>
                <span class="author-meta">${item.meta}</span>
            </div>
        `;
        container.appendChild(card);
    });
}

// Gallery Renderer
function initGallery() {
    const container = document.getElementById("gallery-container");
    container.innerHTML = "";

    archiveData.media.forEach(item => {
        const itemEl = document.createElement("div");
        itemEl.className = "gallery-item";
        itemEl.innerHTML = `
            <img src="${item.url}" alt="${item.title}">
            <div class="gallery-info">
                <div class="gallery-title">${item.title}</div>
                <div class="gallery-date">${item.date}</div>
            </div>
        `;
        itemEl.addEventListener("click", () => showLightbox(item.url, item.title));
        container.appendChild(itemEl);
    });
}

// Lightbox modal handling
function initLightbox() {
    const lightbox = document.getElementById("lightbox");
    const closeBtn = document.querySelector(".close-lightbox");

    closeBtn.addEventListener("click", () => {
        lightbox.style.display = "none";
    });

    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = "none";
        }
    });
}

function showLightbox(src, captionText) {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const caption = document.getElementById("lightbox-caption");

    lightbox.style.display = "block";
    lightboxImg.src = src;
    caption.textContent = captionText;
}

// Load Custom Data from LocalStorage
function loadCustomData() {
    const customTimeline = JSON.parse(localStorage.getItem("customTimeline") || "[]");
    const customTestimonies = JSON.parse(localStorage.getItem("customTestimonies") || "[]");

    customTimeline.forEach(entry => {
        if (!archiveData.timeline.some(item => item.time === entry.time && item.title === entry.title)) {
            archiveData.timeline.push(entry);
        }
    });

    customTestimonies.forEach(testimony => {
        if (!archiveData.testimonies.some(item => item.text === testimony.text && item.author === testimony.author)) {
            archiveData.testimonies.push(testimony);
        }
    });

    // Sort timeline by date
    archiveData.timeline.sort((a, b) => new Date(a.time.replace(/,/g, '')) - new Date(b.time.replace(/,/g, '')));
}

// Form Handler & Live Uploader
function initFormHandler() {
    const form = document.getElementById("incident-form");
    const entryTypeSelect = document.getElementById("entry-type");
    const witnessInfoGroup = document.getElementById("witness-info-group");
    const successCard = document.getElementById("success-message-card");

    // Toggle witness name for testimonies
    entryTypeSelect.addEventListener("change", () => {
        if (entryTypeSelect.value === "testimony") {
            witnessInfoGroup.style.display = "block";
        } else {
            witnessInfoGroup.style.display = "none";
        }
    });

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const type = entryTypeSelect.value;
        const dateTimeVal = document.getElementById("entry-time").value;
        const title = document.getElementById("entry-title").value.trim();
        const details = document.getElementById("entry-details").value.trim();
        const witness = document.getElementById("witness-name").value.trim() || "Anonymous";

        if (!dateTimeVal || !title || !details) return;

        // Format Date Time
        const formattedDateStr = formatDateTimeString(dateTimeVal);

        if (type === "testimony") {
            const newTestimony = {
                text: details,
                author: witness,
                meta: `Student/Witness, Logged ${formattedDateStr.split(",")[0]}`
            };

            // Save to active data
            archiveData.testimonies.unshift(newTestimony);

            // Save to local storage
            const customTestimonies = JSON.parse(localStorage.getItem("customTestimonies") || "[]");
            customTestimonies.unshift(newTestimony);
            localStorage.setItem("customTestimonies", JSON.stringify(customTestimonies));

            // Refresh UI
            initTestimonies();
        } else {
            // Split details by newlines to form details array
            const detailsList = details.split("\n").map(l => l.trim()).filter(l => l.length > 0);

            const newTimelineEntry = {
                time: formattedDateStr,
                type: type,
                title: title,
                desc: detailsList[0] || details,
                details: detailsList.slice(1)
            };

            // Save to active data
            archiveData.timeline.push(newTimelineEntry);

            // Save to local storage
            const customTimeline = JSON.parse(localStorage.getItem("customTimeline") || "[]");
            customTimeline.push(newTimelineEntry);
            localStorage.setItem("customTimeline", JSON.stringify(customTimeline));

            // Re-sort
            archiveData.timeline.sort((a, b) => new Date(a.time.replace(/,/g, '')) - new Date(b.time.replace(/,/g, '')));

            // Refresh UI
            initTimeline("all");
        }

        // Show Success card
        successCard.style.display = "block";
        successCard.scrollIntoView({ behavior: 'smooth' });

        // Reset Form
        form.reset();
        witnessInfoGroup.style.display = "none";
        
        // Reset date to current local time
        resetDefaultTime();

        // Fade out success card after a few seconds
        setTimeout(() => {
            successCard.style.transition = "opacity 0.5s";
            successCard.style.opacity = "0";
            setTimeout(() => {
                successCard.style.display = "none";
                successCard.style.opacity = "1";
            }, 500);
        }, 5000);
    });

    function resetDefaultTime() {
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const day = String(now.getDate()).padStart(2, '0');
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        document.getElementById("entry-time").value = `${year}-${month}-${day}T${hours}:${minutes}`;
    }

    resetDefaultTime();
}

// Helpers
function formatDateTimeString(dateTimeLocalStr) {
    const date = new Date(dateTimeLocalStr);
    
    const months = [
        "January", "February", "March", "April", "May", "June", 
        "July", "August", "September", "October", "November", "December"
    ];
    
    const monthName = months[date.getMonth()];
    const day = String(date.getDate()).padStart(2, '0');
    const year = date.getFullYear();
    
    let hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    
    hours = hours % 12;
    hours = hours ? hours : 12; // 0 should be 12
    const hoursStr = String(hours).padStart(2, '0');
    
    return `${monthName} ${day}, ${year}, ${hoursStr}:${minutes} ${ampm}`;
}
