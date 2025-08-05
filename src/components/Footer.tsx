import { Heart, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
              Himaja Sai Alapati
            </h3>
            <p className="text-muted-foreground mb-4 max-w-md">
              Full Stack Developer passionate about creating innovative solutions 
              that bridge technology and human needs. Let's build something amazing together! 🚀
            </p>
            <div className="flex gap-4">
              <a 
                href="https://github.com/Alapatihimaja23" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/himaja-alapati-908929238/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:himajaalapati23@gmail.com"
                className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    const element = document.getElementById(item.toLowerCase());
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="block text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div>
            <h4 className="font-semibold mb-4">Skills</h4>
            <div className="space-y-2 text-muted-foreground">
              <p>Frontend Development</p>
              <p>Backend Development</p>
              <p>Full Stack Solutions</p>
              <p>AI Integration</p>
              <p>Mentoring & Training</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-muted-foreground">
              <span>© {currentYear} Himaja Sai Alapati.
              </span>
            </div>
            
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">
                Built with React, TypeScript & Tailwind CSS
              </span>
              <Button
                variant="outline"
                size="sm"
                onClick={scrollToTop}
                className="rounded-full p-2 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <ArrowUp size={16} />
              </Button>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted text-sm text-muted-foreground">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            Available for full-time opportunities
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;