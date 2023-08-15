import { Show } from "@chakra-ui/react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import UseApp from "./components/UseApp";
import ServicesSlide from "./components/ServicesSlide";

const App = () => {
  return (
    <div>
      <Header />

      <Show below="lg">
        <UseApp />
      </Show>
      <Hero />
      <ServicesSlide />
    </div>
  );
};

export default App;
