import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import profile from "../assets/profile-Photoroom.jpg";

function Home() {
  const location = useLocation();
  const navigate = useNavigate();

  const [text] = useTypewriter({
    words: ["HTML", "CSS", "Javascript", "React JS", "Node JS", "Express JS"],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 50,
    delaySpeed: 2000,
  });

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      // Remove the '#' character
      const id = hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }

  }, [location]);

  return (
    <>
      <div className="flex sm:flex-row flex-col justify-between w-full h-[100%] my-auto">
        <Helmet>
          <title>Home - Bharat Odedara</title>
          <meta
            name="description"
            content="Welcome to my portfolio website. Explore my projects, skills, and experience."
          />
        </Helmet>
        <div className="welcome sm:w-[45%] w-[80%] mx-auto sm:mx-0 flex flex-col items-start sm:justify-center sm:h-full h-[55%] border-black gap-5">
          <h2 className="sm:text-4xl text-xl font-bold sm:text-left text-center sm:mb-4 w-full text-slate-200 p-5">
            <span className="text-blue-600 font-bold">Hi, I'm</span> Bharat
            Odedara
          </h2>
          <div className="flex flex-col sm:h-[60%] h-[40%] sm:w-[80%] w-full overflow-hidden sm:overflow-auto flex-1">
            <img
              src={profile}
              alt=""
              className="flex-grow sm:h-full sm:w-[70%] w-[50%] border border-black sm:rounded-l rounded-full mx-auto sm:mx-0"
              draggable="false"
              onContextMenu={(e) => {
                alert("Not able to copy");
                return <h1>Hello</h1>;
              }}
            />
          </div>
          <span className="sm:text-3xl text-xl font-extrabold text-slate-200 sm:pl-5 flex items-center justify-center sm:justify-start w-full">
            Skills &nbsp;
            {text.split(" ")[0] === "Bharat" ? (
              <Link to="https://github.com/bodedara0101" target="_blank">
                <span className="text-blue-500 sm:text-3xl text-xl relative after:rounded-lg after:bg-orange-400 after:absolute after:w-full after:h-1 after:-bottom-0 after:left-0">
                  {text}
                  <Cursor />
                </span>
              </Link>
            ) : (
              <span className="text-blue-500 sm:text-3xl text-xl relative after:rounded-lg after:bg-orange-400 after:absolute after:w-full after:h-1 after:-bottom-0 after:left-0">
                {text}
                <Cursor />
              </span>
            )}
          </span>
        </div>
        <div className="description sm:w-[45%] w-[80%] flex flex-col justify-center gap-5 sm:h-full h-[45%] overflow-hidden mx-auto">
          <h1 className="sm:text-3xl text-xl font-extrabold sm:pl-5 text-blue-600">
            Profile :
          </h1>
          <p className="sm:text-lg text-xs text-justify sm:px-10 indent-10 text-white">
            {/* I'm a passionate developer skilled in web technologies and eager to
          build modern, responsive websites and applications. and i continuously
          learning to improve my skills. */}
            A MERN stack developer specializes in building full-stack web
            applications using the MERN technology stack, which consists of
            MongoDB, Express.js, React.js, and Node.js. They utilize MongoDB, a
            NoSQL database, for efficient data storage and retrieval. On the
            backend, Express.js is used to create servers and APIs to handle
            client requests.
          </p>
        </div>
      </div>
    </>
  );
}

export default Home;
