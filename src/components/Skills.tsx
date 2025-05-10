
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      category: "Marketing",
      skills: [
        "Social Media Marketing", 
        "Paid Ads Management", 
        "Marketing Automation Tools (HubSpot, Mailchimp, AWS)",
        "Content Creation",
        "SEO Optimization",
        "Campaign Management"
      ]
    },
    {
      category: "Sales",
      skills: [
        "B2B Sales Strategies", 
        "B2C Sales Strategies", 
        "Market Research and Analysis",
        "Lead Generation",
        "Sales Pitching",
        "Negotiations"
      ]
    },
    {
      category: "Management",
      skills: [
        "Client Relationship Management", 
        "Team Collaboration and Leadership", 
        "Project Management",
        "Goal-Oriented Mindset",
        "Performance Optimization",
        "Strategy Development"
      ]
    }
  ];

  return (
    <section id="skills" className="bg-gray-50">
      <div className="section-container">
        <h2 className="section-title">Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="card animate-fade-in"
            >
              <h3 className="text-xl font-bold mb-4 text-brand-navy">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <Badge 
                    key={idx}
                    variant="secondary" 
                    className="bg-brand-lightgray text-brand-navy text-sm py-1.5 px-3"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
