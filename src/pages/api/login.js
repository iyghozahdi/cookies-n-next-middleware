import axios from "axios";
import cookie from "cookie";
import Cryptr from "cryptr";

async function handler(req, res) {
  try {
    const cryptr = new Cryptr("YourSecretyK-3-Y", {
      pbkdf2Iterations: 10000,
      saltLength: 10,
    });
    const { data } = await axios.post("https://reqres.in/api/login", {
      username: req.body.username,
      password: req.body.password,
    });
    const encryptedString = cryptr.encrypt(JSON.stringify(data));
    var expiredDate = new Date();
    var time = expiredDate.getTime();
    time += 3600 * 1000 * 24 * 1; // 1 Days
    expiredDate.setTime(time);
    res.setHeader(
      "Set-Cookie",
      cookie.serialize("cookies-n-nm", encryptedString, {
        httpOnly: true,
        secure: false,
        expires: expiredDate,
        sameSite: "strict",
        path: "/",
      })
    );
    return res.status(200).json({
      status: "success",
      data: data,
    });
  } catch (error) {
    console.log(error);
    return res
      .status(400)
      .json(error?.response?.data ? error?.response?.data : error);
  }
}

export default handler;
