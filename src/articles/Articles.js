import Model from "../ArticleModel";

export default class Articles {
  async get(req, res) {
    const result = await Model.findAll({ where: { alias: req.params.alias } });
    res.json(result[0]);
  }
}
