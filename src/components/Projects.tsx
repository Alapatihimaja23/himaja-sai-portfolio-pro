import { useState } from 'react';
import { ExternalLink, Github, Zap, Search, Cloud } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "Smart Email Automation System",
      description: "Built an intelligent automation system using n8n that processes chat-based input to extract email details with Google Gemini AI. Features automated email sending via Gmail API and contact management through Google Sheets.",
      tech: ["n8n", "Google Gemini AI", "Gmail API", "Google Sheets", "Automation"],
      icon: <Zap className="text-primary" size={32} />,
      features: [
        "🤖 AI-powered email extraction",
        "📧 Automated Gmail integration", 
        "📊 Google Sheets contact management",
        "🔄 Workflow automation with n8n"
      ],
      github: "https://github.com/Alapatihimaja23",
      demo: "#",
      category: "AI/Automation"
    },
    {
      id: 2,
      title: "Image Search Application",
      description: "A modern, feature-rich image search application built with vanilla HTML, CSS, and JavaScript. Utilizes the Unsplash API to provide users with high-quality image search and discovery capabilities.",
      tech: ["HTML5", "CSS3", "JavaScript", "Unsplash API", "Responsive Design"],
      icon: <Search className="text-primary" size={32} />,
      features: [
        "🔍 Advanced image search functionality",
        "📱 Fully responsive design",
        "⚡ Fast and optimized performance",
        "🎨 Modern UI/UX design"
      ],
      github: "https://github.com/Alapatihimaja23",
      demo: "#",
      category: "Web Application"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "Responsive weather application providing current conditions and 5-day forecasts for cities worldwide. Built with vanilla JavaScript for optimal performance and simplicity.",
      tech: ["HTML5", "CSS3", "JavaScript", "Weather API", "Local Storage"],
      icon: <Cloud className="text-primary" size={32} />,
      features: [
        "🌤️ Real-time weather data",
        "📅 5-day forecast display",
        "🌍 Global city search",
        "💾 Location favorites storage"
      ],
      github: "https://github.com/Alapatihimaja23",
      demo: "#",
      category: "Web Application"
    }
  ];

  const allTechnologies = [...new Set(projects.flatMap(project => project.tech))];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcase of innovative solutions and applications I've built using cutting-edge technologies
          </p>
        </div>

        {/* Technology Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {allTechnologies.slice(0, 8).map((tech) => (
            <Badge 
              key={tech} 
              variant="outline" 
              className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
            >
              {tech}
            </Badge>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <Card 
              key={project.id}
              className={`card-gradient stagger-animation group hover:scale-105 transition-all duration-300 ${
                hoveredProject === project.id ? 'glow-effect' : ''
              }`}
              style={{animationDelay: `${index * 0.2}s`}}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-lg bg-primary/10 w-fit">
                    {project.icon}
                  </div>
                  <Badge variant="secondary">{project.category}</Badge>
                </div>
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="space-y-3 mb-4">
                  {project.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="text-sm text-muted-foreground">
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="flex gap-3">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex-1 group-hover:border-primary transition-colors duration-300"
                  asChild
                >
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github size={16} className="mr-2" />
                    Code
                  </a>
                </Button>
                <Button 
                  size="sm" 
                  className="flex-1 bg-gradient-primary hover:opacity-90"
                  asChild
                >
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={16} className="mr-2" />
                    Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="text-center">
          <Card className="max-w-2xl mx-auto card-gradient">
            <CardContent className="p-8">
              <Github className="text-primary mx-auto mb-4" size={48} />
              <h3 className="text-2xl font-bold mb-4">More Projects on GitHub</h3>
              <p className="text-muted-foreground mb-6">
                Explore my complete portfolio of projects, contributions, and open-source work
              </p>
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:opacity-90"
                asChild
              >
                <a href="https://github.com/Alapatihimaja23" target="_blank" rel="noopener noreferrer">
                  View All Projects on GitHub 🚀
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Project Stats */}
        <div className="mt-16">
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="card-gradient text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">3+</div>
                <p className="text-muted-foreground">Featured Projects</p>
              </CardContent>
            </Card>
            <Card className="card-gradient text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">10+</div>
                <p className="text-muted-foreground">Technologies Used</p>
              </CardContent>
            </Card>
            <Card className="card-gradient text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <p className="text-muted-foreground">Open Source</p>
              </CardContent>
            </Card>
            <Card className="card-gradient text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">∞</div>
                <p className="text-muted-foreground">Learning & Growing</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;