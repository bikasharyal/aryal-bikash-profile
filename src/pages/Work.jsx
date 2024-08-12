import React, { useState } from 'react';
import DanpheEMR from '../assets/test.jpg';
import { FaGithub} from 'react-icons/fa' 
const Work = () => {
  // Hardcoded projects data
  const [projects] = useState([
    {
      title: 'Danphe-Health HIMS ',
      code_url: 'https://github.com/opensource-emr/hospital-management-emr',
      demo_url: 'https://danphehealth.com/',
      image: DanpheEMR,
      description: 'Danphe Health is a Hospital Information Management System or Electronic Medical Record System that is used by more than 100+ hospitals in Nepal. It is a huge enterprise level, web based application with multiple modules that is required to operate and process hospital day-to-day activities. During the period of 3 years I involved in the development of various modules mainly in Inventory, Medical and Patient Reporting, and Accounting Module.',
      technologies: 'C# ASP.Net Core, Angular, MS SQL Server',
      company: 'Imark Pvt. Ltd.',
      companyLink:'https://www.imarkdigital.com/'
    },
    {
      title: 'Danphe-Care Website CMS',
      code_url: '',
      demo_url: 'https://danphecare.com/home',
      image: DanpheEMR,
      description: 'Content Management System for DanpheCare website which is the official site of daughter company of Imark, that provides various online service related with health like online doctor consultations, Lab at Home service with one click, handles blood donation events and many more.',
      technologies: 'C# ASP.Net Core, Angular, MS SQL Server, Bootstrap',
      company: 'Imark Pvt. Ltd.',
      companyLink:'https://www.imarkdigital.com/'
    },
    {
      title: 'Cash Management Web App (Microservices)',
      code_url: '',
      demo_url: '',
      image: DanpheEMR,
      description: 'Web application mainly designed for cash management in banks that tracks the cash flow in the bank, cash deposit, cash withdrawal, and cash transfer. The system is integrated with the bank’s core system, ATM or TCR machines.',
      technologies: 'C# ASP.Net Core, VueJs, DynamoDb, Docker, AWS',
      company: 'Vastika Inc.',
      companyLink:'https://www.vastika.com/'
    },
    {
      title: 'ATM Operation Management Software',
      code_url: '',
      demo_url: 'https://global.hyosunginnovue.com/products/blueversefleet/',
      image: DanpheEMR,
      description: 'Desktop application for managing ATMs that includes ATM setting configuration, real-time monitoring, transaction management, and reporting.',
      technologies: 'C# ASP.Net, WPF, MS SQL Server',
      company: 'Vastika Inc.',
      companyLink:'https://www.vastika.com/'
    },
    {
      title: 'Assisted Self-Service Teller System (for ATM Users)',
      code_url: '',
      demo_url: 'https://global.hyosunginnovue.com/products/blueverseteller/',
      image: DanpheEMR,
      description: 'Desktop based customer support system for ATM users and Bank employees who can assist their customers on real-time and reduce the wait-time. The system is integrated with the ATM machine and the bank’s core system.',
      technologies: 'C# ASP.Net, WPF, MS SQL Server',
      company: 'Vastika Inc.',
      companyLink:'https://www.vastika.com/'
    },
    {
      title: 'Event Management Web App',
      code_url: 'https://github.com/bikasharyal/semester-end-pj-epita-bikash-aryal',
      demo_url: 'https://github.com/bikasharyal/semester-end-pj-epita-bikash-aryal',
      image: DanpheEMR,
      description: 'Web application for managing events with features like event creation, event registration, event management, and event reporting. With proper authentication and authorization that insures the security of the system.',
      technologies: 'NodeJs/Express, ReactJs, MangoDb, JWT, TailWind CSS',
      company: 'University Project'
    }
  ]);

  return (
    <div name="work" className="w-full min-h-screen bg-primary text-gray-300">
      <div className="w-full h-full max-w-[1300px] mx-auto p-4 flex flex-col justify-center">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-600"
            style={{ color: '#800000', textDecoration: 'underline', textDecorationColor: '#800000' }}>
            Work
          </p>
          <p className="py-6">Explore the projects I've worked on, both professionally and personally.</p>
        </div>
        <div className="overflow-x-auto">
          <table className="table-auto w-full text-left">
            <thead>
              <tr className="text-gray-200" style={{ backgroundColor: 'rgba(193,113,113, 0.07)' }}>
                <th className="px-4 py-2">Project Name</th>
                <th className="px-4 py-2">Description</th>
                <th className="px-4 py-2">Technologies Used</th>
                <th className="px-4 py-2">Associated Company</th>
                <th className="px-4 py-2">Open-Source code</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project, index) => (
                <tr key={index} style={index % 2 !== 0 ? { backgroundColor: 'rgba(193,113,113, 0.07)' } : {}}>
                  <td className="px-4 py-2" style={index % 2 === 0 ?{ backgroundColor: 'rgba(86, 36, 36, 0.15)' }:{}}><a href={project.demo_url} target="_blank" rel="noopener noreferrer" className="hover:underline text-gray-200">{project.title}</a></td>
                  <td className="px-4 py-2">{project.description}</td>
                  <td className="px-4 py-2" style={index % 2 === 0 ?{ backgroundColor: 'rgba(86, 36, 36, 0.15)' }:{}}>{project.technologies}</td>
                  <td className="px-4 py-2">{project.company}</td>
                  <td className="px-4 py-2 text-center" style={index % 2 === 0 ?{ backgroundColor: 'rgba(86, 36, 36, 0.15)' }:{}}>
                    <a href={project.code_url} target="_blank" rel="noopener noreferrer" className="hover:text-2xl">
                    {project.code_url ? (
                        <FaGithub className="h-[30px] w-[30px] ml-6" />
                      ) : (
                        '-'
                    )}
                    </a>
                  </td>
                  {/* <td className="px-4 py-2">
                    <img src={project.image} alt={project.title} className="w-16 h-16 object-cover" />
                  </td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Work;
