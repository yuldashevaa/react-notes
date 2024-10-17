import "./SectionOne.css";

import { useState } from "react";

import { v4 } from "uuid";

const SectionOne = ({ notes, setNotes }) => {
  const [value, setValue] = useState("");
  const [option, setOption] = useState("Note #1")

  console.log(notes);

  return (
    <section className="section__one">
      <div className="container">
        <div className="section__one-content">
          <div className="section__one-information">
            <h1 className="section__one-title">Notes</h1>
            <p className="section__one-text">Add your notes here !</p>
          </div>
          <div className="section__one-actions">
            <textarea
              value={value}
              onChange={(event) => setValue(event.target.value)}
              placeholder="Type your note here..."
              className="section__one-textarea"
            ></textarea>
            <select value={option} onChange={(event) => setOption(event.target.value)} className="section__one-select">
              <option value="Note #1" className="section__one-option">Note #1</option>
              <option value="Note #2" className="section__one-option">Note #2</option>
              <option value="Note #3" className="section__one-option">Note #3</option>
            </select>
            <button
              onClick={() => {
                if (value.trim()) {
                  const filteredNotes = notes.filter((note) => note.name === option)

                  const object = {
                    id: v4(),
                    value,
                    createdAt: new Date()
                  }

                  filteredNotes.map((filteredNote) => {
                    filteredNote.notes.push(object)
                  })

                  setValue("")
                }
              }}
              className="section__one-button"
            >
              Submit
            </button>
          </div>
          <div className="section__one-notes">
            {notes.map((note) => (
              <div key={note.id} className="section__one-note">
                <p className="section__one-description">{note.name}</p>
                <ul className="section__one-list">
                  {note.notes.map((item) => (
                    <li key={item.id}>{item.value}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionOne;
