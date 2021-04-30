const mongoose = require('mongoose');

mongoose
	.connect('mongodb://localhost:27017/shopApp', {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log('CONNECTION OPEN');
	})
	.catch((err) => {
		console.log('Oh no, there was an error!');
		console.log(err);
	});

const productSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	price: {
		type: Number,
		require: true,
		min: 0,
	},
	onSale: {
		type: Boolean,
		default: false,
	},
	categories: [String],
	qty: {
		warehouse: {
			type: Number,
			default: 0,
		},
		inStore: {
			type: Number,
			default: 0,
		},
	},
});

const Product = mongoose.model('Product', productSchema);

productSchema.methods.toggleOnSale = function () {
	this.OnSale = !this.onSale;
	this.save();
};

productSchema.methods.addCategory = function (newCat) {
	this.categories.push(newCat);
	return this.save();
};

productSchema.statics.fireSale = function () {
	this.updateMany({}, { onSale: true, price: 0 });
};

const findProduct = async () => {
	const foundProduct = await Product.findOne({ name: 'Mountain Bike' });
	console.log(foundProduct);
	foundProduct.toggleOnSale();
};

const bike = new Product({
	name: 'Bike Helmet',
	price: 19.99,
	categories: ['Cycling', 'Safety', 'Sports'],
});
bike.save()
	.then((data) => {
		console.log('IT WORKED');
		console.log(data);
	})
	.catch((err) => {
		console.log('Opps, something went wrong!');
		console.log(err);
	});
