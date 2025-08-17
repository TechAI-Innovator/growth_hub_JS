document.addEventListener("DOMContentLoaded", function() {    
    // STEP 1: Create an array of profile objects
    const profiles = [
    { name: "Alice Johnson", age: 25, sex: "Female", occupation: "Designer" },
    { name: "Bob Smith", age: 30, sex: "Male", occupation: "Engineer" },
    { name: "Charlie Brown", age: 28, sex: "Male", occupation: "Doctor" },
    { name: "Diana Prince", age: 32, sex: "Female", occupation: "Teacher" },
    { name: "Ethan Hunt", age: 35, sex: "Male", occupation: "Agent" },
    { name: "Fiona White", age: 27, sex: "Female", occupation: "Nurse" },
    { name: "George Black", age: 29, sex: "Male", occupation: "Lawyer" },
    { name: "Hannah Blue", age: 24, sex: "Female", occupation: "Artist" },
    { name: "Ian Green", age: 33, sex: "Male", occupation: "Developer" },
    { name: "Julia Red", age: 26, sex: "Female", occupation: "Writer" }
    ];

    // STEP 2: Select DOM elements
    const container = document.getElementById("profileContainer");
    const showMoreBtn = document.getElementById("showMore");
    const showLessBtn = document.getElementById("showLess");

    // Modal elements
    const modal = document.getElementById("profileModal");
    const closeModalBtn = document.getElementById("closeModal");
    const modalName = document.getElementById("modalName");
    const modalAge = document.getElementById("modalAge");
    const modalSex = document.getElementById("modalSex");
    const modalOccupation = document.getElementById("modalOccupation");

    // STEP 3: Track visible profiles
    let visibleCount = 4;

    // STEP 4: Render profiles (show only name + occupation on card)
    function renderProfiles() {
    container.innerHTML = "";

    for (let i = 0; i < visibleCount && i < profiles.length; i++) {
        const card = document.createElement("div");
        card.classList.add("card");

        // Show only name + occupation in the card
        card.innerHTML = `
        <h3>${profiles[i].name}</h3>
        <p><strong>Occupation:</strong> ${profiles[i].occupation}</p>
        `;

        // Add click event → open modal with full info
        card.addEventListener("click", () => {
        openModal(profiles[i]);
        });

        container.appendChild(card);
    }

    // Handle button visibility
    if (visibleCount >= profiles.length) {
        showMoreBtn.style.display = "none";
        showLessBtn.style.display = "inline-block";
    } else if (visibleCount <= 4) {
        showLessBtn.style.display = "none";
        showMoreBtn.style.display = "inline-block";
    } else {
        showMoreBtn.style.display = "inline-block";
        showLessBtn.style.display = "inline-block";
    }
    }

    // STEP 5: Function to open modal and fill it with profile data
    function openModal(profile) {
    modalName.textContent = profile.name;
    modalAge.textContent = profile.age;
    modalSex.textContent = profile.sex;
    modalOccupation.textContent = profile.occupation;

    modal.style.display = "block"; // show modal
    }

    // STEP 6: Function to close modal
    function closeModal() {
    modal.style.display = "none";
    }

    // STEP 7: Button logic for more/less
    showMoreBtn.addEventListener("click", () => {
    visibleCount += 4;
    renderProfiles();
    });

    showLessBtn.addEventListener("click", () => {
    visibleCount -= 4;
    renderProfiles();
    });

    // STEP 8: Modal close events
    closeModalBtn.addEventListener("click", closeModal);

    // Close modal if clicking outside the modal-content
    window.addEventListener("click", (event) => {
    if (event.target === modal) {
        closeModal();
    }
    });

    // STEP 9: Initial render
    renderProfiles();

});