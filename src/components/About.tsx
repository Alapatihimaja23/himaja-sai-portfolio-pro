import { GraduationCap, Briefcase, MapPin, Calendar, Download } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import profileImage from '@/assets/profile-placeholder.jpg';

const About = () => {
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Himaja_Sai_Alapati_Resume.pdf';
    link.click();
  };

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate software engineer with a strong foundation in full-stack development and emerging technologies
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="slide-in-left">
              <img 
                src={profileImage} 
                alt="Himaja Sai Alapati" 
                className="w-64 h-64 rounded-full mx-auto lg:mx-0 object-cover elegant-shadow hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          <div className="space-y-8">
            <div className="slide-in-right">
              <h3 className="text-2xl font-bold mb-4">👋 Hello! I'm Himaja</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I'm a dedicated <span className="text-primary font-semibold">Software Engineer</span> with 1+ year of professional experience 
                in developing scalable applications and mentoring aspiring developers. Currently pursuing my 
                <span className="text-primary font-semibold"> M.Tech in Computer Science</span> while working full-time.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                💻 I specialize in modern web technologies, cloud solutions, and AI integration. 
                My passion lies in creating innovative solutions that solve real-world problems and 
                contribute to meaningful technological advancement.
              </p>
              
              <Button 
                onClick={handleDownloadResume}
                size="lg"
                className="bg-gradient-primary hover:opacity-90 transition-opacity"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </Button>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="stagger-animation card-gradient hover:scale-105 transition-transform duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <GraduationCap className="text-primary" size={24} />
                    </div>
                    <h4 className="font-semibold">Education</h4>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    <strong>M.Tech Computer Science</strong><br />
                    KLR Institute Of Technology, JNTUH
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong>B.Tech Computer Science</strong><br />
                    Anubose Institute Of Technology, JNTUH
                  </p>
                </CardContent>
              </Card>

              <Card className="stagger-animation card-gradient hover:scale-105 transition-transform duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Briefcase className="text-primary" size={24} />
                    </div>
                    <h4 className="font-semibold">Experience</h4>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    <strong>Software Developer & Mentor</strong><br />
                    NxtWave (Current)
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong>Software Developer</strong><br />
                    Vaidhyamegha Pvt Ltd
                  </p>
                </CardContent>
              </Card>

              <Card className="stagger-animation card-gradient hover:scale-105 transition-transform duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <MapPin className="text-primary" size={24} />
                    </div>
                    <h4 className="font-semibold">Location</h4>
                  </div>
                  <p className="text-muted-foreground">
                    📍 Bhadrachalam, TS, India<br />
                    🏢 Working in Hyderabad
                  </p>
                </CardContent>
              </Card>

              <Card className="stagger-animation card-gradient hover:scale-105 transition-transform duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Calendar className="text-primary" size={24} />
                    </div>
                    <h4 className="font-semibold">Journey</h4>
                  </div>
                  <p className="text-muted-foreground">
                    🚀 Started: March 2023<br />
                    💼 1+ Years Professional Experience<br />
                    🎓 Continuous Learning
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Card className="max-w-4xl mx-auto card-gradient">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6">🎯 My Mission</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To leverage cutting-edge technology and innovative thinking to create impactful solutions 
                that drive business growth and enhance user experiences. I'm committed to continuous learning, 
                mentoring others, and contributing to the tech community through open-source projects and knowledge sharing.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;