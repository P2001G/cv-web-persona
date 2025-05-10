
import { 
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Experience = () => {
  const experiences = [
    {
      company: "Kailaasa Advertising",
      title: "Client Service Specialist",
      period: "May 2025 - Present",
      responsibilities: [
        "Research and identify potential clients and business opportunities.",
        "Develop and maintain strong, long-term client relationships.",
        "Create and deliver compelling sales pitches and business proposals.",
        "Collaborate with marketing and product teams to align on business objectives."
      ]
    },
    {
      company: "Sakchha Technology",
      title: "Customer Service Specialist / Social Media Manager",
      period: "April 2024 - April 2025",
      responsibilities: [
        "Analyze and report on lead generation metrics to track progress and identify areas.",
        "Lead and mentor a team of lead generation specialists to optimize performance.",
        "Researching and implementing content recommendations for organic SEO success.",
        "Optimize social media presence and content strategy through data-driven audience insights.",
        "Handle the social media presence and content strategy."
      ]
    },
    {
      company: "Kodali Ventures",
      title: "Digital Marketing Head / B2B Sales",
      period: "Jan 2023 - Feb 2024",
      responsibilities: [
        "Develop and execute B2B sales strategies aligned with company goals.",
        "Identify and target new business opportunities across relevant industries.",
        "Build, manage, and mentor a high-performing B2B sales team.",
        "Establish strong relationships with key decision-makers and stakeholders.",
        "Lead negotiations and close high-value deals with corporate clients."
      ]
    },
    {
      company: "Puryau Services",
      title: "Social Media Marketer / B2C Sales",
      period: "Aug 2020 - Nov 2022",
      responsibilities: [
        "Analyze market trends, competitor activities, and client needs to refine strategies.",
        "Collaborate closely with marketing, product, and operations teams.",
        "Achieve and exceed sales targets, revenue goals, and business expansion plans.",
        "Prepare regular reports on sales forecasts, pipeline status, and market feedback."
      ]
    },
    {
      company: "Smart Nepal",
      title: "Social Media Manager / B2C Sales",
      period: "Dec 2018 - Jun 2020",
      responsibilities: [
        "Managed the social media presence, created content, and executed marketing campaigns.",
        "Manage and estimate budget for monthly campaigns.",
        "Execute and create perfect ads strategy after analyzing previous ads data.",
        "Analyze market trends, competitor activities, and client needs to refine strategies."
      ]
    }
  ];

  return (
    <section id="experience" className="bg-gray-50">
      <div className="section-container">
        <h2 className="section-title">Professional Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className={`animate-fade-in animate-delay-${index * 100}`}>
              <CardHeader className="pb-2">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                  <div>
                    <CardTitle className="text-xl text-brand-navy">{exp.company}</CardTitle>
                    <CardDescription className="text-lg font-medium text-brand-gray">
                      {exp.title}
                    </CardDescription>
                  </div>
                  <Badge variant="outline" className="text-brand-blue border-brand-blue self-start md:self-center">
                    {exp.period}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-1 text-gray-700">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx}>{resp}</li>
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

export default Experience;
