export default function() {
  this.namespace = '/api/v1';
  this.timing    = 400;

  this.get('products', function(schema) {
    return schema.products.all();
  });
}
