const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 3000;

mongoose.connect('mongodb://localhost:27017/website', {useNewUrlParser: true, useUnifiedTopology: true});

const userSchema = new mongoose.Schema({
    name: String,
    phone: String
});

const User = mongoose.model('user', userSchema);

app.use(express.json());
app.use(express.urlencoded({
    extended: true}));

app.post('/cadastro', async (req, res) =>{
    const { name, phone } = req.body;

    try{
        const newUser = new User ({name, phone});
        await newUser.save();
        res.status(201).json({message:'Cadastro realizado com sucesso'});
    }catch (error){
        res.status(500).json({message:'Erro ao cadastrar o usuário.'});
    }
    });