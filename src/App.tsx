import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";                                                                                                                                                                     
import Chat from "./components/Chat";
import StrataLogo from "./components/StrataLogo";
// import { Container } from "@mui/material";

export default function App() {
  return (
    <div>
    <header>

    <SignedOut>
      <div style={{display: 'flex'}} >
          <div 
            style={{
              display: 'flex',
              justifyContent:'center',
              alignItems:'center',
              height: '25vw',
              width: '20vw',
              // border: 'dashed grey',
              borderRadius: '5px 5px 5px 0px',
              position: 'relative',
              backgroundColor: '#2E3148',
            }} >
              <div>
                <StrataLogo />
                <h1 style={{fontSize: '24px', color: 'white'}} >STRATA-VCT</h1>
              </div>
          </div>
            <div 
              style={{
                display: 'flex',
                justifyContent:'center',
                alignItems:'center',
                height: '25vw',
                width: '30vw',
                border: 'dashed grey',
                position: 'relative',
              }}
            >
              <SignInButton />
            </div>
      </div>
    </SignedOut>
  
      <SignedIn>
        <UserButton />
        <Chat />
      </SignedIn>
    </header>
    </div>
  );
}