import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Store in database
      const { error: dbError } = await supabase
        .from('contact_submissions')
        .insert([formData]);

      if (dbError) {
        throw new Error(dbError.message);
      }

      // Send email via edge function
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: formData,
      });

      if (error) {
        throw new Error(error.message);
      }

      toast({
        title: "Message sent successfully! 🚀",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Contact form error:', error);
      toast({
        title: "Error sending message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="text-primary" size={24} />,
      title: "Email",
      value: "himajaalapati23@gmail.com",
      link: "mailto:himajaalapati23@gmail.com"
    },
    {
      icon: <Phone className="text-primary" size={24} />,
      title: "Phone",
      value: "+91 9390738043",
      link: "tel:+919390738043"
    },
    {
      icon: <MapPin className="text-primary" size={24} />,
      title: "Location",
      value: "Bhadrachalam, TS, India",
      link: "#"
    }
  ];

  const socialLinks = [
    {
      icon: <Github size={24} />,
      name: "GitHub",
      url: "https://github.com/Alapatihimaja23",
      handle: "@Alapatihimaja23"
    },
    {
      icon: <Linkedin size={24} />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/himaja-alapati-908929238/",
      handle: "Himaja Alapati"
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="bg-gradient-primary bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to discuss your next project or explore collaboration opportunities? 
            I'd love to hear from you! 💬
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="card-gradient slide-in-left">
            <CardHeader>
              <CardTitle className="text-2xl font-bold flex items-center gap-2">
                <Send className="text-primary" size={28} />
                Send Me a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Your Name *"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="border-2 focus:border-primary transition-colors duration-300"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Your Email *"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="border-2 focus:border-primary transition-colors duration-300"
                    />
                  </div>
                </div>
                <div>
                  <Input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="border-2 focus:border-primary transition-colors duration-300"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message *"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="border-2 focus:border-primary transition-colors duration-300 resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-primary hover:opacity-90 transition-opacity"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message 🚀'}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8 slide-in-right">
            <Card className="card-gradient">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors duration-300">
                    <div className="p-2 rounded-lg bg-primary/10">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold">{info.title}</h4>
                      {info.link !== "#" ? (
                        <a 
                          href={info.link} 
                          className="text-muted-foreground hover:text-primary transition-colors duration-300"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="card-gradient">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">Connect With Me</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 rounded-lg bg-muted/30 hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
                    >
                      <div className="text-primary group-hover:text-primary-foreground">
                        {social.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold">{social.name}</h4>
                        <p className="text-sm text-muted-foreground group-hover:text-primary-foreground/80">
                          {social.handle}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="card-gradient">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold mb-4">💼 Let's Work Together!</h3>
                <p className="text-muted-foreground mb-4">
                  I'm always excited to discuss new opportunities, innovative projects, 
                  and potential collaborations.
                </p>
                <Button 
                  size="lg" 
                  className="bg-gradient-primary hover:opacity-90"
                  asChild
                >
                  <a href="mailto:himajaalapati23@gmail.com">
                    Start a Conversation ✨
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="mt-16">
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="card-gradient text-center">
              <CardContent className="p-6">
                <div className="text-2xl font-bold text-primary mb-2">24h</div>
                <p className="text-muted-foreground text-sm">Average Response Time</p>
              </CardContent>
            </Card>
            <Card className="card-gradient text-center">
              <CardContent className="p-6">
                <div className="text-2xl font-bold text-primary mb-2">100%</div>
                <p className="text-muted-foreground text-sm">Project Satisfaction</p>
              </CardContent>
            </Card>
            <Card className="card-gradient text-center">
              <CardContent className="p-6">
                <div className="text-2xl font-bold text-primary mb-2">1+</div>
                <p className="text-muted-foreground text-sm">Years Experience</p>
              </CardContent>
            </Card>
            <Card className="card-gradient text-center">
              <CardContent className="p-6">
                <div className="text-2xl font-bold text-primary mb-2">∞</div>
                <p className="text-muted-foreground text-sm">Passion for Code</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;