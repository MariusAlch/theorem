import { Layout } from "../components/Layout";
import { ProtectedRoute } from "../components/ProtectedRoute";

export default ProtectedRoute(() => {
  return <Layout page="team-feedback">hello world</Layout>;
});
