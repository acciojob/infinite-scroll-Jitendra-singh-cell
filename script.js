//your code here!

// Select the unordered list element where the list items will go
const infiList = document.getElementById('infi-list');

// Function to add items to the list
function addItems() {
  for (let i = 0; i < 2; i++) {
    const li = document.createElement('li');
    li.textContent = `Item ${infiList.children.length + 1}`; // Set text based on current list size
    infiList.appendChild(li);
  }
}

// Initialize with 10 items by calling addItems 5 times (since we add 2 items per call)
for (let i = 0; i < 5; i++) {
  addItems();
}

// Function to check if the user has reached the bottom of the list
function checkScroll() {
  const scrollPosition = infiList.scrollTop + infiList.clientHeight;
  const scrollHeight = infiList.scrollHeight;

  if (scrollPosition >= scrollHeight) {
    // If the user has scrolled to the bottom, add more items
    addItems();
  }
}

// Add an event listener for scrolling
infiList.addEventListener('scroll', checkScroll);
