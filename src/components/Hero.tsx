import { useState, useEffect } from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-bg.jpg';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Full Stack Developer';

  useEffect(() => {
    let currentIndex = 0;
    const typeText = () => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex));
        currentIndex++;
        setTimeout(typeText, 100);
      }
    };
    
    const timer = setTimeout(typeText, 1000);
    return () => clearTimeout(timer);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1)), url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl float-animation"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl float-animation" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="slide-in-left">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Hi, I'm{' '}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Himaja Sai Alapati
              </span>
            </h1>
          </div>

          <div className="slide-in-right">
            <div className="text-2xl md:text-4xl font-semibold mb-8 text-muted-foreground min-h-[3rem]">
              {typedText}
              <span className="animate-pulse text-primary">|</span>
            </div>
          </div>

          <div className="stagger-animation">
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              🚀 Innovative Software Engineer with <span className="text-primary font-semibold">1+ year</span> of experience crafting high-performance, 
              scalable applications using modern full-stack technologies. 
              <span className="block mt-2">💡 Passionate about creating solutions that bridge innovation with impact.</span>
            </p>
          </div>

          <div className="stagger-animation flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:opacity-90 transition-all duration-300 pulse-glow text-lg px-8 py-3"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work ✨
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-lg px-8 py-3"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Let's Connect 🤝
            </Button>
          </div>

          <div className="stagger-animation flex items-center justify-center gap-6">
            <a 
              href="https://github.com/Alapatihimaja23" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-all duration-300 elegant-shadow hover:scale-110"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/himaja-alapati-908929238/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-all duration-300 elegant-shadow hover:scale-110"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:himajaalapati23@gmail.com"
              className="p-3 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-all duration-300 elegant-shadow hover:scale-110"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>

        <div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce"
          onClick={scrollToAbout}
        >
          <ArrowDown size={32} className="text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;