import { 
  Code, 
  Database, 
  Cloud, 
  Cpu, 
  Smartphone, 
  Globe,
  Zap,
  Bot,
  Wrench,
  Award
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Globe className="text-primary" size={32} />,
      skills: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS", "TypeScript"],
      color: "bg-blue-500/10"
    },
    {
      title: "Backend Development", 
      icon: <Code className="text-primary" size={32} />,
      skills: ["Python", "Node.js", "REST APIs", "Express.js", "FastAPI"],
      color: "bg-green-500/10"
    },
    {
      title: "Database & Cloud",
      icon: <Database className="text-primary" size={32} />,
      skills: ["MySQL", "AWS S3", "Firebase", "MongoDB", "PostgreSQL"],
      color: "bg-purple-500/10"
    },
    {
      title: "DevOps & Tools",
      icon: <Cloud className="text-primary" size={32} />,
      skills: ["Git", "GitHub", "Docker", "AWS", "Linux", "CI/CD"],
      color: "bg-orange-500/10"
    },
    {
      title: "Programming Languages",
      icon: <Cpu className="text-primary" size={32} />,
      skills: ["Python", "JavaScript", "TypeScript", "C++", "Java", "SQL"],
      color: "bg-red-500/10"
    },
    {
      title: "AI & Automation",
      icon: <Bot className="text-primary" size={32} />,
      skills: ["Crew AI", "Claude AI", "n8n", "ChatGPT", "AI Integration"],
      color: "bg-indigo-500/10"
    },
    {
      title: "Development Tools",
      icon: <Wrench className="text-primary" size={32} />,
      skills: ["VSCode", "Windsurf", "cursor.ai", "Lovable", "Postman"],
      color: "bg-teal-500/10"
    },
    {
      title: "Mobile & UI/UX",
      icon: <Smartphone className="text-primary" size={32} />,
      skills: ["Responsive Design", "PWA", "UI/UX Design", "Figma", "Adobe XD"],
      color: "bg-pink-500/10"
    }
  ];

  const certifications = [
    "Meta Front-End Developer Professional Certificate",
    "Intro To ChatGPT Certification",
    "HackerRank CSS (Basic) Certificate"
  ];

  const codingProfiles = [
    { platform: "GeeksforGeeks", username: "himaja2001", link: "https://geeksforgeeks.org/user/himaja2001" },
    { platform: "GitHub", username: "Alapatihimaja23", link: "https://github.com/Alapatihimaja23" },
    { platform: "LeetCode", username: "Alapati2001", link: "https://leetcode.com/Alapati2001" }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="bg-gradient-primary bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks that I use to build exceptional digital experiences
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title} 
              className={`skill-card card-gradient stagger-animation`}
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <CardContent className="p-6">
                <div className={`p-3 rounded-lg ${category.color} w-fit mb-4`}>
                  {category.icon}
                </div>
                <h3 className="font-bold text-lg mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="secondary" 
                      className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">
              🏆 <span className="bg-gradient-primary bg-clip-text text-transparent">Certifications</span>
            </h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card key={cert} className="card-gradient stagger-animation hover:scale-105 transition-transform duration-300">
                <CardContent className="p-6 text-center">
                  <Award className="text-primary mx-auto mb-4" size={32} />
                  <p className="font-semibold">{cert}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Coding Profiles */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">
              💻 <span className="bg-gradient-primary bg-clip-text text-transparent">Coding Profiles</span>
            </h3>
            <p className="text-muted-foreground">Connect with me on various coding platforms</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {codingProfiles.map((profile, index) => (
              <Card key={profile.platform} className="card-gradient stagger-animation hover:scale-105 transition-transform duration-300">
                <CardContent className="p-6 text-center">
                  <Zap className="text-primary mx-auto mb-4" size={32} />
                  <h4 className="font-bold text-lg mb-2">{profile.platform}</h4>
                  <p className="text-muted-foreground mb-4">@{profile.username}</p>
                  <a 
                    href={profile.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline font-medium"
                  >
                    View Profile →
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Skills Summary */}
        <div className="mt-16">
          <Card className="max-w-4xl mx-auto card-gradient">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-6">🚀 What I Bring to the Table</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">1+</div>
                  <p className="text-muted-foreground">Years Experience</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">20+</div>
                  <p className="text-muted-foreground">Technologies Mastered</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">100+</div>
                  <p className="text-muted-foreground">Problems Solved</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;