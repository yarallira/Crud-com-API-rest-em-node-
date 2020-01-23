const Express = require('express');
const Cliente = require('../models/clientesModels');

const Router = Express.Router();

// Pesquisar todos
Router.get('/', async (req, res) => {
 const id = req.params.id;
 try{

    const cliente = await Cliente.find();

    if (!cliente)
    return res.status(400).send({erro: "Cliente não encontrado"})

    console.log(cliente);
        return res.send(cliente);

 }catch (erro){
     return res.status(400).send({erro : "Erro ao encontrar cliente "})
 }
});
// Cadastrar
Router.post('/', async (req, res) => {
    try{
    const nome = await Cliente.create(req.body);

    console.log(nome);
    return res.send(nome);


    }catch (erro) {
        console.log(erro);
        return res.status(400).send({erro : "Não foi possível cadastrar novo cliente" })
    }
});
// Consultar pelo ID
Router.get('/:id', async (req, res) => {
    try{
        const id = req.params.id;

        const cliente = await Cliente.findById(id);

        console.log('/:id');     

        if (!cliente)
        return res.status(400).send({erro : 'Cliente não encontrado'});

        return res.send(cliente);

    }catch (erro){
        return res.status(400).send({erro: "Não foi possivel consultar o cliente"});
    }
})
// Consultar pelo nome
Router.post('/cosultaPorNome', async (req, res) => {
      const { nome } = req.body;
    try{
        console.log(nome);

        const cliente = await Cliente.find( { nome: {$eq: nome} });
        console.log(cliente);
      
        if (!cliente)
        return res.status(400).send({erro : "Cliente não encontrado"})

        return res.send(cliente);

    }catch (erro){
        return res.status(400).send({erro : "Não foi possível consultar o cliente pelo nome"})
    }
})

// Router.get('/nome?nome', async (req, res) => {
//     try{
//         const nome = req.params.id;

//         const cliente = await Cliente.findById(nome);

//         console.log(cliente);     

//         if (!cliente)
//         return res.status(400).send({erro : 'Cliente não encontrado'});

//         return res.send(cliente);

//     }catch (erro){
//         return res.status(400).send({erro: "Não foi possivel consultar o cliente teste"});
//     }
// })
// Atualizar
Router.put('/:id' , async (req, res) => {
 try{
     const id = req.params.id;
     const {nome, rg, cpf, idade, telefone , email} = req.body;

     const cliente = await Cliente.findByIdAndUpdate(id , {$set: {nome, rg, cpf, idade, telefone , email}} , {new : true})
     console.log(cliente);
     return res.send(cliente);

 } catch (erro){
    return res.status(400).send({erro: "Mão foi possivel atualizar o cliente"});
 }
})

// deletar

Router.delete('/:id' , async (req, res) => {
    try{
        const id = req.params.id

        const cliente = await Cliente.findByIdAndRemove(id);

        if (!id)
        return res.status(400).send({erro : "Id não foi encontrado"})
        console.log(cliente);
        
        return res.send("Cliente removido com sucesso!")

    }catch (erro){
        return res.status(400).send({ erro : 'Não foi possível deletear o cliente'});
    }
})

module.exports = app => app.use('/Cliente', Router);