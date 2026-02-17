
// Night mode toggle
document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("themeToggle");
    const body = document.body;
    themeToggle.addEventListener("click", () => {
        if (body.classList.contains("night-mode")) {
            body.classList.remove("night-mode");
            themeToggle.textContent = " Night Mode";
            themeToggle.style.backgroundColor = "#3b3d3c";
        } else {
            body.classList.add("night-mode");
            themeToggle.textContent = " Day Mode";
            themeToggle.style.backgroundColor = "#fa1b1b";
        }
    });
});

// Suggestion box
const names = ["Nikhil", "Abhay", "Nishant", "Nitin", "Harsh Kumar", "Anurag", "Gaurav", "Akash Poddar", "Sameer", "Ankit Kumar", "Prashant", "Aaditya", "Gorakhnath", "Ayush Kumar Maharaj", "Akash 2", "Pawan", "Somnath", "Akash", "Ankit", "Aniket", "Hemant", "Prithviraj", "Prince sharma", "Punyam", "Himanshu", "Prince Samariya", "Jaid", "Gulshan", "Dayanand", "Inzamam", "SehajPreet", "Rihan", "Santosh", "Raghav", "Harsh Verma", "Deep", "Ayush Kushwaha", "YashRaj", "Jai kishan", "Vikas", "Lucky", "Yash Shrivastav", "Varun", "Anand", "Anusabu", "Keshav Choudhary", "Aakash Saini", "Ritik", "Ayush Mishra", "Harshit", "Jatin", "Sajal", "Rishabh", "Ranjan", "Anish", "Shivam", "Sumit"];
function showSuggestions(input) {
    const suggestionsDiv = document.getElementById("suggestions");
    suggestionsDiv.innerHTML = "";
    if (input.trim() === "") return;
    const filteredNames = names.filter(name => name.toLowerCase().startsWith(input.toLowerCase()));
    filteredNames.forEach(name => {
        const suggestionItem = document.createElement("div");
        suggestionItem.textContent = name;
        suggestionItem.style.padding = "5px";
        suggestionItem.style.cursor = "pointer";
        suggestionItem.style.backgroundColor = "#75969B";
        suggestionItem.style.borderRadius = "5px";
        suggestionItem.style.margin = "2px 0";
        suggestionItem.style.transition = "background 0.2s";
        suggestionItem.addEventListener("mouseover", () => {
            suggestionItem.style.backgroundColor = "#5a7b8c";
        });
        suggestionItem.style.borderBottom = "1px solid #ddd";
        suggestionItem.addEventListener("click", () => {
            document.getElementById("studentName").value = name;
            suggestionsDiv.innerHTML = "";
        });
        suggestionsDiv.appendChild(suggestionItem);
    });
}

// Result show/reset
function showResult() {
    const name = document.getElementById("studentName").value.trim().toLowerCase();
    const errorMessage = document.getElementById("errorMessage");
    const resultFrame = document.getElementById("resultFrame");
    errorMessage.textContent = "";
    resultFrame.style.display = "none";
    if (name === "") {
        errorMessage.textContent = "Please enter your name.";
        return;
    }
    const filePath = `pdfs/${name}.pdf`;
    fetch(filePath, { method: "HEAD" })
        .then(response => {
            if (response.ok) {
                resultFrame.src = filePath;
                resultFrame.style.display = "block";
            } else {
                errorMessage.textContent = `Result not found for "${name}". Please check the spelling.`;
            }
        })
        .catch(() => {
            errorMessage.textContent = "Error fetching the result. Try again later.";
        });
}
function resetForm() {
    document.getElementById("studentName").value = "";
    document.getElementById("errorMessage").textContent = "";
    document.getElementById("resultFrame").style.display = "none";
}
