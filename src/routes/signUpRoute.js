import { getDbConnection } from "../db"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const signUpRoute = {
    path: '/api/signup',
    method: 'post',
    handler: async (req, res) => {
        const { name, email, password, role } = req.body

        const db = getDbConnection('sandstorm-db')
        const user = await db.collection('users').findOne({ email })

        if (user) {
            return res.sendStatus(409)
        }

        const passwordHash = await bcrypt.hash(password, 10)

        // const startingInfo = {
        //     hairColor: '',
        //     favoriteFood: '',
        //     bio: '',
        // }

        const result = await db.collection('users').insertOne({
            email,
            passwordHash,
            name,
            role,
            // info: startingInfo,
            // isVerified: false,
        })

        const { insertedId } = result;

        jwt.sign({
            id: insertedId,
            email,
            name,
            role,
            // info: startingInfo,
            // isVerified: false,
        },
        process.env.JWT_SECRET,
        {
            expiresIn: '2d',
        },
        (err, token) => {
            if (err) {
                return res.status(500).send(err)
            }
            res.status(200).json({ token })
        })
    }
}