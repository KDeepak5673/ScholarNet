import User from '../models/user.js';
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const login = async (req, res, next) => {
    try {


        // Check if user exists
        const user = await User.findOne({ username: req.body.username });
        if (!user) {
            return res.status(400).json({ msg: 'Invalid credentials' });
        }

        // Validate password
        const isMatch = await bcrypt.compareSync(req.body.password, user.password);
        if (!isMatch) {
            return res.status(400).json({ msg: 'Invalid credentials' });
        }


        // Generate JWT token
        const payload = { user: { id: user._id } };
        const token = jwt.sign(payload, process.env.JWT_SECRET);

        const { password, ...info } = user._doc;
        res
            .cookie("accessToken", token, {
                httpOnly: true,
            })
            .status(200)
            .send(info);
    } catch (err) {
        next(err);
    }
};

export const logout = async (req, res) => {
    res
        .clearCookie("accessToken", {
            sameSite: "none",
            secure: true,
        })
        .status(200)
        .send("User has been logged out.");
};