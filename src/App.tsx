import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import Chat from "./components/Chat";
import StrataLogo from "./components/StrataLogo";
import Vector from "./assets/vector.svg";
import { AppBar, BottomNavigation } from "@mui/material";
// import { Container } from "@mui/material";

export default function App() {
  return (
    <div>
      <AppBar position="static" style={{ backgroundColor: 'transparent', boxShadow: 'none' }} >
        <div style={{ paddingLeft: 7, display: 'flex', alignContent: 'center' }} >
          <p style={{ padding: "0px 5px 0px 5px", fontWeight: 'bold', color: '#606692' }} >VALORANT</p>
          <StrataLogo size="1.5vw" />
          <p style={{ padding: "0px 5px 0px 5px", fontWeight: 'bold', color: '#FFFFFF' }}>DIGITAL ASSISTANT</p>
          <div style={{ position: 'absolute', right: 5, top: '12px' }} >
            <UserButton />
          </div>
        </div>
      </AppBar>
      <header style={{
        minHeight: '85vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }} >
        <SignedOut>
          <div style={{ display: 'flex' }} >
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '25vw',
                width: '20vw',
                borderRadius: '5px 0px 0px 5px',
                position: 'relative',
                backgroundColor: '#2E3148',
                opacity: 0.7,
              }} >
              <div>
                <StrataLogo size="10vw" />
                <h1 style={{ fontSize: '24px', color: 'white' }} >STRATA-VCT</h1>
              </div>
            </div>
            <div
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                height: '25vw',
                width: '35vw',
                position: 'relative',
                color: "white",
                backgroundColor: "#828282",
                borderRadius: '0px 5px 5px 0px',
                opacity: 0.7,
              }}
            >
              <div style={{ padding: 15 }} >
                <h2 style={{ fontSize: "2vw" }} >Empowering your Valorant experience...</h2>
                <SignInButton />
                <p
                  style={{
                    fontSize: 12,
                    paddingTop: 12,
                    // fontWeight: "bold",
                  }}
                >
                  Welcome to Valorant Strategic Assistant AI
                  your dedicated digital assistant, here to enhance your Valorant journey.
                  Our specialized AI is designed to assist with team building and provide detailed information about Valorant esports players.
                  Let us elevate your gaming experience with our personalized assistance.
                </p>
              </div>
            </div>
          </div>
        </SignedOut>
        <img src={Vector} style={{position: 'absolute', height: '45vw', width: '70vw', right: 0, zIndex: -1}} />
        <SignedIn>
          <Chat />
        </SignedIn>
      </header>
      <BottomNavigation style={{ backgroundColor: 'transparent' }} >
        <p>Powered By AWS-Bedrock</p>
      </BottomNavigation>
    </div>
  );
}