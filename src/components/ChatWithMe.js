// src/components/ChatWithMe.js  
import React, { useState, useEffect } from 'react';  
import { Widget, addResponseMessage } from 'react-chat-widget';  
import 'react-chat-widget/lib/styles.css'; // Ensure the chat widget styles are imported

const ChatWithMe = () => {  
    const [context, setContext] = useState(''); // Store the conversation history  
    const [loading, setLoading] = useState(false);  

    // Welcome message when the chat widget first loads  
    useEffect(() => {  
        addResponseMessage('Hi, You are talking to me!');  
    }, []);  

    // Handle new user messages  
    const handleNewUserMessage = async (newMessage) => {  
        if (!newMessage.trim()) return; // Prevent empty submissions  
        const updatedContext = `${context}${context ? ' ' : ''}${newMessage}`;  
        setContext(updatedContext); // Update context with the new message  
        setLoading(true); // Show loading indicator  

        try {  
            const res = await fetch('http://localhost:3000/api/chat', { // Adjust URL based on your server  
                method: 'POST',  
                headers: {  
                    'Content-Type': 'application/json',  
                },  
                body: JSON.stringify({  
                    text: newMessage, // Send only the new message  
                }),  
            });  

            if (!res.ok) {  
                throw new Error(`Server responded with status ${res.status}`);  
            }

            const rawResponse = await res.json();  
            if (rawResponse && rawResponse.text) {  
                addResponseMessage(rawResponse.text); // Display the bot's response  
                setContext(`${updatedContext} ${rawResponse.text}`); // Update context with the response  
            } else {  
                addResponseMessage('Error: Invalid response from server.');  
            }  
        } catch (err) {  
            console.error('Error fetching response:', err);  
            addResponseMessage('Error: Unable to fetch response. Please try again later.');  
        }  
        setLoading(false); // Hide loading indicator  
    };  

    return (  
        <Widget  
            handleNewUserMessage={handleNewUserMessage}  
            profileAvatar="/195.jpg" // Correct path for public assets  
            title="Saurabh's Chatbot"  
            subtitle={loading ? "Typing..." : "Welcome to my AI-powered chatbot!"} // Display loading indicator in subtitle  
        />  
    );  
};  

export default ChatWithMe;
