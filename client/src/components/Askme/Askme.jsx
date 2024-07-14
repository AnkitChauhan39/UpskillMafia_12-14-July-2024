import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const Askme = ({show,setshow}) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: "user" }]);
      // getBotResponse(input);
      setInput("");
    }
  };
  return (
    <div className=" shadow-lg shadow-black border bg-white rounded-2xl w-[400px] h-[500px] flex flex-col ">
      <div className="p-4 bg-blue-500 text rounded-t-2xl flex justify-between items-center text-white font-semibold">
        <span>
        Ask Me Anything
        </span>
        <span>
          <IoIosArrowDown
            className="text-[24px] cursor-pointer "
            onClick={() => {
              setshow(!show);
            }}
          />
        </span>
      </div>
      <div className="flex flex-col p-4 h-[85%] overflow-y-auto">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`mb-2 p-2 rounded ${
              message.sender === "user"
                ? "self-end bg-green-200"
                : "self-start bg-gray-200"
            }`}
          >
            {message.text}
          </div>
        ))}
      </div>
      <div className="flex p-4 border-t border-gray-300">
        <input
          type="text"
          onKeyDown={(e) => {
            if(e.key !== "Enter" )
              {
                return;
              }
              handleSend();
          }}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 p-2 border border-gray-300 rounded-lg"
        />
        <button
          onClick={handleSend}
          
          className="ml-2 p-2 px-6 bg-blue-500 font-semibold text-white rounded-full"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Askme;
