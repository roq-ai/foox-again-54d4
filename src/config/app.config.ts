interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Admin'],
  customerRoles: ['Freelancer'],
  tenantRoles: ['Admin', 'Recruiter'],
  tenantName: 'Company',
  applicationName: 'Foox again',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Manage your freelance profile',
    'Apply for jobs',
    'Manage applications',
    'Update personal user info',
  ],
  ownerAbilities: ['Manage country data', 'Manage freelance profiles', 'Manage job postings', 'Manage applications'],
  getQuoteUrl: 'https://app.roq.ai/proposal/cb22073c-2adc-41b6-b8c8-0630a15bc6f9',
};
