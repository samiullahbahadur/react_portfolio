import Navbar from './component/header/Navbar';
import Home from './component/Home';
import About from './component/about/About';
import Services from './component/service/Services';
import Portfolio from './component/project/Portfolio';

import Contact from './component/Contact';

const App = () => (
  <>
    <header>
      <Navbar />
    </header>
    <section id="home">
      <Home />
    </section>
    <section id="about">
      <About />
    </section>
    <section id="services">
      <Services />
    </section>
    <section id="portfolio">
      <Portfolio />
    </section>

    <section id="contact">
      <Contact />
    </section>
  </>
);

export default App;
