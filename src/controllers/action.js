import console from 'console'
import pool from '../configs/mysql/connectDB'

class actionController {
    async deltals(req, res, next) {
        let userId = req.params.userId
        res.send(userId)
    }
    async delete(req, res, next) {
        let userId = req.params.userId
        await pool.execute('DELETE FROM user WHERE id = ?', [userId])
        res.redirect('/')
    }
    async edit(req, res, next) {
        let userId = req.params.userId
        let [user, field] = await pool.execute('SELECT * FROM user WHERE id = ?', [userId])
        res.render('edit', { dataUserById: user[0], title: 'Edit'})
    }
    async update(req, res, next) {
        let {firstName, lastName, email, phone, userId} = req.body
        await pool.execute('UPDATE user SET firstName = ?, lastName = ?, email = ?, phone = ? WHERE id = ?',
        [firstName, lastName, email, phone, userId])
        res.redirect('/')
    }
}

module.exports = new actionController