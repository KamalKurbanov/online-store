const sequelize = require('../db')
const { DataTypes } = require('sequelize')

const User = sequelize.define('user', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    password: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING, unique: true },
    roles: { type: DataTypes.STRING, defaultValue: 'USER' }
})

const Basket = sequelize.define('basket', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
})

const BasketProduct = sequelize.define('basket_product', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
   
})

const Product = sequelize.define('product', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, unique: true, allowNull: false},
    price: { type: DataTypes.INTEGER, allowNull: false },
    rating: { type: DataTypes.INTEGER, defaultValue: 0 },
    img: { type: DataTypes.STRING }
})

const Type = sequelize.define('type', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, unique: true, allowNull: false},   
})

const Brand = sequelize.define('brand', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, unique: true, allowNull: false},   
})


const Rating = sequelize.define('rating', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    rate: { type: DataTypes.INTEGER, allowNull: false }   
})

const ProducInfo = sequelize.define('product_info', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: { type: DataTypes.STRING, unique: true, allowNull: false },
    description: { type: DataTypes.STRING, allowNull: false }   
})

const TypeBrand = sequelize.define('type_brand', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },

})


User.hasOne(Basket)
Basket.belongsTo(User)

User.hasMany(Rating)
Rating.belongsTo(User)

Product.hasOne(ProducInfo)
ProducInfo.belongsTo(Product)

Product.hasMany(BasketProduct)
BasketProduct.belongsTo(Product)

Basket.hasMany(BasketProduct)
BasketProduct.belongsTo(Basket)

Brand.belongsToMany(Type, { through: TypeBrand })
Type.belongsToMany(Brand, { through: TypeBrand })

module.exports = {
    User,
    Basket,
    BasketProduct,
    Product,
    Type,
    Brand,
    Rating,
    ProducInfo,
    TypeBrand
}