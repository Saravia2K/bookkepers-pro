import { Routes as RoutesWrapper, Route } from "react-router-dom";
import IndexPage from "./pages/Index";
import ServicesPage from "./pages/Services";

export default function Routes() {
  return (
    <RoutesWrapper>
      <Route path="/" element={<IndexPage />} />
      <Route path="/services" element={<ServicesPage />} />
    </RoutesWrapper>
  );
}
