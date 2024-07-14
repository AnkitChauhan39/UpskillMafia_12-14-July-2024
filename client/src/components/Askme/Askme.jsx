import React, { useCallback, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import SERVER_URL from "../../constants.mjs";
import PrimaryBtn from "../Primary Btn/PrimaryBtn";

const Askme = ({ show, setshow }) => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [showLoader, setShowLoader] = useState(false);

  const getResponse = useCallback(() => {
    fetch(`${SERVER_URL}/chatbot`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userInput }),
    })
      .then((res) => res.json())
      .then((data) => {
        setMessages((prevState) => [
          ...prevState,
          { text: data.output, sender: "backend" },
        ]);
        setShowLoader((prevState) => !prevState);
      });
  }, [userInput]);

  const handleSend = () => {
    if (userInput.trim()) {
      setMessages([...messages, { text: userInput, sender: "user" }]);
      // getBotResponse(userInput);
      setUserInput("");
      setShowLoader((prevState) => !prevState);
      getResponse();
    }
  };
  return (
    <div className="shadow-lg shadow-black border bg-white rounded-2xl w-full h-full flex flex-col">
      <div className="p-4 bg-blue-500 text rounded-t-2xl flex justify-between items-center text-white font-semibold">
        <span>Ask Me Anything</span>
        <span>
          <RxCross2
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
            className={`mb-2 max-w-[90%] p-2 rounded ${
              message.sender === "user"
                ? "self-end bg-green-200"
                : "self-start bg-gray-200"
            }`}
          >
            {message.text}
          </div>
        ))}
        {showLoader && (
          <div className="p-4 bg-gray-200 flex gap-1 w-fit rounded-xl">
            <div className="w-1 bg-black aspect-square rounded-full animate-bounce"></div>
            <div className="w-1 bg-black aspect-square rounded-full animate-bounce delay-100"></div>
            <div className="w-1 bg-black aspect-square rounded-full animate-bounce delay-200"></div>
          </div>
        )}
      </div>
      <div className="flex p-4 border-t border-gray-300 gap-4">
        <input
          type="text"
          onKeyDown={(e) => {
            if (e.key !== "Enter") {
              return;
            }
            handleSend();
          }}
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          className="flex-1 p-2 border border-gray-300 rounded-lg min-w-0"
        />
        <PrimaryBtn
          className="text-white p-2 rounded-full px-4"
          onClick={handleSend}
        >
          Send
        </PrimaryBtn>
      </div>
    </div>
  );
};

export default Askme;
