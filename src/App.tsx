import { Routes, Route } from "react-router-dom";
import { LoginPage } from "./routes/login/LoginPage";
import { Register } from "./components/register";
import { CreateEmail } from "./routes/emails/CreateEmail";
// import CreateCampaign from './routes/Create-Campaign'
import { SpecificCampaign } from "./components/Specific-campaign";
import { CampaignPage } from "./routes/campaigns/CampaignPage";
import { LandingPage } from "./routes/landingPage";
import { GeneratedEmail } from "./routes/emails/GeneratedEmail";
import Layout from "./Layout";
import { AuthProvider } from "./context/context";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/campaign" element={<CampaignPage />} />
          <Route path="/create-email" element={<CreateEmail />} />
          {/* <Route path="/create-campaign" element={<CreateCampaign />} /> */}
          <Route path="/generated-email" element={<GeneratedEmail />} />
          <Route path="/campaign/:id" element={<SpecificCampaign />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
