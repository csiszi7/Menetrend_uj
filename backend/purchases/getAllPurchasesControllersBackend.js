import Purchase from '../../models/PurchaseModel.mjs';

export const getAllPurchases = async (req, res) => { 
	try {
		const vasarlasok = await Purchase.find({}).populate('vasarlo').populate('konyvek');
		
		res.statusCode = 200;
		return res.render('purchases/purchases.ejs', { vasarlasok });
	} catch (error) {
		res.statusCode = 404;
		return res.render('404.ejs');
	}
};