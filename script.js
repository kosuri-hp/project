const packages = [
  { name: "tirupathi", description: "Tirupati, a hill town in Andhra Pradesh, is renowned for the Shri Venkateswara Swamy Temple, also known as the Tirumala Temple.", image: "./tirupathi.jpg" },
  { name: "arunachalam", description: "The Arunachalam Temple in Tiruvannamalai is open from 5:00 AM to 12:30 PM and 3:30 PM to 9:30 PM. Aartis are at 6:00 AM and 9:00 PM.", image: "./arunachalam.jpg" },
  { name: "vijayawada", description: "Explore Kanaka Durga Temple, Kondapalli Fort, and enjoy river activities on the Krishna River in this vibrant Andhra city.", image: "./vijayawada.jpg" },
];
function renderPackages(filter = "") {
  const container = document.getElementById("packages-container");
  container.innerHTML = ""; // Clear previous content
  const filtered = packages.filter(pkg =>
    pkg.name.toLowerCase().includes(filter.toLowerCase())
  );
  filtered.forEach(pkg => {
    const div = document.createElement("div");
    div.className = "package";
    
    // Create HTML structure
    div.innerHTML = `
      <h3>${pkg.name}</h3>
      <p>${pkg.description}</p>
      <img src="${pkg.image}" alt="${pkg.name}" class="package-image" />
    `;
    
    // Add click event to show image on package click
    div.addEventListener("click", () => {
      alert(`More info about ${pkg.name}` );
      // You can also open a modal or show an image on click
    });

    // Append the created package div to the container
    container.appendChild(div);
  });
}

function searchDestinations() {
  const query = document.getElementById("search").value;
  renderPackages(query); // Re-render with the search query
}

document.getElementById("booking-form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Tour booked successfully!");
});


window.onload = () => renderPackages(); // Load all packages on page load
