import { useEffect, useState } from "react";

function InputFields() {
  const [query, setQuery] = useState("");
  const [translation, setTranslation] = useState("");
  const [copyFromTranslator,setCopyFromTranslator]=useState("")

  function handleTranslateCopy() {
    const val = document.querySelector("#query")?.value;

    if (!val) {
        alert("No text found to copy.");
        return;
    }

    navigator.clipboard.writeText(val).then(() => {
        alert(`Copied: ${val}`);
    }).catch(err => {
        console.error("Could not copy text: ", err);
        alert("Failed to copy text.");
    });


    setCopyFromTranslator(val);
}

function handleCopySecond(){
    const val = document.querySelector("#translation")?.innerText
    if(!val){
        alert("you can not copy any text")
        return
    }
    navigator.clipboard.writeText(val).then(()=>{
        alert(`Copied : ${val}`)
    }).catch((err)=>{
        console.log("something went wrong ", err)
    })
}
  function handleSubmit(e) {
    e.preventDefault();
    const inputQuery = document.querySelector("#query").value;
    setQuery(inputQuery);
  }
  async function ApiFetching() {
    if (!query) return; 
    try {
      const res = await fetch(
        `https://api.mymemory.translated.net/get?q=${query}&langpair=en|fr`
      );
      const result = await res.json();
      setTranslation(result.responseData.translatedText); 
    } catch (error) {
      console.error("Error fetching translation:", error);
    }
  }
  useEffect(() => {
    ApiFetching();
  }, [query]);

  return (
    <>
      <div className="w-[100vw] h-[60vh] gap-20 text-white flex justify-center">
        <div className="w-[40%] bg-[#394150] h-[100%] rounded-lg ">
          <div className="w-[100%] h-[15%] p-2 mt-2 flex justify-center items-center gap-10">
            <h1 className="text-[#4D5562] font-bold">Detect Language</h1>
            <h1 className="p-3 rounded-lg bg-[#4D5562] cursor-pointer font-bold ">
              English
            </h1>
            <h1 className="text-[#4D5562] font-bold">French</h1>
            <select className="bg-[#394150] text-[#4D5562] font-bold">
              <option value="" className="text-[#4D5562] font-bold">
                Spanish
              </option>
            </select>
          </div>
          <div className="w-[100%] mt-2 flex justify-center">
            <hr className="w-[80%] center" />
          </div>
          <form action="" onSubmit={handleSubmit}>
            <div className="w-[100%] mt-5 flex justify-center">
              <textarea
                id="query"
                name="query"
                className="focus:outline-none bg-[#394150]"
                cols={60}
                rows={8}
              ></textarea>
            </div>
            <div className="flex justify-center items-center gap-60 h-[20%] ">
              <div className="flex items-center w-[20%] ">
                <div className="flex items-center space-x-4">
                  <div className="border-2 rounded-lg p-2 border-[#4D5562]">
                    <svg 
                      className="w-5 h-5"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.46532 11.6089C2.87114 10.6186 2.87114 9.38143 3.46532 8.39114C3.64663 8.08895 3.94701 7.87726 4.29258 7.80815L5.70344 7.52598C5.78749 7.50917 5.86326 7.46409 5.91814 7.39824L7.17085 5.89498C8.3534 4.47592 8.94468 3.76638 9.47234 3.95742C10 4.14846 10 5.07207 10 6.91928L10 13.0807C10 14.9279 10 15.8515 9.47234 16.0426C8.94468 16.2336 8.3534 15.5241 7.17085 14.105L5.91814 12.6018C5.86326 12.5359 5.78749 12.4908 5.70344 12.474L4.29258 12.1918C3.94701 12.1227 3.64663 11.9111 3.46532 11.6089Z"
                        fill="#4D5562"
                      />
                      <path
                        d="M12.1129 7.05373C12.8903 7.83111 13.329 8.88422 13.3333 9.9836C13.3376 11.083 12.9073 12.1395 12.1361 12.923"
                        stroke="#4D5562"
                        stroke-width="2"
                        stroke-linecap="round"
                      />
                      <path
                        d="M15.5474 5.28596C16.7912 6.52977 17.493 8.21475 17.4999 9.97375C17.5069 11.7327 16.8183 13.4232 15.5844 14.6768"
                        stroke="#4D5562"
                        stroke-width="2"
                        stroke-linecap="round"
                      />
                    </svg>
                  </div>

                  <div onClick={handleTranslateCopy} className="border-2 cursor-pointer rounded-lg border-[#4D5562] p-2">
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.6667 5.83334V5.83334C11.6667 5.36869 11.6667 5.13636 11.6282 4.94316C11.4704 4.14978 10.8502 3.52959 10.0569 3.37177C9.86366 3.33334 9.63133 3.33334 9.16668 3.33334H7.33334C5.44773 3.33334 4.50492 3.33334 3.91913 3.91913C3.33334 4.50492 3.33334 5.44773 3.33334 7.33335V9.16668C3.33334 9.63133 3.33334 9.86366 3.37177 10.0569C3.52959 10.8502 4.14978 11.4704 4.94316 11.6282C5.13636 11.6667 5.36869 11.6667 5.83334 11.6667V11.6667"
                        stroke="#4D5562"
                        stroke-width="2"
                      />
                      <rect
                        x="8.33334"
                        y="8.33334"
                        width="8.33333"
                        height="8.33333"
                        rx="2"
                        stroke="#4D5562"
                        stroke-width="2"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <button className="bg-[#3662E3] text-white flex p-2 rounded-lg">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 20H18"
                    stroke="#F9FAFB"
                    stroke-width="2"
                  />
                  <path
                    d="M9 12H15"
                    stroke="#F9FAFB"
                    stroke-width="2"
                  />
                  <path
                    d="M7 17L10.1165 8.27376C10.9024 6.0734 11.2953 4.97321 12 4.97321C12.7047 4.97321 13.0976 6.07339 13.8835 8.27375L17 17"
                    stroke="#F9FAFB"
                    stroke-width="2"
                  />
                </svg>
                <h1>Translate</h1>
              </button>
            </div>
          </form>
        </div>

        
        <div className="w-[40%] bg-[#394150] h-[100%] rounded-lg">
  <div className="w-[70%] h-[15%] mt-2 flex justify-center items-center gap-7">
    <h1 className="text-[#4D5562] font-bold">English</h1>
    <h1 className="p-3 rounded-lg bg-[#4D5562] cursor-pointer font-bold">French</h1>
    <select className="bg-[#394150] text-[#4D5562] font-bold">
      <option value="" className="text-[#4D5562] font-bold">
        Spanish
      </option>
    </select>
  </div>

  <div className="w-[100%] mt-2 flex justify-center">
    <hr className="w-[80%] center" />
  </div>

  <div className="p-4  h-[60%]" >
    <p id="translation" className="text-[#F9FAFB]">{translation}</p>
  </div>

  <div className="flex items-center justify-center p-6 space-x-4 w-full">
    <div className=" w-[100%] flex items-start space-x-4">
      <div className="border-2 rounded-lg p-2 border-[#4D5562]">
        <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M3.46532 11.6089C2.87114 10.6186 2.87114 9.38143 3.46532 8.39114C3.64663 8.08895 3.94701 7.87726 4.29258 7.80815L5.70344 7.52598C5.78749 7.50917 5.86326 7.46409 5.91814 7.39824L7.17085 5.89498C8.3534 4.47592 8.94468 3.76638 9.47234 3.95742C10 4.14846 10 5.07207 10 6.91928L10 13.0807C10 14.9279 10 15.8515 9.47234 16.0426C8.94468 16.2336 8.3534 15.5241 7.17085 14.105L5.91814 12.6018C5.86326 12.5359 5.78749 12.4908 5.70344 12.474L4.29258 12.1918C3.94701 12.1227 3.64663 11.9111 3.46532 11.6089Z"
            fill="#4D5562"
          />
          <path
            d="M12.1129 7.05373C12.8903 7.83111 13.329 8.88422 13.3333 9.9836C13.3376 11.083 12.9073 12.1395 12.1361 12.923"
            stroke="#4D5562"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M15.5474 5.28596C16.7912 6.52977 17.493 8.21475 17.4999 9.97375C17.5069 11.7327 16.8183 13.4232 15.5844 14.6768"
            stroke="#4D5562"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>

      
      <div onClick={handleCopySecond} className="border-2 cursor-pointer rounded-lg border-[#4D5562] p-2">
        <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M11.6667 5.83334V5.83334C11.6667 5.36869 11.6667 5.13636 11.6282 4.94316C11.4704 4.14978 10.8502 3.52959 10.0569 3.37177C9.86366 3.33334 9.63133 3.33334 9.16668 3.33334H7.33334C5.44773 3.33334 4.50492 3.33334 3.91913 3.91913C3.33334 4.50492 3.33334 5.44773 3.33334 7.33335V9.16668C3.33334 9.63133 3.33334 9.86366 3.37177 10.0569C3.52959 10.8502 4.14978 11.4704 4.94316 11.6282C5.13636 11.6667 5.36869 11.6667 5.83334 11.6667V11.6667"
            stroke="#4D5562"
            strokeWidth="2"
          />
          <rect
            x="8.33334"
            y="8.33334"
            width="8.33333"
            height="8.33333"
            rx="2"
            stroke="#4D5562"
            strokeWidth="2"
          />
        </svg>
      </div>
    </div>
  </div>
</div>
      </div>
    </>
  );
}

export default InputFields;
