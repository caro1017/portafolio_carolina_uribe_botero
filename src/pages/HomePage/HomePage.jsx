import Header from "../../components/Header/Header";
import NavBar from "../../layout/NavBar/NavBar";
import Profile from "../../components/Profile/Profile";
import Skills from "../../components/Skills/Skills";
import Projects from "../../components/Projects/Projects";
import ContactMe from "../../components/ContactMe/ContactMe";
import Author from "../../components/Author/Author";
import ScrollButton from "../../components/Buttons/ScrollButton/ScrollButton";

const HomePage = () => {
  return (
    <>
      <NavBar />
      <Header />
      <Profile />
      <Skills />
      <Projects />
      <ContactMe />
      <Author />
      <ScrollButton />
    </>
  );
};

export default HomePage;
