import { describe, it, before, after } from 'node:test';
import mongoose from 'mongoose';
import assert from 'node:assert';
import http from 'node:http';
import app from '../../src/routing/userRouting.mjs';

let server;
let port;

describe('POST /api/user/login tesztelése', () => { 
	before(async () => {
		await mongoose.connect(process.env.DBSTRING);
		
		server = http.createServer(app);
		await new Promise(resolve => server.listen(0, resolve));
		port = server.address().port;
	});	

	after(async () => {
		await mongoose.connection.close();
		await new Promise(resolve => server.close(resolve));
	});
	
	it('Ezekkel az adatokkal van felhasználó!', async () => {
		const response = await fetch(`http://localhost:${port}/api/user/login`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				email: 'pepe@gmail.com',
				jelszo: 'pepe'
			})
		});

		const valasz = await response.json();

		console.log(valasz);
		assert.equal(response.status, 200, 'Beléphetsz!');
	});
});

describe('POST /api/user/login tesztelése', () => { 
	before(async () => {
		await mongoose.connect(process.env.DBSTRING);
		
		server = http.createServer(app);
		await new Promise(resolve => server.listen(0, resolve));
		port = server.address().port;
	});	

	after(async () => {
		await mongoose.connection.close();
		await new Promise(resolve => server.close(resolve));
	});
	
	it('Ezekkel az adatokkal nincsen felhasználó!', async () => {
		const response = await fetch(`http://localhost:${port}/api/user/login`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				email: 'pepe1@gmail.com',
				jelszo: 'pepe'
			})
		});

		const valasz = await response.json();

		console.log(valasz);
		assert.equal(response.status, 401, 'Nem léphetsz be!');
	});
});

describe('POST /api/user/login tesztelése', () => { 
	before(async () => {
		await mongoose.connect(process.env.DBSTRING);
		
		server = http.createServer(app);
		await new Promise(resolve => server.listen(0, resolve));
		port = server.address().port;
	});	

	after(async () => {
		await mongoose.connection.close();
		await new Promise(resolve => server.close(resolve));
	});
	
	it('Ezekkel az adatokkal nem léphetsz be!', async () => {
		const response = await fetch(`http://localhost:${port}/api/user/login`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				email: 'pepe@gmail.com',
				jelszo: 'pepe1'
			})
		});

		const valasz = await response.json();

		console.log(valasz);
		assert.equal(response.status, 403, 'Nem léphetsz be!');
	});
});