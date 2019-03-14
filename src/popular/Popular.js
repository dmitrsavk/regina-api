import Model from "../ArticleModel";

export default class Popular {
  async get(req, res) {
    const result = await Model.findAll({ where: { categoryId: 1 } });
    res.json(result);
  }
}
