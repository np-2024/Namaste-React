import React from "react";

const Contact = () => {
  return (
    <div className="mt-14 p-4">
      <h1 className="text-2xl font-bold mb-3">Contact Us Page</h1>
      <form className="flex flex-col items-start gap-3 w-3/12">
        <input
          className="border border-black w-full p-2"
          type="text"
          placeholder="name"
        />
        <input
          className="border border-black w-full p-2"
          type="text"
          placeholder="message"
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Contact;
