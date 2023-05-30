import "./App.css";
import { Route, Routes } from "react-router-dom";
import Tournament from "./components/tournament/Tournament";
import AddTournament from "./components/tournament/AddTournament";
import Tournamentview from "./components/tournament/Tournamentview";
import Edittournament from "./components/tournament/Edittournament";
import Participant from "./components/participants/Participant";
import Addparticipant from "./components/participants/Addparticipant";
import Participantview from "./components/participants/Participantview";
import Editparticipant from "./components/participants/Editparticipant";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Tournament />} />
      <Route path="/addtournament" element={<AddTournament />} />
      <Route path="/tournamentview/:id" element={<Tournamentview />} />
      <Route path="/tournamentedit/:id" element={<Edittournament />} />
      <Route path="/participant/:id" element={<Participant />} />
      <Route path="/addparticipant/:id" element={<Addparticipant />} />
      <Route path="/participantview/:id" element={<Participantview />} />
      <Route path="/participantedit/:id" element={<Editparticipant />} />
    </Routes>
  );
}

export default App;
