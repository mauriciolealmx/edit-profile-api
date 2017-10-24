/* GET home page. */
let index = (req, res) => {
  return res.render('index', { title: 'Express' })
}

export { index }
