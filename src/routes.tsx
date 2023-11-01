import { Routes as RoutesWrapper, Route } from "react-router-dom";
import IndexPage from "./pages/Index";

export default function Routes() {
  return (
    <RoutesWrapper>
      <Route path="/" element={<IndexPage />} />
    </RoutesWrapper>
  );
}
