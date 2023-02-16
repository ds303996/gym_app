import { BrowserRouter } from "react-router-dom";
import { AppProvider } from "./providers/app";
import { AppRoutes } from "./routes";
import { AppLayout } from "./views/layout";
import { initializeAxios } from "./lib/axios";

function App() {
  initializeAxios();
  return (
    <BrowserRouter>
      <AppProvider>
        <AppLayout>
          <AppRoutes/>
        </AppLayout>
      </AppProvider>
    </BrowserRouter>
  );
}

export default App;
