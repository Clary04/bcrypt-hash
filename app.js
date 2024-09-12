import bcrypt from 'bcrypt'
import express from 'express'

const app = express()

const users = [];

app.use(express.json()); 

app.post('/signup', async (req, res) => {    
    
    try{
        const {username, password} = req.body;
        const hash = await bcrypt.hash(password, 12)
        
        users.push({
            username,
            password: hash
        })
    
      res.status(201).json({ message: 'Usuário cadastrado com sucesso!' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    } 
})

app.post('/login', async (req, res) => {

    try{
        const {username, password} = req.body;
        const user = users.find(u => u.username === username)
    
        if(!user){
           res.status(400).json({ message: 'Usuário não encontrado!' });
           return;
        }
        
        const isPasswordValid = await bcrypt.compare(password, user.password)
    
        if(!isPasswordValid){
            res.status(500).json({ message: 'Senha incorreta!' });
            return;
        }
        res.status(200).json({ message: 'Login realizado com sucesso!' });
    
    }catch(error){
        res.status(500).json({ error: error.message});
    }

})

app.get('/users', async (req, res) => {
    
    try{
      res.status(200).json({ message: users });
    } catch (error) {
        res.status(500).json({ error: error.message });
    } 
})

app.listen(3000, () => {console.log("server no ar")})
