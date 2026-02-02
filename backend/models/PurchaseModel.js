import mongoose from "mongoose";

const purchaseSchema = new mongoose.Schema({
	vasarlo : { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
	konyvek : [{ type: mongoose.Schema.Types.ObjectId, ref: 'book', }],
	idopont : { type: Date, default: Date.now },
}, {
	timestamps: true
});

const Purchase = mongoose.model('purchase', purchaseSchema);

export default Purchase;