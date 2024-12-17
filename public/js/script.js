// JavaScript for changing the image on arrow click
document.addEventListener("DOMContentLoaded", () => {
    const mainImage = document.getElementById("main-image");
    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");
  
    // Initial state
    let currentIndex = 1; // Starts with 1
    const maxIndex = 9; // Total images
  
    // Update image function
    const updateImage = (index) => {
      mainImage.src = `../images/flooring/binnenvloering${index}.jpg`;
      mainImage.alt = `Binnenvloer parket ${index}`;
    };
  
    // Next button click event
    nextBtn.addEventListener("click", () => {
      currentIndex = currentIndex === maxIndex ? 1 : currentIndex + 1;
      updateImage(currentIndex);
    });
  
    // Previous button click event
    prevBtn.addEventListener("click", () => {
      currentIndex = currentIndex === 1 ? maxIndex : currentIndex - 1;
      updateImage(currentIndex);
    });
  });
  