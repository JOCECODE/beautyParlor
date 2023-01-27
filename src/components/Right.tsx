import React from "react";

interface Props {
  // Optional props here
  email: string

}

const ContactPage: React.FC<Props> = ({ email }) => {
  const [name, setName] = React.useState('');
  const [emailAddress, setEmailAddress] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [status, setStatus] = React.useState<'success' | 'error' | 'idle'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('idle');
    // try {
    //   await axios.post('/send-email', {
    //     name,
    //     email,
    //     message,
    //     to: email
    //   });
    //   setStatus('success');
    // } catch (err) {
    //   setStatus('error');
    // }
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <div className="container text-black mx-auto px-5 py-12">
        <h1 className="text-3xl text-white font-bold mb-6">Contact Us</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="border border-gray-500 p-2 rounded-lg w-full"
              type="text"
              id="name"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="border border-gray-500 p-2 rounded-lg w-full"
              type="email"
              id="email"
              value={emailAddress}
              onChange={e => setEmailAddress(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              className="border border-gray-500 p-2 rounded-lg w-full h-32"
              id="message"
              value={message}
              onChange={e => setMessage(e.target.value)}
            />
          </div>
          <div className="text-center">
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
        {status === 'success' && (
<div className="bg-green-500 text-white p-4 rounded-lg">
  Message sent successfully!
</div>
)}
{status === 'error' && (
<div className="bg-red-500 text-white p-4 rounded-lg">
  There was an error sending your message. Please try again later.
</div>
)}
      </div>
    </div>
  );
};

export default ContactPage;

