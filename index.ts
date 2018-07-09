import * as Echo from 'laravel-echo-server';
import { Admin } from './admin';
import { config } from './laravel-echo-server';

Echo.run(config).then( (echo) =>  new Admin(echo) );