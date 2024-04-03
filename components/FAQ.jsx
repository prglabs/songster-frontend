'use-client';
import React, { useState } from 'react';
import { useChat } from 'ai/react';

const FAQ = () => {
  const [message, setSearchQuery] = useState('');
  const [response, setResponse] = useState(null); // Initialize response as null

  const { input, handleInputChange, handleSubmit, isLoading, messages } =
    useChat({
      body: {
        message,
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
  const generatedResponse =
    lastMessage?.role === 'assistant' ? lastMessage.content : null;

  return (
    <div className='px-4 py-12 text-white'>
      <div className='mx-auto max-w-3xl'>
        <h3 className='mb-4 justify-center text-center text-3xl font-semibold text-white'>
          Ask Us Anything
        </h3>
        <h2 className='mb-4 justify-center text-center text-xs text-white'>
          (About our business...) media@prglabs.ai
        </h2>
        {/* { * search box here *} */}
      </div>

      {/* Display the search results in a box */}
      {response && (
        <div className='mt-4 bg-black p-4 text-white'>
          <h3 className='text-xl font-semibold text-white'>Response:</h3>
          {generatedResponse}
        </div>
      )}
    </div>
  );
};

export default FAQ;
