import Routes from "./Components/Routes";
import { LoadingProvider } from "./context/LoadingContext";
import { ProfileProvider } from "./context/ProfileContext";
import { SectionProvider } from "./context/SectionContext";

function App() {
  return (
    <>
      <ProfileProvider>
        <SectionProvider>
          <LoadingProvider>
            <Routes />
          </LoadingProvider>
        </SectionProvider>
      </ProfileProvider>
    </>
  );
}

export default App;
