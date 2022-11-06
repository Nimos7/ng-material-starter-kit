export interface UserModel {
  readonly address: {
    geolocation: {
      lat: string;
      long: string;
    }
    city: string;
    street: string;
    number: string;
    zipcode: string;
  }
  readonly id: number;
  readonly email: string
  readonly username: string;
  readonly password: string;
  readonly name: {
    firstname: string;
    lastname: string;
  }
  readonly phone: string;
}
