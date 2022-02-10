import { withIronSessionApiRoute } from 'iron-session/next'
import { sessionOptions } from 'lib/session'
import { NextApiRequest, NextApiResponse } from 'next'
import { initialState, IUserDetails } from 'store/authSlice';


export default withIronSessionApiRoute(userRoute, sessionOptions)

async function userRoute(req: NextApiRequest, res: NextApiResponse<IUserDetails>) {
    const user = await req.session.user
    if (user) {
        res.json({
            ...user,
            isLoggedIn: true,
        })
    } else {
        res.json({
            ...initialState.userDetails
        })
    }
}
