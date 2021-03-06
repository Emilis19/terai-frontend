export interface ApplicationRequest {
  firstName: string,
  lastName: string,
  email: string,
  academyTime: boolean,
  academyTimeReason: string,
  contractAgreement: boolean,
  contractReason: string,
  likedTechnologies: string,
  reasonForApplying: string,
  school?: string,
  degree?: string,
  mobileNumber?: string,
  linkedinUrl?: string,
  projectUrl?: string;
  image?: string,
  hobbies?: string,
  referenceToIt?: string
}

export interface ApplicationStatusRequest {
  id: string;
  status: string;
}

export interface ApplicationHRResponse {
  id: string;
  firstName: string;
  lastName: string;
  dateCreated: string;
  status: string;
}

export interface ApplicationFullResponse {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  academyTime: boolean;
  academyTimeReason: string;
  contractAgreement: boolean;
  contractReason: string;
  likedTechnologies: string;
  reasonForApplying: string;
  school: string;
  degree: string;
  mobileNumber: string;
  linkedinUrl: string;
  image?: string;
  hobbies: string;
  referenceToIt: string;
  dateCreated: Date;
  status: string;
}

export interface ApplicationComment {
  hrId: string;
  hrName: string;
  comment: string;
  dateCreated: string;
}


export interface CommentRequest {
  hrId: string;
  appId: string;
  comment: string;
}

export interface DraftRequest {
  firstName?: string;
  email: string;
}
