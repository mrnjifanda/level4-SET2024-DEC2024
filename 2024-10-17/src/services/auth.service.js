const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const  User = require('../models/User');
const UserOTP = require('../models/UserOTP');

const random = (length) => {

    const characters = "1234567890AZERTYUIOPQSDFGHJKLMWXCVBN";
    let code = '';
    for ( let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        code += characters.charAt(randomIndex);
    }

    return code;
}

const generateExpire = (minutes) => {
    return new Date(new Date().getTime() + (60 * 1000 * minutes));
} 

const hashPassword = async (password) => {
    try {
        const salt = await bcrypt.genSalt(10);
        return await bcrypt.hash(password, salt);
    } catch (error) {
        throw new Error('Invalid password: ' + error.message);
    }
}

const hashCompare = async (value, hash) => {
    try {
        return await bcrypt.compare(value, hash);
    } catch (error) {
        return false;
    }
}

const tokenVerify = (token) => {
    try {
        return jwt.verify(token, 'secret_key');
    } catch (error) {
        return false;
    }
};

const verifyIfIsUnique = async (field, value) => {

    // let where = {};
    // if (field === 'email') {
    //     where = { email: value }
    // } else if (field === 'username') {
    //     where = { username: value }
    // }

    // return await User.findOne(where);

    return await User.findOne({[field]: value});
};

const register = async (data) => {

    const password = await hashPassword(data.password);
    data.password = password;

    const user = new User(data);
    await user.save();
    return {
        error: false,
        message: 'User registered successfully.'
    }
}

const login = async (user, password) => {

    const compare = await hashCompare(password, user.password);
    if (!compare) {
        return {
            error: true,
            message: 'Invalid email or password.'
        }
    }

    const token = jwt.sign({ id: user._id }, 'secret_key', { expiresIn: '1h' });
    return {
        error: false,
        message: 'Login successful.',
        token: token
    }
}

const generateOTP = async (id_user) => {

    try {
        const otp = {
            code: random(5),
            expired_at: generateExpire(10),
            id_user: id_user
        }
        await UserOTP.create(otp);
        return {
            error: false,
            data: otp
        };
    } catch (error) {
        return {
            error: true,
            message: 'Failed to generate OTP.'
        };
    }
}

const verifyOTP = async (email, code) => {

    const userOTP = await UserOTP.findOne({ code: code, expired_at: { $gt : new Date() } })
                                 .populate({ path: 'id_user',  select : { email: 1 }});

    if (userOTP && userOTP.id_user.email === email) {
        return true;
    }

    return false;
}

const resetPassword = async (password, code) => {

    try {
        const userOTP = await UserOTP.findOne({ code: code });
        if (!userOTP) {
            return {
                error: true,
                message: 'Invalid OTP.'
            };
        }
    
        const user = await User.findById(userOTP.id_user);
        if (!user) {
            return {
                error: true,
                message: 'User not found.'
            };
        }
    
        user.password = hashPassword(password);
        await user.save();
        await UserOTP.deleteOne({ _id: userOTP._id });
    
        return {
            error: false,
            message: 'Password reset successfully.',
            data: {
                email: user.email
            }
        };
    } catch (error) {
        return {
            error: true,
            message: 'Failed to reset password: ' + error.message
        };
    }
}

module.exports = {
    verifyIfIsUnique, register, login, tokenVerify,
    generateOTP, verifyOTP, resetPassword
};
