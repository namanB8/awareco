import bcrypt from "bcrypt-nodejs";
import mongoose from "mongoose";

export type UserDocument = mongoose.Document & {
    name: string;
    phone: string;
    password: string;
};

const userSchema = new mongoose.Schema({
    name: String,
    phone: String,
    password: String,
}, { timestamps: true });

/**
 * Password hash middleware.
 */
userSchema.pre("save", function save(next) {
    const user = this as UserDocument;
    if (!user.isModified("password")) { return next(); }
    bcrypt.genSalt(10, (err, salt) => {
        if (err) { return next(err); }
        bcrypt.hash(user.password, salt, undefined, (err: mongoose.Error, hash) => {
            if (err) { return next(err); }
            user.password = hash;
            next();
        });
    });
});

export const User = mongoose.model<UserDocument>("User", userSchema);
