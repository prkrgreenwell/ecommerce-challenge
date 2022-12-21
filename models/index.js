/** @format */

// import models
const Product = require("./Product");
const Category = require("./Category");
const Tag = require("./Tag");
const ProductTag = require("./ProductTag");

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: "category_id",
  onDelete: "cascade",
});
// Categories have many Products
Category.hasMany(Product, {
  foreignKey: "category_id",
  onDelete: "cascade",
});
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag,
  as: "tags_on_product",
  foreignKey: "product_id",
  onDelete: "cascade",
});
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag,
  as: "products_with_tag",
  foreignKey: "tag_id",
  onDelete: "cascade",
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
