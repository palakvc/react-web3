import type { User } from './user'
import { withIronSessionApiRoute } from 'iron-session/next'
import { sessionOptions } from 'lib/session'
import { NextApiRequest, NextApiResponse } from 'next'

export default withIronSessionApiRoute(loginRoute, sessionOptions)

async function loginRoute(req: NextApiRequest, res: NextApiResponse) {
    const { username } = await req.body

    try {
        // const {
        //     data: { login, avatar_url },
        // } = await octokit.rest.users.getByUsername({ username })

        // const user = { isLoggedIn: true, login, avatarUrl: avatar_url } as User
        req.session.user = {}
        await req.session.save()
        res.json({})
    } catch (error) {
        res.status(500).json({ message: (error as Error).message })
    }
}
