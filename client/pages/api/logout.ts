import { withIronSessionApiRoute } from 'iron-session/next'
import { sessionOptions } from 'lib/session'
import { NextApiRequest, NextApiResponse } from 'next'
import { initialState, IUserDetails } from 'store/authSlice';

export default withIronSessionApiRoute(logoutRoute, sessionOptions)

function logoutRoute(req: NextApiRequest, res: NextApiResponse<IUserDetails>) {
    req.session.destroy()
    res.json({ ...initialState.userDetails })
}
