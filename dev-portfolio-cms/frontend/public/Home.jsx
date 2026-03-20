import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-slate-50">
        <section className="max-w-6xl mx-auto px-6 py-20">
          <h1 className="text-5xl font-bold mb-4">Hi, I'm Your Name</h1>
          <p className="text-xl text-slate-600 mb-6">
            Full-stack developer building modern web apps with React and Spring Boot.
          </p>
          <a href="/projects" className="bg-black text-white px-6 py-3 rounded-lg">
            View Projects
          </a>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Home;