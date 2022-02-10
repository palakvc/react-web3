import { withIronSessionApiRoute } from 'iron-session/next'
import { sessionOptions } from 'lib/session'
import { NextApiRequest, NextApiResponse } from 'next'
import fetcher from 'lib/fetchJson'

export default withIronSessionApiRoute(loginRoute, sessionOptions)

async function loginRoute(req: NextApiRequest, res: NextApiResponse) {
    const { method, body, isToken } = await req.body;
    try {
        const auth: any = await fetcher("auth/login", method, body, isToken);
        const user = { ...auth?.data, isLoggedIn: true }
        req.session.user = user
        await req.session.save()
        res.json(auth)
    } catch (error: any) {
        console.log(error)
        res.status(error?.response?.statusCode || 500).json(error?.response?.message)
    }
}
