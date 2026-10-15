/**
 * Personalization:
 * import photo from '../assets/your-photo.jpg'
 * then set photo: photo,
 */
import resumeFile from '../assets/resume/AnanthalakshmiP_dotnet_developer.docx?url'

export const profile = {
  firstName: 'Ananthalakshmi',
  fullName: 'Ananthalakshmi P',
  initials: 'AP',
  role: '.NET Full Stack Developer',
  location: 'Dubai, UAE',
  photo: null,
  photoAlt: 'Ananthalakshmi P',
  contact: {
    phones: ['+971 501 775 210', '+91 76191 04743'],
    email: 'ananthalakshmi0415@gmail.com',
  },
  links: {
    github: 'https://github.com/Lakshmi243',
    linkedin: 'https://www.linkedin.com/in/ananthalakshmi-p-3235002a4/',
    email: 'mailto:ananthalakshmi0415@gmail.com',
    resume: resumeFile,
  },
  about: {
    greeting: 'Professional summary',
    intro:
      'Dynamic **.NET Full Stack Engineer** with over **12 years** of experience building scalable enterprise platforms in **retail, banking, and insurance**. Proven expertise in **ASP.NET Core**, **microservices**, **Angular**, **CQRS**, **MediatR**, and **clean architecture**.',
    experienceYears: '12+',
    highlightTools: [
      'ASP.NET Core & .NET 8/10',
      'Microservices & Azure Service Bus',
      'Angular & React',
      'CQRS, MediatR & clean architecture',
    ],
    paragraphs: [
      'I have led modernization of monolithic systems into **distributed microservices**, delivering high-performance **REST APIs** and **event-driven** solutions on **Microsoft Azure**. Recent work includes **retail analytics** (Snowflake, real-time dashboards) and **title & real estate** transaction platforms for U.S. clients.',
      'I am committed to **system performance**, **reliability**, **CI/CD**, and **cross-functional delivery**—from backlog refinement with product owners through **TDD** (xUnit/NUnit), observability (**Datadog**, **Application Insights**), and **Docker/Kubernetes** deployments. I use **AI-assisted coding and unit testing** (Cursor, Claude, Roo Code, GitHub Copilot) to reduce routine developer effort by **50–60%**, with reviews and automated tests guarding quality.',
      '**Education:** B.Tech — Jawaharlal Nehru Technological University, Kakinada.',
    ],
  },
  experience: [
    {
      id: 'symphony-ai',
      company: 'Symphony AI',
      client: 'Albertsons, Family Dollar & Dollar General — USA',
      role: '.NET Lead Developer',
      period: 'Jul 2024 — Present',
      location: 'Dubai, UAE / Remote',
      highlights: [
        'Architected scalable microservices for a retail analytics platform on .NET 8 and .NET 10, enabling real-time data processing and high-throughput insights.',
        'Built metadata-driven dashboards: Snowflake data, metric calculation, and interactive widgets, charts, and exportable data grids.',
        'Partnered with product owners on story refinement, backlog grooming, and technical scoping across Agile ceremonies.',
        'Established event-driven integration with Azure Service Bus for reliable asynchronous messaging across services.',
        'Reduced technical debt by migrating legacy code to .NET 8 with a focus on low latency and high throughput.',
        'Practiced test-driven development with xUnit; delivered Angular SPAs with RxJS, NgRx, and Material UI.',
        'Leveraged AI-assisted coding and unit testing with Cursor, Claude, Roo Code, and GitHub Copilot—reducing routine developer effort by 50–60% while keeping quality through code review and automated test suites.',
        'Implemented authentication and authorization with Keycloak and JWT; structured logging, validation, and error handling.',
        'Streamlined Azure DevOps CI/CD with Docker and Kubernetes, cutting deployment time by ~60%.',
        'Authored high-volume SQL Server stored procedures for transaction processing; led and mentored the dev team and interns.',
      ],
      expertise:
        'C#, .NET 10, ASP.NET Core Web API, Angular, Azure (AKS, Redis, Blob, Key Vault, Functions), Microservices, SignalR, WebSockets, EF Core, Dapper, Redis, Azure Service Bus, Snowflake, SQL Server, Datadog, Application Insights, Docker, Kubernetes, Git, JIRA, Cursor, Claude, Roo Code, GitHub Copilot',
    },
    {
      id: 'fnf-softpro',
      company: 'FNF',
      client: 'SoftPro — Title & Real Estate, NC, USA',
      role: '.NET Full Stack Lead Developer',
      period: 'Dec 2017 — Jul 2024',
      location: 'Remote / USA client',
      highlights: [
        'Led a Scrum team modernizing monoliths into microservices (.NET Core, gRPC, Mediator, CQRS, SQL Server), improving performance by ~30% and reducing errors.',
        'Delivered end-to-end order-processing modules for property buy/sell workflows in a title insurance web application.',
        'Gathered requirements with clients; designed layouts and shipped in Agile delivery cycles.',
        'Built MVC and .NET Core REST APIs (including mobile consumers); migrated AngularJS to Angular with TypeScript.',
        'Refactored legacy code; improved quality and security with SonarQube, Mend, Contrast, and Fortify.',
        'Owned pre-prod CI/CD, PR reviews, onboarding, and QA collaboration; optimized EF workloads via stored procedures and unit tests.',
        'Shipped HTML5/CSS3, Angular, Bootstrap, Angular Material, and React components with reusable, testable modules and directives.',
        'Applied repository-pattern Web APIs for database CRUD operations.',
      ],
      expertise:
        'C#, .NET Core 3.1, Angular, React, Kendo UI, Microservices, Clean Architecture, Mediator, CQRS, RabbitMQ, EF Core, Dapper, Azure, Docker, Kubernetes, xUnit/NUnit, TFS, WCF, WPF, SQL Server, Postman, Swagger',
    },
    {
      id: 'cgi-hsbc',
      company: 'CGI',
      client: 'HSBC Bank, Canada — Foreign Exchange (FX) Platform',
      role: '.NET Developer',
      period: 'May 2016 — Dec 2017',
      location: 'Canada client',
      highlights: [
        'Worked on transaction processing, invoicing, and customer workflows with exposure to international payments (e.g. SWIFT).',
        'Developed n-tier .NET applications using C#, ASP.NET, Web Services, Web Forms, WinForms, IIS, and SQL Server.',
        'Built UI with ASP.NET, HTML5, JavaScript, CSS3, and AngularJS.',
        'Introduced OAuth2-based authentication to strengthen security and reduce vulnerabilities.',
        'Implemented MVC controllers with varied action results (files, scripts, JSON, redirects, HTTP status).',
      ],
      expertise:
        'ASP.NET MVC, ADO.NET, Entity Framework, C#, SQL Server, WCF, AngularJS, HTML, JavaScript, CSS, NUnit',
    },
    {
      id: 'techmahindra',
      company: 'Tech Mahindra',
      client: 'Premium Credit — Finance & Insurance, UK',
      role: '.NET Developer',
      period: 'Jan 2014 — Apr 2016',
      location: 'UK client',
      highlights: [
        'Contributed to COBOL-to-.NET migration with SQL Server for a finance and insurance platform.',
        'Built ASP.NET MVC frontend (JavaScript, jQuery, CSS, HTML) and Web API backend with Entity Framework.',
        'Delivered on schedule with strong quality; produced technical documentation for handover.',
        'Led coding and code reviews; full lifecycle support from requirements through integration and production.',
      ],
      expertise:
        'ASP.NET MVC, ADO.NET, C#, SQL Server, Entity Framework, Waterfall, HTML, JavaScript, CSS, Visual Studio, T-SQL, NUnit, Moq, TFS',
    },
  ],
  skills: [
    {
      title: '.NET technologies',
      items: [
        'C#, .NET Core, .NET 8, .NET 10',
        '.NET Framework 4.8+',
        'LINQ & RESTful APIs',
        'Microservices architecture',
      ],
    },
    {
      title: 'Languages',
      items: ['C#', 'SQL', 'Python'],
    },
    {
      title: 'Web & frontend',
      items: [
        'ASP.NET Core, MVC, Razor Pages',
        'Angular (v12+), React.js',
        'JavaScript (ES6+), TypeScript',
        'HTML5, CSS3, Bootstrap',
        'Node.js',
      ],
    },
    {
      title: 'Databases & cloud',
      items: ['SQL Server', 'Snowflake', 'Microsoft Azure'],
    },
    {
      title: 'DevOps & containers',
      items: [
        'Docker & Kubernetes',
        'CI/CD pipelines',
        'Git & GitHub',
      ],
    },
    {
      title: 'Testing & observability',
      items: [
        'xUnit, NUnit',
        'Moq, NSubstitute, Fluent Assertions',
        'Datadog & Application Insights',
        'SonarQube',
        'Cursor, Claude, Roo Code & GitHub Copilot (AI-assisted dev)',
      ],
    },
    {
      title: 'ORM & architecture',
      items: [
        'Entity Framework Core & Dapper',
        'Clean architecture & SOLID',
        'CQRS & MediatR',
      ],
    },
    {
      title: 'IDEs & tools',
      items: [
        'Visual Studio & VS Code',
        'SSMS, Postman, Swagger',
        'Nginx, IIS',
        'Jira & Confluence',
      ],
    },
  ],
  projects: {
    headline: 'Selected work',
    description:
      'Retail analytics and metadata-driven dashboards (Snowflake, .NET microservices); title insurance order processing and SPA modernization; HSBC Canada FX and payments workflows; COBOL-to-.NET transformation for UK finance & insurance. Case studies and samples available on request.',
  },
  certifications: [
    {
      id: 'az-204',
      code: 'AZ-204',
      title: 'Microsoft Certified: Azure Developer Associate',
      url:
        'https://learn.microsoft.com/api/credentials/share/en-us/AnanthalakshmiP/829AACA27BE1CE29?sharingId=8E0153D61DE74A2E',
    },
    {
      id: 'az-900',
      code: 'AZ-900',
      title: 'Microsoft Certified: Azure Fundamentals',
      url:
        'https://learn.microsoft.com/api/credentials/share/en-us/AnanthalakshmiP/CB092F509800E6?sharingId=8E0153D61DE74A2E',
    },
  ],
  /** Add award entries: { id, title, year?, organization? } */
  awards: [],
  hackathons: {
    description:
      'Hackathons, tech summits, and community events—including Chhalaang 2.0 and the Microsoft Future Ready Technology Summit.',
  },
}
