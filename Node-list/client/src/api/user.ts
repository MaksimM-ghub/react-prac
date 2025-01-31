import {z} from 'zod';
import { validationResponse } from './validateResponse.ts'

const registerSchema = z.object ({
    username: z.string(),
    email: z.string(),
    password: z.string()
})

const loginSchema = z.object ({
    email: z.string(),
    password: z.string()
})

const userSchema = z.object ({
    id: z.string(),
    email: z.string(),
    username: z.string()
})


export type RegUser = z.infer<typeof registerSchema>;
export type LogUser = z.infer<typeof loginSchema>;
export type User = z.infer<typeof userSchema>;

export function registerUser(user: RegUser): Promise<void> {
    return fetch('/api/register', {
        method: "POST",
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    .then(validationResponse)
    .then(() => undefined)
}

export function loginUser(user: LogUser): Promise<void> {
    return fetch('/api/login', {
        method: "POST",
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    .then(validationResponse)
    .then(() => undefined);
}

export function fetchMe(): Promise<User> {
    return fetch('/api/users/me')
    .then(validationResponse)
    .then(response => response.json())
    .then(data => userSchema.parse(data))
}

export function logout(): Promise<void> {
    return fetch('/api/logout', {
        method: "POST"
    })
    .then(() => undefined);
}