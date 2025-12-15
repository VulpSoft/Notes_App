// create a new note

// delete a note

// two views: main page, and details of a note
// navigate from one to the other

// edit note

// save note

// 1. Stan aplikacji
let notes = [];
let currentNote = null; // notatka aktualnie edytowana lub przeglądana
let currentView = "main"; // main | details

// 2. Fetch API - helper
async function apiRequest(url, method="GET", body=null) {
    const options = { method, headers: {} };
    if(body) {
        options.headers["Content-Type"] = "application/json";
        options.body = JSON.stringify(body);
    }
    const res = await fetch(url, options);
    if(!res.ok) throw new Error(await res.text());
    return res.json().catch(()=>null);
}

// 3. Funkcje CRUD
async function createNote(content) {
    const note = await apiRequest("/notes", "POST", { content });
    notes.push(note);
    renderMainView();
}

// 4. Renderowanie widoków
function renderMainView() {
    currentView = "main";
    // pokaż listę notatek
    // dodaj listener na kliknięcie notatki -> renderDetailsView(note)
}

function renderDetailsView(note) {
    currentView = "details";
    currentNote = note;
    // pokaż content
    // dodaj przycisk save -> updateNote
    // dodaj przycisk delete -> deleteNote
    // dodaj przycisk back -> renderMainView
}

// 5. Event Listeners
document.getElementById("add-btn").addEventListener("click", () => {
    const content = document.getElementById("new-content").value;
    createNote(content);
})