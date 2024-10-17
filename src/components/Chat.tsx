import { useState } from 'react';
import { Box, TextField, Button, Paper, List, ListItem, ListItemText } from '@mui/material';
import Send from '../assets/send.svg';

const Chat = () => {
  const [messages, setMessages] = useState([
    { text: "Hello, how can I help you today?", sender: "Chatbot" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: "User" }]);
      setInput("");
    }
  };

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      height: '80vh',
      width: '55vw',
      padding: 2,
      position: 'absolute',
      right: 0,
      opacity: 0.7,
    }}>
      <Paper sx={{ flexGrow: 1, overflowY: 'auto', borderRadius: "5px 5px 0px 0px", backgroundColor: '#828282', }}>
        <List>
          {messages.map((msg, index) => (
            <ListItem key={index}>
              <ListItemText primary={`${msg.sender}: ${msg.text}`} />
            </ListItem>
          ))}
        </List>
      </Paper>
      <Box sx={{ display: 'flex', backgroundColor: '#828282', margin: 0, borderRadius: '0px 0px 5px 5px', padding: 3 }}>
        <TextField
          value={input}
          onChange={(e) => setInput(e.target.value)}
          fullWidth
          placeholder="Type your message..."
          style={{ backgroundColor: 'white', borderRadius: '5px 0px 0px 5px' }}
        />
        <Button variant="contained" onClick={handleSend} style={{ backgroundColor: 'white', boxShadow: 'none', borderRadius: '0px 5px 5px 0px' }} >
          <img src={Send} style={{ height: '2vw', width: '2vw' }} />
        </Button>
      </Box>
    </Box>
  );
};

export default Chat;
