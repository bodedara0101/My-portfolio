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
      <div className="flex justify-between w-full h-[100%] my-auto">
        <Helmet>
          <title>Home - Bharat Odedara</title>
          <meta
            name="description"
            content="Welcome to my portfolio website. Explore my projects, skills, and experience."
          />
        </Helmet>
        <div className="welcome w-[45%] flex flex-col items-start justify-center h-full border-black gap-5">
          <h2 className="text-4xl font-bold text-left mb-4 w-full ml-5 text-slate-200">
            <span className="text-blue-600 font-bold">Hi, I'm</span> Bharat
            Odedara
          </h2>
          <div className="flex flex-col h-[60%] w-[80%]">
            <img
              src={profile}
              alt=""
              className="h-full ml-5 w-[70%] border border-black rounded-r-full"
              draggable="false"
              onContextMenu={(e) => {
                alert("Not able to copy");
                return <h1>Hello</h1>;
              }}
            />
          </div>
          <span className="text-3xl font-extrabold text-slate-200 pl-5">
            Skills &nbsp;
            {text.split(" ")[0] === "Bharat" ? (
              <Link to="https://github.com/bodedara0101" target="_blank">
                <span className="text-blue-500 text-3xl relative after:rounded-lg after:bg-orange-400 after:absolute after:w-full after:h-1 after:-bottom-0 after:left-0">
                  {text}
                  <Cursor />
                </span>
              </Link>
            ) : (
              <span className="text-blue-500 text-3xl relative after:rounded-lg after:bg-orange-400 after:absolute after:w-full after:h-1 after:-bottom-0 after:left-0">
                {text}
                <Cursor />
              </span>
            )}
          </span>
        </div>
        <div className="description w-[45%] flex flex-col justify-center gap-5 h-full">
          <h1 className="text-4xl font-extrabold pl-5 text-blue-600">
            Profile :
          </h1>
          <p className="text-lg text-justify px-10 indent-10 text-white">
            {/* I'm a passionate developer skilled in web technologies and eager to
          build modern, responsive websites and applications. and i continuously
          learning to improve my skills. */}
            A MERN stack developer specializes in building full-stack web
            applications using the MERN technology stack, which consists of
            MongoDB, Express.js, React.js, and Node.js. They utilize MongoDB, a
            NoSQL database, for efficient data storage and retrieval. On the
            backend, Express.js is used to create servers and APIs to handle
            client requests. React.js powers the frontend, allowing developers
            to build dynamic and interactive user interfaces, while Node.js
            enables server-side development and efficient handling of
            asynchronous operations. A MERN stack developer ensures seamless
            integration between the frontend and backend components, creating
            cohesive and high-performing applications. They are proficient in
            JavaScript, RESTful APIs, and version control systems like Git,
            making them versatile in both development and collaboration.
          </p>
        </div>
      </div>
    </>
  );
}

export default Home;
