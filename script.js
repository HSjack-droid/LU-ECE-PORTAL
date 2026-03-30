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