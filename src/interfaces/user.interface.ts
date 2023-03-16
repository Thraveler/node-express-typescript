import { AuthInterface } from "./auth.interface";

interface UserInterface extends AuthInterface {
  username: string;
  age: number;
}

export { UserInterface };