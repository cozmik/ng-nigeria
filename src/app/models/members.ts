export interface Member {
  firstName: string;
  lastName: string;
  company: string;
  profilePix: string;
  jobRole: string;
  socials: Array<{
    name: string;
    link: string;
  }>;
}
