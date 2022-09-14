import pool from '../configs/mysql/connectDB'

class apiController {
    
    async getAllUsers(req, res, next) {
        let [rows, fields] = await pool.execute('SELECT * FROM user')
        res.status(200).json({
            message: 'by luan_thanh',
            data: rows
        })
    }
    async createAllUsers(req, res, next) {
        let {firstName, lastName, email, phone} = req.body
        if(!firstName || !lastName || !email || !phone) {
            return res.status(200).json({
                message: 'missing required fields'
            })
        }
        await pool.execute('INSERT INTO user(firstName, lastName, email, phone) VALUE (?, ?, ?, ?)',
        [firstName, lastName, email, phone])
        return res.status(200).json({
            message: 'Create user successfully by luan_thanh'
        })
    }
    async editAllUser(req, res, next) {
        let {firstName, lastName, email, phone, id} = req.body
        if(!firstName || !lastName || !email || !phone || !id) {
            return res.status(200).json({
                message: 'missing required fields',
            })
        }
        await pool.execute('UPDATE user SET firstName = ?, lastName = ?, email = ?, phone = ? WHERE id = ?',
        [firstName, lastName, email, phone, id])
        return res.status(200).json({
            message: 'Updated user successfully by Luan_thanh'
        })
    }
    async deleteAllUsers(req, res, next) {
        let userId = req.params.id
        if(!userId) {
            return res.status(200).json({
                message: 'missing required fields',
            })
        }
        await pool.execute('DELETE FROM user WHERE id = ?', [userId])
        return res.status(200).json({
            message: 'Delete user successfully by Luan_thanh'
        })
    }
}

module.exports = new apiController