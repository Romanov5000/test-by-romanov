import type { ApplicationCreateFormType } from './useApplicationCreateForm'

export const generateApiPrompt = (
  data: ApplicationCreateFormType
) => `Write a professional and concise cover letter for a job application.

Use the following data provided in the request body:
- Job Title: ${data.jobTitle}
- Company: ${data.company}
- Candidate Skills: ${data.skills}
- Candidate Details: ${data.details}

Requirements:
- Begin with a greeting addressed directly to the company or its hiring manager (e.g., “Dear Ford team,” or “Dear Hiring Manager at Ford,”).
- Do not include any placeholders, brackets, template fields, or invented personal data.
- Do not include a signature, closing phrase, or name at the end (no “Sincerely,” or similar).
- Do not include addresses, dates, or headers.
- Output only the final cover letter text in English.
`
