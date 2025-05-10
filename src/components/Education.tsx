
import { 
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@/components/ui/card";

const Education = () => {
  const education = {
    degree: "Bachelor in Business Study (BBS)",
    institution: "Patan Multiple Campus",
    location: "Patan, Nepal"
  };
  
  const certificates = [
    {
      title: "Digital Marketing",
      provider: "Mindluster"
    },
    {
      title: "Big SEO for Google SEO",
      provider: "Mindluster"
    },
    {
      title: "Marketing With Canva",
      provider: "Canva"
    },
    {
      title: "AI in the classroom",
      provider: "Canva"
    }
  ];

  return (
    <section id="education" className="bg-white">
      <div className="section-container">
        <h2 className="section-title">Education & Certifications</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold mb-4 text-brand-navy">Education</h3>
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">{education.degree}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  <span className="font-medium">{education.institution}</span>
                  <br />
                  <span>{education.location}</span>
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="animate-fade-in animate-delay-200">
            <h3 className="text-2xl font-bold mb-4 text-brand-navy">Professional Certificates</h3>
            <Card>
              <CardContent className="pt-6">
                <ol className="list-decimal pl-5 space-y-3">
                  {certificates.map((cert, index) => (
                    <li key={index} className="text-gray-700">
                      <span className="font-medium">{cert.title}</span>
                      <span className="block text-sm text-gray-500">{cert.provider}</span>
                    </li>
                  ))}
                </ol>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
