const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
        return res.json({ message: "No token, access denied" });
    }

    try {
        const decoded = jwt.verify(token, "secretkey");
        req.user = decoded;
        next();
    } catch (error) {
        res.json({ message: "Invalid token" });
    }
};

module.exports = authMiddleware;

const teacherOnly = (req, res, next) => {
    if (req.user.role !== "teacher") {
        return res.json({ message: "Only teachers allowed" });
    }
    next();
};

module.exports = { authMiddleware, teacherOnly };