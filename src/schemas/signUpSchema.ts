import {z} from 'zod'

const signUpSchema = z.object({
    username: z.string()
        .min(6, "Username must be at least 6 characters")
        .max(20, 'username must not be more than 20 character')
        .regex(/^[a-zA-Z0-9-_]+$/, "Username must not contain special characters"),
    email: z.string()
        .email({message: 'Invalid email address'}),
    password: z.string()
        .min(6, "Password must be at least 6 characters")
})
export default signUpSchema