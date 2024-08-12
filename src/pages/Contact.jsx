import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm(formData);

    if (Object.keys(newErrors).length === 0) {
      // No errors, submit the form
      e.target.submit();
    } else {
      // Set the errors state to display them
      setErrors(newErrors);
    }
  };

  const validateForm = (data) => {
    let validationErrors = {};

    if (!data.name) {
      validationErrors.name = 'Name is required';
    }
    if (!data.email) {
      validationErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      validationErrors.email = 'Email is invalid';
    }
    if (!data.message) {
      validationErrors.message = 'Message is required';
    }

    return validationErrors;
  };

  return (
    <div name="contact" className='w-full h-screen bg-primary flex justify-center items-center p-4'>
      <div className='max-w-[800px] w-full flex flex-col'>
        <div className='pb-8'>
          <p className='text-300 text-[#800000] text-4xl font-bold inline border-600' style={{ textDecoration:'underline', textDecorationColor: '#800000'}}>Contact</p>
          <p className='text-gray-300 py-4'>Submit the form to get in touch with me or you can directly reach me out at <span className='text-[#800000]'>mearyalbikash@gmail.com</span></p>
        </div>

        <form method="POST" action='https://getform.io/f/blljenmb' onSubmit={handleSubmit}>
          <div className='space-y-2'>
            <div className='flex flex-col gap-1 text-start'>
              <label className='text-gray-300'>Name</label>
              <input
                className={`rounded-md bg-primary text-gray-300 border-2 ${errors.name ? 'border-red-500' : 'border-gray-300'} p-2`}
                type="text"
                name="name"
                placeholder='John Smith'
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <span className='text-red-500 text-sm'>{errors.name}</span>}
            </div>

            <div className='flex flex-col gap-1 text-start'>
              <label className='text-gray-300'>Email</label>
              <input
                type="email"
                name='email'
                placeholder='john@smith.com'
                className={`rounded-md text-gray-300 bg-primary border-2 ${errors.email ? 'border-red-500' : 'border-gray-300'} p-2`}
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <span className='text-red-500 text-sm'>{errors.email}</span>}
            </div>

            <div className='flex flex-col gap-1 text-start'>
              <label className='text-gray-300'>Message</label>
              <textarea
                type="text"
                name='message'
                placeholder='Your message here...'
                className={`rounded-md text-gray-300 bg-primary border-2 ${errors.message ? 'border-red-500' : 'border-gray-300'} p-2`}
                value={formData.message}
                onChange={handleChange}
              />
              {errors.message && <span className='text-red-500 text-sm'>{errors.message}</span>}
            </div>
          </div>

          <button className='bg-white w-full rounded-md mt-8 font-semibold py-3 text-lg text-gray-700 hover:bg-[#800000] hover:text-white'>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
