import { About } from './home/partials/about';
import { CareerJourney } from './home/partials/careerJourney';
// import { Contact } from './home/partials/contact';
import { ContactRevisi } from './home/partials/contact-revisi';
import { FAQ } from './home/partials/faq';
import { Footer } from './home/partials/footer';
// import { Hero } from './home/partials/hero';
import { HeroRevisi } from './home/partials/hero-revisi';
import { Navbar } from './home/partials/navbar';
import { Projects } from './home/partials/projects';
import { Skills } from './home/partials/skills';
import { Testimonials } from './home/partials/testimonials';
import { WhyMe } from './home/partials/whyMe';

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroRevisi />
      <About />
      <CareerJourney />
      <Skills />
      <WhyMe />
      <Projects />
      <Testimonials />
      <FAQ />
      <ContactRevisi />
      <Footer />
    </div>
  );
};

export default Home;
