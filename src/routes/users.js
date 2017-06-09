import pegasus_config from '../../public/data/pegasus_config';

/* GET users. */
let users = (req, res) => {
  return res.json(pegasus_config);
}

export { users };