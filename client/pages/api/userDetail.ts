import { withIronSessionApiRoute } from "iron-session/next";
import { sessionOptions } from "lib/session";
import { NextApiRequest, NextApiResponse } from "next";
import { initialState, IUserDetails } from "store/authSlice";

export default withIronSessionApiRoute(userDetail, sessionOptions);

async function userDetail(
  req: NextApiRequest,
  res: NextApiResponse<IUserDetails>
) {
  const payload = await req.body;
  try {
    req.session.user = payload;
    await req.session.save();
    res.json(payload);
  } catch (error: any) {
    res.status(500).json(error.data);
  }
}
