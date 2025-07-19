import {z} from 'zod'

const messageSchema = z.object({
    content: z.string()
        .min(6, {message: 'Content must 6 characters long'})
        .max(300, {message: 'Content must not be greater than 300 characters'})
})

export default messageSchema;