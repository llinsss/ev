export const fetchAISuggestions = async (eventTitle) => {
    const response = await fetch('https://api.openai.com/v1/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.OPENAI_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: "text-davinci-003",
        prompt: `Suggest event details for: ${eventTitle}`,
        max_tokens: 150
      })
    });
    return processAIResponse(response);
  };