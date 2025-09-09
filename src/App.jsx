import React from "react";
import Circular from "./components/Circular";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contacts from "./pages/Contacts";
import Footer from "./components/Footer";

const App = () => {
  return (
    <main className="h-full w-full bg-black text-white font-[intern] ">
      <Navbar />
      <section id="Hero" className="w-full h-screen px-16">
        <Circular />
      </section>
      <Home />
      <About />
      <Projects />
      <Contacts />
      <Footer />
    </main>
  );
};

export default App;
