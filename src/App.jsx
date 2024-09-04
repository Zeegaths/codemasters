import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import PersonalInfo from './components/PersonalInfo';
import SelectPlan from './components/SelectPlan'; 
import AddOns from './components/AddOns';
import Summary from './components/Summary';
import ThankYou from './components/ThankYou';

function App() {
  return (
    <Router>
      <Routes>
        {/* Define the route for the PersonalInfo page */}
        <Route path="/" element={<PersonalInfo />} />

        {/* Define the route for the SelectPlan page */}
        <Route path="/select-plan" element={<SelectPlan />} />


        <Route path="/addons" element={<AddOns />} />

        <Route path="/summary" element={<Summary />} />

        <Route path="/thankyou" element={<ThankYou />} />

        
      </Routes>
    </Router>
  );
}

export default App;
