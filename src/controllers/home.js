import pool from '../configs/mysql/connectDB'

class homeController {
    async show(req, res, next) {
        const [rows, fields] = await pool.execute(`SELECT * FROM user`);
        res.render('home',{title: 'Home', dataUser: rows})
    } 
    async create(req, res, next) {
        let {firstName, lastName, email, phone} = req.body
        await pool.execute(`INSERT INTO user(firstName, lastName, email, phone) VALUES (?, ?, ?, ?)`,
        [firstName, lastName, email, phone])
        return res.redirect('/')
    }
    
}

module.exports = new homeController