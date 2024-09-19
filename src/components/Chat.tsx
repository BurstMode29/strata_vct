import { useState } from 'react';
import { Box, TextField, Button, Paper, List, ListItem, ListItemText } from '@mui/material';

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
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh', padding: 2 }}>
      <Paper sx={{ flexGrow: 1, overflowY: 'auto', marginBottom: 2 }}>
        <List>
          {messages.map((msg, index) => (
            <ListItem key={index}>
              <ListItemText primary={`${msg.sender}: ${msg.text}`} />
            </ListItem>
          ))}
        </List>
      </Paper>
      <Box sx={{ display: 'flex' }}>
        <TextField
          variant="outlined"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          fullWidth
          placeholder="Type your message..."
        />
        <Button variant="contained" onClick={handleSend}>Send</Button>
      </Box>
    </Box>
  );
};

export default Chat;
