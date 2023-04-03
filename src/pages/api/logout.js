import cookie from "cookie";

async function handler(req, res) {
  try {
    if (req.method === "POST" || req.method === "GET") {
      var expiredDate = new Date();
      var time = expiredDate.getTime();
      time -= 3600 * 1000 * 24 * 1;
      expiredDate.setTime(time);
      res.setHeader(
        "Set-Cookie",
        cookie.serialize("cookies-n-nm", "", {
          httpOnly: true,
          secure: false,
          expires: expiredDate,
          sameSite: "strict",
          path: "/",
        })
      );

      return res.status(200).json({ info: "Log Out Success" });
    } else {
      return res.status(401).json({
        error: "Invalid Method",
      });
    }
  } catch (error) {
    return res.status(401).json({
      error: "Invalid Method",
    });
  }
}

export default handler;
