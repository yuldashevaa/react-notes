import { useState } from "react";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

const App = () => {
  const [notes, setNotes] = useState([
    { id: 1, name: "Note #1", notes: [] },
    {
      id: 2,
      name: "Note #2",
      notes: [],
    },
    {
      id: 3,
      name: "Note #3",
      notes: [],
    },
  ]);

  return (
    <div className="wrapper">
      <Header />
      <Main notes={notes} setNotes={setNotes} />
      <Footer />
    </div>
  );
};

export default App;
