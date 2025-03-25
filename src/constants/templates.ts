export const templates = [
    {
      id: "blank",
      label: "Blank Document",
      imageUrl: "/blank-document.svg",
      initialContent: "<p></p>",
    },
    {
      id: "software-proposal",
      label: "Software Development Proposal",
      imageUrl: "/software-proposal.svg",
      initialContent: `
        <h1>Software Development Proposal</h1>
        <h2>Project Title: [Your Project Name]</h2>
        <p><strong>Prepared by:</strong> [Your Name]</p>
        <p><strong>Date:</strong> [DD/MM/YYYY]</p>
        <h2>1. Introduction</h2>
        <p>We propose developing a software solution to address [describe problem]. This document outlines the scope, timeline, and deliverables.</p>
        <h2>2. Scope of Work</h2>
        <p>The project will include:</p>
        <ul>
          <li>Requirement analysis</li>
          <li>UI/UX design</li>
          <li>Backend & frontend development</li>
          <li>Testing & deployment</li>
        </ul>
        <h2>3. Timeline</h2>
        <p>The estimated project duration is [XX] weeks.</p>
      `,
    },
    {
      id: "project-proposal",
      label: "Project Proposal",
      imageUrl: "/project-proposal.svg",
      initialContent: `
        <h1>Project Proposal</h1>
        <p><strong>Project Title:</strong> [Your Project Name]</p>
        <p><strong>Prepared by:</strong> [Your Name]</p>
        <p><strong>Date:</strong> [DD/MM/YYYY]</p>
        <h2>Introduction</h2>
        <p>The purpose of this project is to [explain purpose].</p>
        <h2>Objectives</h2>
        <ul>
          <li>Objective 1</li>
          <li>Objective 2</li>
        </ul>
        <h2>Expected Outcomes</h2>
        <p>The project aims to achieve the following outcomes:</p>
        <ul>
          <li>Outcome 1</li>
          <li>Outcome 2</li>
        </ul>
      `,
    },
    {
      id: "business-letter",
      label: "Business Letter",
      imageUrl: "/business-letter.svg",
      initialContent: `
        <p>[Your Name]</p>
        <p>[Your Address]</p>
        <p>[City, State, Zip Code]</p>
        <p>[Your Email]</p>
        <p>[Date]</p>
        <p>[Recipient's Name]</p>
        <p>[Company Name]</p>
        <p>[Company Address]</p>
        <p>Dear [Recipient's Name],</p>
        <p>I am writing to [state purpose].</p>
        <p>Thank you for your time.</p>
        <p>Sincerely,</p>
        <p>[Your Name]</p>
      `,
    },
    {
      id: "resume",
      label: "Resume",
      imageUrl: "/resume.svg",
      initialContent: `
        <h1>[Your Name]</h1>
        <p>[Your Email] | [Your Phone] | [Your LinkedIn]</p>
        <h2>Summary</h2>
        <p>[A brief summary of your skills and experience]</p>
        <h2>Experience</h2>
        <p><strong>[Job Title]</strong> - [Company Name] ([Year - Year])</p>
        <ul>
          <li>Responsibility 1</li>
          <li>Responsibility 2</li>
        </ul>
        <h2>Education</h2>
        <p>[Degree] - [University Name] ([Year])</p>
      `,
    },
    {
      id: "cover-letter",
      label: "Cover Letter",
      imageUrl: "/cover-letter.svg",
      initialContent: `
        <p>[Your Name]</p>
        <p>[Your Address]</p>
        <p>[Your Email]</p>
        <p>[Date]</p>
        <p>[Hiring Manager's Name]</p>
        <p>[Company Name]</p>
        <p>Dear [Hiring Manager's Name],</p>
        <p>I am excited to apply for the [Job Title] position at [Company Name].</p>
        <p>Sincerely,</p>
        <p>[Your Name]</p>
      `,
    },
    {
      id: "letter",
      label: "Letter",
      imageUrl: "/letter.svg",
      initialContent: `
        <p>[Your Name]</p>
        <p>[Your Address]</p>
        <p>[Your Email]</p>
        <p>[Date]</p>
        <p>[Recipient’s Name]</p>
        <p>Dear [Recipient’s Name],</p>
        <p>I hope this letter finds you well.</p>
        <p>Sincerely,</p>
        <p>[Your Name]</p>
      `,
    },
  ];
  