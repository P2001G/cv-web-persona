
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="bg-brand-navy text-white">
      <div className="section-container">
        <h2 className="section-title text-white border-brand-lightblue">Contact</h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="animate-fade-in">
              <h3 className="text-xl font-bold mb-6">Get In Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-brand-lightblue" />
                  <a href="mailto:Prashantghim123@gmail.com" className="hover:text-brand-lightblue transition-colors">
                    Prashantghim123@gmail.com
                  </a>
                </div>
                
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-brand-lightblue" />
                  <a href="tel:+9779847336894" className="hover:text-brand-lightblue transition-colors">
                    +977 9847336894
                  </a>
                </div>
                
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-brand-lightblue" />
                  <span>Lubhoo, Lalitpur, Nepal</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <Linkedin className="w-5 h-5 text-brand-lightblue" />
                  <a href="#" className="hover:text-brand-lightblue transition-colors">
                    Prashant Ghimire
                  </a>
                </div>
              </div>
            </div>
            
            <div className="animate-fade-in animate-delay-200">
              <h3 className="text-xl font-bold mb-6">Send a Message</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-brand-blue"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-brand-blue"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-brand-blue"
                  ></textarea>
                </div>
                
                <Button className="w-full bg-brand-blue hover:bg-brand-blue/80">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
