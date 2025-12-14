document.addEventListener("DOMContentLoaded", function() {
      const countdown = document.getElementById('countdown');
      const birthdayDate = new Date("December 17, 2025 00:00:00");

      function updateCountdown() {
        const now = new Date();
        let diff = birthdayDate - now;
        if (diff <= 0) { countdown.innerHTML = "🎉 Happy Birthday! 🎉"; return; }

        let years = birthdayDate.getFullYear() - now.getFullYear();
        let months = birthdayDate.getMonth() - now.getMonth();
        let days = birthdayDate.getDate() - now.getDate();
        let hours = birthdayDate.getHours() - now.getHours();
        let minutes = birthdayDate.getMinutes() - now.getMinutes();
        let seconds = birthdayDate.getSeconds() - now.getSeconds();

        if (seconds < 0) { seconds += 60; minutes--; }
        if (minutes < 0) { minutes += 60; hours--; }
        if (hours < 0) { hours += 24; days--; }
        if (days < 0) { days += new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate(); months--; }
        if (months < 0) { months += 12; years--; }

        countdown.innerHTML = `
          <div class="time-box">${years}y</div>
          <div class="time-box">${months}m</div>
          <div class="time-box">${days}d</div>
          <div class="time-box">${hours}h</div>
          <div class="time-box">${minutes}m</div>
          <div class="time-box">${seconds}s</div>
        `;
      }

      updateCountdown();
      setInterval(updateCountdown, 1000);
    });

    document.addEventListener("DOMContentLoaded", function() {
    const countdown = document.getElementById('countdown');

    function updateCountdown() {
        const now = new Date();

        // Determine next birthday
        let year = now.getFullYear();
        let birthdayDate = new Date(`December 17, ${year} 00:00:00`);
        if (now > birthdayDate) {
            // If birthday already passed this year, use next year
            birthdayDate = new Date(`December 17, ${year + 1} 00:00:00`);
        }

        // Difference in milliseconds
        let diff = birthdayDate - now;

        // Total seconds
        let totalSeconds = Math.floor(diff / 1000);

        // Calculate time components
        let years = birthdayDate.getFullYear() - now.getFullYear();
        let months = birthdayDate.getMonth() - now.getMonth();
        let days = birthdayDate.getDate() - now.getDate();
        let hours = birthdayDate.getHours() - now.getHours();
        let minutes = birthdayDate.getMinutes() - now.getMinutes();
        let seconds = birthdayDate.getSeconds() - now.getSeconds();

        // Adjust negative values
        if (seconds < 0) { seconds += 60; minutes--; }
        if (minutes < 0) { minutes += 60; hours--; }
        if (hours < 0) { hours += 24; days--; }
        if (days < 0) {
            const prevMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0);
            days += prevMonth.getDate();
            months--;
        }
        if (months < 0) { months += 12; years--; }

        countdown.innerHTML = `
            <div class="time-box">${years}y</div>
            <div class="time-box">${months}m</div>
            <div class="time-box">${days}d</div>
            <div class="time-box">${hours}h</div>
            <div class="time-box">${minutes}m</div>
            <div class="time-box">${seconds}s</div>
        `;
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
});


// Image list (VERY IMPORTANT)
let images = [
    "images/CEO ABDULMUJIB.jpg",
    "images/WhatsApp Image 2025-11-18 at 23.23.03_fe83b488.jpg",
    "images/WhatsApp Image 2025-11-18 at 23.23.04_5c2a4792.jpg",
    "images/WhatsApp Image 2025-11-18 at 23.50.19_48453b5a.jpg",
    "images/WhatsApp Image 2025-11-20 at 22.21.54_60213894.jpg",
    "images/WhatsApp Image 2025-11-20 at 22.21.54_0fc55fe8.jpg",
    "images/img7.jpg",
    "images/img8.jpg"
];

let currentIndex = 0;

// Open lightbox
function openLightbox(index) {
    currentIndex = index;
    document.getElementById("lightbox").style.display = "block";
    document.getElementById("lightbox-img").src = images[currentIndex];
}

// Close lightbox
function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

// Next / Previous
function changeSlide(direction) {
    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    } else if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    document.getElementById("lightbox-img").src = images[currentIndex];
}




function changeSlide(n) {
    currentIndex += n;
    if (currentIndex < 0) currentIndex = images.length - 1;
    if (currentIndex >= images.length) currentIndex = 0;
    document.getElementById("lightbox-img").src = images[currentIndex];
}


document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("wishForm");
    const wishesList = document.getElementById("wishes");

    form.addEventListener("submit", function(e) {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const message = document.getElementById("message").value.trim();

        if(name && message){
            const li = document.createElement("li");
            li.innerHTML = `<strong>${name}:</strong> ${message}`;
            wishesList.appendChild(li);

            // Reset form
            form.reset();
        }
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("wishForm");

    // Replace with your WhatsApp number with country code, e.g., 2348012345678
    const whatsappNumber = "2347044294910";

    form.addEventListener("submit", function(e) {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const message = document.getElementById("message").value.trim();

        if(name && message){
            // Create WhatsApp link
            const text = `Hi Zubair! New birthday wish from ${name}: ${message}`;
            const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

            // Open WhatsApp in new tab/app
            window.open(url, "_blank");

            // Reset form
            form.reset();
        }
    });
});
