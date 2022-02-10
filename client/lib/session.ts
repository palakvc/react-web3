// this file is a wrapper with defaults to be used in both API routes and `getServerSideProps` functions
import type { IronSessionOptions } from 'iron-session'
import { IUserDetails } from 'store/authSlice'

export const sessionOptions: IronSessionOptions = {
    password: process.env.SECRET_COOKIE_PASSWORD as string,
    cookieName: 'artistic-marketplace',
    cookieOptions: {
        secure: process.env.NODE_ENV === 'production',
        maxAge: undefined,  
    },
}

// This is where we specify the typings of req.session.*
declare module 'iron-session' {
    interface IronSessionData {
        user?: IUserDetails
    }
}
