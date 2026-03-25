import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Section from "./components/Section/Section";
import TabSection from "./components/Section/TabSection";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Section
        sectionTitle="Top Albums"
        apiUrl="https://qtify-backend.labs.crio.do/albums/top"
      />
      <Section
        sectionTitle="New Albums"
        apiUrl="https://qtify-backend.labs.crio.do/albums/new"
      />
      <TabSection
        sectionTitle="Songs"
        apiUrl="https://qtify-backend.labs.crio.do/songs"
      />
    </>
  );
}

export default App;
