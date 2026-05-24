import type { ApplicationCreateFormType } from './useApplicationCreateForm'

export const localLetter = (data: ApplicationCreateFormType) => `Dear ${data.company} Team,
  
  I am writing to express my interest in the ${data.jobTitle} position.
  
  My experience in the realm combined with my skills in ${data.skills} make me a strong candidate for this role.
  
  ${data.details}
  
  I am confident that my skills and enthusiasm would translate into valuable contributions to your esteemed organization.
  
  Thank you for considering my application. I eagerly await the opportunity to discuss my qualifications further.`
