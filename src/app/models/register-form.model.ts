export interface RegisterFormModel {
  readonly email: string;
  readonly   username: string;
  readonly  password: string;
  readonly name: {
    firstname: string;
    lastname: string;
  }

  readonly  phone: number;
  readonly address: {
    city: string;
    street: string;
    number: string;
    zipcode: string;
  }
}


