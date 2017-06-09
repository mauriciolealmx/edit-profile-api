import { index } from './index';
import { getMailConfig } from './mail-config';

module.exports = (app, express) => {
  let router = express.Router();

  /**
  *  Handling: Index
  *  method: GET
  *  uri: '/'
  */
  app.get('/', (req, res) => index(req, res));

  /**
  *  Handling: mailConfig
  *  method: GET
  *  uri: '/mailConfig'
  */
  app.get('/mailConfig', (req, res) => getMailConfig(req, res));
};