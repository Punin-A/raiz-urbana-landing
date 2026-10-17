import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import ProgramSteps from "./components/ProgramSteps";
import ApplicationForm from "./components/ApplicationForm";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <ProgramSteps />
        <ApplicationForm />
      </main>
      <Footer />
    </>
  );
}
