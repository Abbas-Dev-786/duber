import First from "./../assets/first.webp";

const Banner = () => {
  return (
    <div className="w-full h-[680px] flex items-center justify-center bg-black ">
      <div className="container-lg flex items-center justify-between  px-5 h-[555px]">
        <div className="container h-[383px]">
          {/* Left side */}
          <div className="h-[191px]">
            {" "}
            {/* Upper part aka 1st half */}
            <div className="h-[191px] flex text-center md:text-left flex-col justify-between">
              <h1 className="text-[52px] font-bold leading-tight text-white">
                Go anywhere with Uber
              </h1>
              <p className="content-end mb-2 text-[16px] text-white font-normal">
                Request a ride, hop in, and go.
              </p>
            </div>
          </div>
          <div className="h-[191px] mt-2">
            {" "}
            {/* Down Part aka 2nd half */}
            <div className="md:w-[396px] h-[47px] bg-white rounded-lg flex items-center">
              {" "}
              {/* Enter location : hold 3 elems -> 1svg , 1i/p , 1svg */}
              <div className="ml-3">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  data-baseweb="icon"
                >
                  <title>search</title>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm5-2a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
              <div className="ml-2 w-full">
                <input
                  className="w-full text-[17px] text-placehol placeholder:text-placehol"
                  type="text"
                  placeholder="Enter location"
                />
              </div>
              <div className="ml-auto mr-3">
                <svg
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  fill="none"
                  role="button"
                >
                  <title>Navigate right up</title>
                  <path
                    d="M10.5 13.5.5 11 21 3l-8 20.5-2.5-10Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="absolute bg-white h-[20px] w-[1px] ml-5 " />
            {/*2nd input */}
            <div className="md:w-[396px] h-[47px] mt-[12px] bg-white rounded-lg flex items-center">
              {" "}
              {/* Enter destination : hold 2 elems -> 1svg , 1 i/p*/}
              <div className="ml-3">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  data-baseweb="icon"
                >
                  <title>search</title>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M14 10h-4v4h4v-4ZM7 7v10h10V7H7Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
              <div className="ml-2 w-fit">
                <input
                  className="w-full text-[17px] placeholder:text-placehol"
                  type="text"
                  placeholder="Enter destination"
                />
              </div>
            </div>
            {/*Button ( Link! <a />)- see prices */}
            <div className="w-[127px] h-[48px] mt-[25px] rounded-lg bg-white flex justify-center">
              <a
                href="/"
                className="text-black  text-[16px] font-medium content-center"
              >
                See prices
              </a>
            </div>
          </div>
        </div>

        {/* Right Side : Image */}
        <div className="hidden md:block">
          <img src={First} width={552} height={552} alt="First picture" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
