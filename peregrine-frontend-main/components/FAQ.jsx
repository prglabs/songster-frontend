"use-client";
import React, { useState } from "react";
import { useChat } from 'ai/react';

const FAQ = () => {
  const [message, setSearchQuery] = useState("");
  const [response, setResponse] = useState(null); // Initialize response as null

  const { input, handleInputChange, handleSubmit, isLoading, messages } =
    useChat({
      body: {
        message
      },
      onResponse() {
        scrollToBios();
      },
    });

  const onSubmit = (e) => {
    setBio(input);
    handleSubmit(e);
  };

  const lastMessage = messages[messages.length - 1];
  const generatedResponse = lastMessage?.role === "assistant" ? lastMessage.content : null;

  return (
    <div className="px-4 py-12 text-white">
      <div className="max-w-3xl mx-auto">
        <h3 className="text-white text-center justify-center text-3xl font-semibold mb-4">
          Ask Us Anything
        </h3>
        <h2 className="text-white text-center justify-center text-xs mb-4">
          (About our business...) media@prglabs.ai
        </h2>
        {/* { * search box here *} */}
        </div>

        {/* Display the search results in a box */}
        {response && (
          <div className="bg-black text-white p-4 mt-4">
            <h3 className="text-xl text-white font-semibold">Response:</h3>
            {generatedResponse}
          </div>
        )}

        
      </div>
  );
};

export default FAQ;
