import User from './User.js';
import Solution from './Solution.js';

const userData = { login: 'user@devmentor.pl', password: '123456' }
const adminData = { login: 'admin@devmentor.pl', password: '1234567890' }

const user = new User( userData );
user.register();

