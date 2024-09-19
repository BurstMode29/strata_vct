import { SignedIn, SignedOut, SignIn, UserButton } from "@clerk/clerk-react";                                                                                                                                                                     
import Chat from "./components/Chat";

export default function App() {
  return (
    <div>
    <header>
      <SignedOut>
        <SignIn routing="hash" />
      </SignedOut>
      <SignedIn>
        <UserButton />
        <Chat />
      </SignedIn>
    </header>
    </div>
  );
}