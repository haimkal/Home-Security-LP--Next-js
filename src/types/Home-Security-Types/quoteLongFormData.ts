export type FormData = {
  propertyType: string;
  zipCode: string;
  installPref: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  securityFeatures: string[];
  systemType: string;
  address: string;
  city: string;
};

export const INITIAL_DATA: FormData = {
  propertyType: "",
  zipCode: "",
  installPref: "",
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  securityFeatures: [],
  systemType: "",
  address: "",
  city: "",
};
