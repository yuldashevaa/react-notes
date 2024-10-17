import "./Main.css";

import SectionOne from "./_components/SectionOne/SectionOne";

const Main = ({ notes, setNotes }) => {
  return (
    <main className="main">
      <SectionOne notes={notes} setNotes={setNotes} />
    </main>
  );
};

export default Main;
