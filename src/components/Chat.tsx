import { useState, useEffect } from 'react';
import { Box, TextField, Button, Paper, List, ListItem, ListItemText } from '@mui/material';
import Send from '../assets/send.svg';
import axios from 'axios';

const Chat = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState("");

  const fetchAPI = async () => {
    try {
      const response = await axios.get("http://localhost:3000/ai-response");
      const data = Array.isArray(response.data) ? response.data : [];
      setMessages(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching messages:", error);
      setMessages([]); 
    }
  }

  const requestData = async () => {
    try {
      const response = await axios.post("http://localhost:3000/ai-response", { input });
      console.log("Request sent:", { input });
      console.log("Response data:", response.data);
      const replyMessage = response.data.reply ? [response.data.reply] : [];
      setMessages(replyMessage);
    } catch (error) {
      console.error("Error sending message");
    }
  }

  const handleSend = () => {
    if (input.trim()) {
      setInput("");
      requestData();
    }
  };

  useEffect(() => {
    fetchAPI()
  }, [])

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
          {Array.isArray(messages) ? (
            messages.map((data, index) => (
              <ListItem key={index}>
                <ListItemText primary={typeof data === "string" ? data : JSON.stringify(data, null, 2)} />
              </ListItem>
            ))
          ) : (
            <ListItem>
              <ListItemText primary="No messages available" />
            </ListItem>
          )}
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
