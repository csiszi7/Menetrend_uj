import User from '../../models/UserModel.mjs';
import Book from '../../models/BookModelOnePicture.mjs';
import Purchase from '../../models/PurchaseModel.mjs';

export const postNewPurchase = async (req, res) => { 
	try {
		const { id, books } = req.body;

		const vasarlo = await User.findById({ _id: id });
		const konyvek = [];
		for (let i = 0; i < books.length; i++) {
			const konyvKeres = await Book.findById({ _id: books[i]._id });			
			let peldanySzamKeres = konyvKeres.peldanySzam - books[i].darabszam;
			let eladottKeres = konyvKeres.eladott + books[i].darabszam;
			const objektum = { peldanySzam: peldanySzamKeres, eladott: eladottKeres };
			const konyv = await Book.findByIdAndUpdate({ _id: books[i]._id }, { $set: objektum });
			konyvek.push(konyv);	
		}
		
		const newPurchase = new Purchase({ vasarlo, konyvek });		
		await newPurchase.save();		

		res.statusCode = 201;
		return res.json({ msg: 'Sikeres vásárlás!' });
	} catch (error) {
		res.statusCode = 500;
		return res.json({ msg: 'Valami hiba történt: ' + error.message });
	}
};