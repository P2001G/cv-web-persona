
import { 
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      title: "UCEL Inc.",
      role: "Lead Generation Specialist",
      period: "Jun 2024 - Present",
      type: "Full-Time | Remote (Canada)",
      details: [
        "Specialized in Lead Optimization and Online Lead Generation.",
        "Focused on Business Development and Pipeline Generation.",
        "Supported the Sales team with high-quality lead sourcing and nurturing strategies."
      ]
    },
    {
      title: "Vequity.ai",
      role: "Customer Service Support Specialist",
      period: "Apr 2024 - Sep 2024",
      type: "Full-Time | Remote (United States)",
      details: [
        "Delivered exceptional Customer Service and Support.",
        "Engaged in Business Development and LinkedIn Marketing activities.",
        "Conducted Market Research and optimized online lead generation efforts."
      ]
    },
    {
      title: "Common Forge Ventures",
      role: "Customer Service Specialist",
      period: "Mar 2024 - Jul 2024",
      type: "Full-Time | Remote (United States)",
      details: [
        "Provided top-tier Customer Support and resolved client queries effectively.",
        "Assisted in Business Development and Pipeline Generation.",
        "Executed Market Research and LinkedIn Marketing campaigns."
      ]
    }
  ];

  return (
    <section id="projects" className="bg-white">
      <div className="section-container">
        <h2 className="section-title">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="h-full animate-fade-in">
              <CardHeader>
                <CardTitle className="text-xl text-brand-navy">{project.title}</CardTitle>
                <CardDescription className="font-medium text-brand-gray">{project.role}</CardDescription>
                <div className="flex flex-wrap gap-2 mt-2">
                  <Badge variant="outline" className="text-brand-blue border-brand-blue">
                    {project.period}
                  </Badge>
                  <Badge variant="secondary">{project.type}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  {project.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
