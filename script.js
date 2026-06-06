function searchFaculty() {
    // 1. Get the text the user typed
    let input = document.getElementById('facultySearch').value.toUpperCase();
    
    // 2. Get the table and all its rows
    let table = document.querySelector("table");
    let tr = table.getElementsByTagName("tr");

    // 3. Loop through all rows (starting from the second row, index 1)
    for (let i = 1; i < tr.length; i++) {
        let tdName = tr[i].getElementsByTagName("td")[0]; // The "Name" column
        let tdSub = tr[i].getElementsByTagName("td")[2];  // The "Specialization" column
        
        if (tdName || tdSub) {
            let textValue = (tdName.textContent || tdName.innerText) + 
                            (tdSub.textContent || tdSub.innerText);
            
            // 4. If the text matches, show the row; otherwise, hide it
            if (textValue.toUpperCase().indexOf(input) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}
const toggleBtn = document.getElementById('darkModeToggle');
const body = document.body;

// 1. Check if the user had Dark Mode on last time they visited
if (localStorage.getItem('dark-mode') === 'enabled') {
    body.classList.add('dark-theme');
    toggleBtn.innerHTML = "☀️ Light Mode";
}

toggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    
    // 2. Save the preference
    if (body.classList.contains('dark-theme')) {
        toggleBtn.innerHTML = "☀️ Light Mode";
        localStorage.setItem('dark-mode', 'enabled');
    } else {
        toggleBtn.innerHTML = "🌙 Dark Mode";
        localStorage.setItem('dark-mode', 'disabled');
    }
});
// Automatically shows today's date
const dateElement = document.getElementById('lastUpdated');
const today = new Date();
const options = { year: 'numeric', month: 'long', day: 'numeric' };
dateElement.innerText = "Portal Last Updated: " + today.toLocaleDateString(undefined, options);
function toggleChat() {
  const container = document.getElementById('chat-widget-container');
  
  if (container.classList.contains('chat-closed') || !container.classList.contains('chat-open')) {
    container.classList.remove('chat-closed');
    container.classList.add('chat-open');
  } else {
    container.classList.remove('chat-open');
    container.classList.add('chat-closed');
  }
}

// Set initial state on page load
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById('chat-widget-container').classList.add('chat-closed');
});
document.addEventListener("DOMContentLoaded", function() {
    // 1. Fetch the document's built-in last modified timestamp
    let lastModifiedDate = new Date(document.lastModified);
    
    // 2. Format the date into a clean, readable string (e.g., "June 7, 2026")
    let options = { year: 'numeric', month: 'long', day: 'numeric' };
    let formattedDate = lastModifiedDate.toLocaleDateString('en-US', options);
    
    // 3. Find your empty HTML paragraph and inject the text into it
    const lastUpdatedElement = document.getElementById("lastUpdated");
    if (lastUpdatedElement) {
        lastUpdatedElement.textContent = "Last Updated: " + formattedDate;
    }
});
