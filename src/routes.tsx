import { Routes as RoutesWrapper, Route } from "react-router-dom";
import App from "./App";

export default function Routes() {
  return (
    <RoutesWrapper>
      <Route path="/" element={<App />} />
    </RoutesWrapper>
  );
}
