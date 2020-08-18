import { environment } from 'src/environments/environment';

export class Environment implements Readonly<typeof environment> {
  production: boolean;
  baseUrl: string;
  google: {
    clientId: string;
  }
}
