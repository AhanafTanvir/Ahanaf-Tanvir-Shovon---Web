import { useState } from 'react';
import { initialPortfolioData } from './data/portfolioData';
import type { PortfolioData, Project } from './data/portfolioData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Process } from './components/Process';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';

export function App() {
  const [data] = useState<PortfolioData>(initialPortfolioData);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div
      className="relative min-h-screen selection:bg-[#31344b] selection:text-white"
      style={{ backgroundColor: '#e6e7ee', color: '#31344b' }}
    >
      {/* Main Content Flow */}
      <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column' }}>
        {/* Navigation Bar */}
        <Navbar 
          name={data.personal.name} 
          role={data.personal.title} 
        />

        {/* Hero Section */}
        <main>
          <Hero 
            personal={data.personal} 
            trustedCompanies={data.trustedCompanies}
            onOpenProject={(id) => {
              const p = data.projects.find(item => item.id === id);
              if (p) setSelectedProject(p);
            }}
          />

          {/* About Section */}
          <About 
            personal={data.personal} 
            about={data.about} 
          />

          {/* Services Section */}
          <Services 
            services={data.services} 
          />

          {/* Skills Section (React, TypeScript, Next.js, Node.js, NestJS, Tailwind, etc.) */}
          <Skills 
            skills={data.skills} 
          />

          {/* Selected Work / Projects Section */}
          <Projects 
            projects={data.projects} 
            onSelectProject={(project) => setSelectedProject(project)}
          />

          {/* Process Section */}
          <Process 
            process={data.process} 
          />

          {/* Testimonials Section */}
          <Testimonials 
            testimonials={data.testimonials} 
          />

          {/* Contact Section */}
          <Contact 
            personal={data.personal} 
          />
        </main>

        {/* Footer */}
        <Footer 
          personal={data.personal} 
          socials={data.socials} 
        />
      </div>

      {/* Interactive Project Case Study Modal */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </div>
  );
}

export default App;
