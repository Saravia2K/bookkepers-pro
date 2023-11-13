import { Routes as RoutesWrapper, Route } from "react-router-dom";
import IndexPage from "./pages/Index";
import ServicesPage from "./pages/Services";
import ConsultingPage from "./pages/Consulting";
import TeamPage from "./pages/Team";

export default function Routes() {
  return (
    <RoutesWrapper>
      <Route path="/" element={<IndexPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/consulting" element={<ConsultingPage />} />
      <Route path="/team" element={<TeamPage />} />
    </RoutesWrapper>
  );
}
