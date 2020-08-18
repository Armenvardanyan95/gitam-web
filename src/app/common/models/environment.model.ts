import { environment } from '../../../environments/environment';

export class EnvironmentModel implements Readonly<typeof environment> {
  production: boolean;
  baseUrl: string;
  google: {
    key: string;
  };
}
