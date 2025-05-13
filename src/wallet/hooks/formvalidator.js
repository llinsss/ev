const validate = () => {
    const errors = {};
    if (!formData.title) errors.title = 'Required';
    if (formData.ticketTypes.some(t => t.price <= 0)) 
      errors.tickets = 'Invalid pricing';
    return errors;
  };