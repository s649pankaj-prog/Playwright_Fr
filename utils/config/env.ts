function required(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing environment variable: ${name}`);
  }
  return value;
}

export const env = {
  baseUrl: required('BASE_URL'),
  standardUser: required('STANDARD_USER'),
  password: required('PASSWORD'),
  invUser: required('INV_USERNAME'),
  invPass: required('INV_PASS'),
  lockedUser: required('LOCKED_USER'),
  lockedErr: required('LOCKED_ERR'),
  invErr: required('INVALID_ERR')
};