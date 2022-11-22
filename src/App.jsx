import { AuthProvider } from "./contexts/Auth/index.jsx";
import Rotas from "./routes/Rotas.jsx";

function App() {
    return (
        <AuthProvider>
            <Rotas />
        </AuthProvider>
    );
}
export default App;