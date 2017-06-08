import { index } from './index';
import { users } from './users';

module.exports = (app, express) => {
  let router = express.Router();

  /**
  *  Handling: Index
  *  method: GET
  *  uri: '/'
  */
  app.get('/', (req, res) => index(req, res));

  /**
  *  Handling: Users
  *  method: GET
  *  uri: '/users'
  */
  app.get('/users', (req, res) => users(req, res));
};