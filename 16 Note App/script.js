
const button = document.querySelector("button");
const app = document.querySelector("#app");

getNotes().forEach((note) => {
    const noteElement = createNote(note.id, note.content);
    app.insertBefore(noteElement, button);
})


function createNote(id, content) {
    const textarea = document.createElement("textarea");
    textarea.classList.add("note");
    textarea.placeholder = "Empty Note";
    textarea.cols = 30;
    textarea.rows = 10;
    textarea.value = content;

    textarea.addEventListener("dblclick", () => {
        const warning = confirm("Do you want to delete this note? ");

        if(warning) {
            deleteNote(id, textarea)
        }
    })

    textarea.addEventListener("input", () => {
        updateNote(id, textarea.value);
    })

    return textarea;
}

function deleteNote(id, element) {
    const notes = getNotes().filter((note) => note.id != id);
    saveNote(notes);
    app.removeChild(element)
}

function updateNote(id, inputValue) {
    const notes = getNotes();
    const target = notes.filter((note) => note.id == id)[0];
    target.content = inputValue;
    saveNote(notes)
}

function addNote() {
    const notes = getNotes();
    const notObj = {
        id: Math.floor(Math.random() * 100000),
        content: ""
    }

    const note = createNote(notObj.id, notObj.content);
    app.insertBefore(note, button);

    notes.push(notObj);

    saveNote(notes);
}


function saveNote(notes) {
    localStorage.setItem("note-app", JSON.stringify(notes));
}

function getNotes() {
    const result = JSON.parse(localStorage.getItem("note-app") || "[]");
    return result;
}

button.addEventListener("click", addNote);