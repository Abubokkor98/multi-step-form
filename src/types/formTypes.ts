export type PersonalInfo = {
  fullName: string;
  email: string;
  phone: string;
};

export type AddressInfo = {
  street: string;
  city: string;
  zipCode: string;
};

export type AccountInfo = {
  username: string;
  password: string;
  confirmPassword: string;
};

export type FormData = {
  personal?: PersonalInfo;
  address?: AddressInfo;
  account?: AccountInfo;
};

export type FormStep = 1 | 2 | 3 | 4;

export type FormStatus = "idle" | "submitting" | "success" | "error";
