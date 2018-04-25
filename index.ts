import * as Echo from 'laravel-echo-server';
import { Admin } from './admin';
import * as config from './laravel-echo-server.json';

Echo.run(config).then( (echo) =>  new Admin(echo) );