import React from "react";
import {trpc} from "../utils/trpc";
import { useSession } from "next-auth/react";

interface Props {
  // Optional props here
  email: string;
}

const ContactPage: React.FC<Props> = ({ email }) => {
  const { data: sessionData } = useSession();
  const checker = trpc.user.getUser.useQuery({email: `${sessionData?.user?.email}`});
  const [message, setMessage] = React.useState("");
  const [status, setStatus] = React.useState<"success" | "error" | "idle">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    
  
    e.preventDefault();
    setStatus("idle");
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
    <div className="bg-white text-black min-h-screen">
      <div className="container mx-auto px-5 py-12">
        <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="border border-gray-500 p-2 rounded-lg w-full"
              type="text"
              readOnly={true}
              id="name"
              value={`${checker.data?.firstName}${checker.data?.lastName}`}
              
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="border border-gray-500 p-2 rounded-lg w-full"
              type="email"
              readOnly={true}
              id="email"
              value={`${checker.data?.email}`}
              
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
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <div className="text-center">
            <button
              className="btn bg-orange-400"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
        {status === "success" && (
          <div className="bg-green-500 text-white p-4 rounded-lg">
            Message sent successfully!
          </div>
        )}
        {status === "error" && (
          <div className="bg-red-500 text-white p-4 rounded-lg">
            There was an error sending your message. Please try again later.
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactPage;
