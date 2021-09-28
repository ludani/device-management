const express = require('express');
const cors = require('cors');
const app = express();

const Device = require('./models/Devices');
const Category = require('./models/Category');

app.use(express.json());

app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin","*");
	res.header("Access-Control-Allow-Methods","GET, PUT, POST,DELETE");
	res.header("Access-Control-Allow-Headers","X-PINGOTHER, Content-Type, Authorization");
	app.use(cors());
	next();
});

// const db = require("./models/db");

app.get('/', async (req, res) => {
	await Device.findAll({order : [['id','DESC']]}).then(function(devices){
  		res.json({devices});
  	});
});

app.get('/visualizar/:id', async (req, res) => {
	await Device.findByPk(req.params.id)
	.then(devices => {
		return res.json({
			error: false,
			devices
		});
	}).catch(function(erro){
		return res.status(400).json({
			error: true,
			message: "Erro nao existe"
		});
	});
});

app.post('/cadastrar', async(req, res) => {
	const resultCad = await Device.create(
		req.body
	).then(function(){
		return res.json({
			error: false,
			message: "Device adicionado com sucesso."
		})
	}).catch(function(erro){
		return res.status(400).json({
			error: true,
			message: "Erro ao adcionar device"
		});
	});
});

app.put('/editar', async(req, res) => {

	await sleep(3000);

	function sleep(ms){
		return new Promise((resolve) => {
			setTimeout(resolve,ms);
		});
	}

	await Device.update(req.body, {
		where: {id: req.body.id}
	}).then(function(){
		return res.json({
			error: false,
			message: "Device editado com sucesso"
		});
	}).catch(function(erro){
		return res.status(400).json({
			error: true,
			message: "Erro ao editar device"
		});
	});
});

app.delete('/apagar/:id', async (req, res) => {
	await Device.destroy({
		where: {id: req.params.id}
	}).then(function(){
		return res.json({
			error: false,
			message: "Device deletado"
		});
	}).catch(function(erro){
		return res.status(400).json({
			error: true,
			message: "Erro ao deletar"
		});
	});
});

// init router catoregory
app.get('/category/', async (req, res) => {
	await Category.findAll({order : [['id','ASC']]}).then(function(categories){
  		res.json({categories});
  	});
});

app.post('/category/create', async(req, res) => {
	const resultCategory = await Category.create(
		req.body
	).then(function(){
		return res.json({
			error: false,
			message: "Categoria adicionada com sucesso."
		})
	}).catch(function(erro){
		return res.status(400).json({
			error: true,
			message: "Erro ao adcionar categoria"
		});
	});
});

app.delete('/category/delete/:id', async (req, res) => {
	await Category.destroy({
		where: {id: req.params.id}
	}).then(function(){
		return res.json({
			error: false,
			message: "Categoria deletada"
		});
	}).catch(function(erro){
		return res.status(400).json({
			error: true,
			message: "Erro ao deletar"
		});
	});
});


app.listen(8080, function(){
	console.log("Serve start in http://localhost:8080/");
});