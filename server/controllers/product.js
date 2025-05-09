const { Product, ProducInfo } = require('../models/models');
const uuid = require('uuid');
const path = require('path');
const ApiError = require('../error/errorHandlers');

class ProductControllers {
  async getAll(req, res) {
    const { brandId: brandIdQuery, productId: productIdQuery } = req.query;

    let products;

    if (brandIdQuery && !productIdQuery) {
      //TODO проверить на валидность числового значения
      products = await Product.findAll({
        raw: true,
        where: { brandId: brandIdQuery },
      });
    }

    if (brandIdQuery && productIdQuery) {
      //TODO проверить на валидность числового значения
      products = await Product.findAll({
        raw: true,
        where: { brandId: brandIdQuery, id: productIdQuery },
      });
    }

    if (!brandIdQuery && !productIdQuery) {
      //TODO проверить на валидность числового значения
      products = await Product.findAll({ raw: true });
    }

    return res.json(products);
  }

  async create(req, res, next) {
    try {
      const { id, name, price, brandId, info } = req.body;
      const { img } = req.files;

      const fileName = uuid.v4() + '.jpg';
      img.mv(path.resolve(__dirname, '..', 'static', fileName));
      const product = await Product.create({
        id,
        name,
        price,
        img: fileName,
        brandId,
      });

      if (info) {
        const deserializeInfo = JSON.parse(info);

        deserializeInfo.forEach((x) => {
          if (x?.title && x?.description) {
            const { title, description } = x;
            ProducInfo.create({ title, description, productId: id });
          }
        });
      }

      return res.json(product);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async getOne(req, res) {
    const { id } = req.params;

    const product = await Product.findOne({
      where: { id },
      include: [{ model: ProducInfo, as: 'info' }],
    });

    return res.json(product);
  }
}

module.exports = new ProductControllers();
