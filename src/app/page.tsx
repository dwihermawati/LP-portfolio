import { About } from './home/partials/about';
import { CareerJourney } from './home/partials/careerJourney';
import { Contact } from './home/partials/contact';
import { FAQ } from './home/partials/faq';
import { Footer } from './home/partials/footer';
import { Hero } from './home/partials/hero';
import { Navbar } from './home/partials/navbar';
import { Projects } from './home/partials/projects';
import { Skills } from './home/partials/skills';
import { Testimonials } from './home/partials/testimonials';
import { WhyMe } from './home/partials/whyMe';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      {/* <About /> */}
      <CareerJourney />
      <Skills />
      <WhyMe />
      <Projects />
      <FAQ />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
