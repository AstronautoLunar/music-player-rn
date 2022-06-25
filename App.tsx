import { StatusBar } from 'expo-status-bar';
import RouterNavigationScreen from './src/router';

/**CONTEXTS */
import { PasswordProvider } from "./src/contexts/PasswordContext";

export default function App() {
  return (
    <>
      <StatusBar style="dark"/>
      <PasswordProvider>
        <RouterNavigationScreen/>
      </PasswordProvider>
    </>
  );
}

