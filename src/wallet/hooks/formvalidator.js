const validate = () => {
    const errors = {};
    if (!formData.title) errors.title = 'Required';
    if (formData.ticketTypes.some(t => t.price <= 0)) 
      errors.tickets = 'Invalid pricing';
    return errors;
  };
  const ThemeToggle = () => {
    const [darkMode, setDarkMode] = useLocalStorage('darkMode', false);
    return (
        button onClick={() => setDarkMode(!darkMode)}>
      {darkMode ? '☀️' : '🌙'}
    </button>
  );
  const exportToCSV = () => {
    const headers = ['Name', 'Date', 'Attendees'];
    const csv = [headers, ...events.map(e => 
      [e.title, e.date, e.attendees])].join('\n');
    downloadFile(csv, 'events.csv');
  }
};