useEffect(() => {
    const socket = new WebSocket(process.env.WS_URL);
    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setLiveAttendees(prev => [...prev, data.newAttendee]);
  };
  return () => socket.close();
}, []);
      