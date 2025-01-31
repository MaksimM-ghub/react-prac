import {z} from 'zod';
import { validationResponse } from './validateResponse';

const notesSchema = z.object ({
    title: z.string(),
    text: z.string(),
})

export type Notes = z.infer<typeof notesSchema>;

const UserNotesSchema = z.object ({
    id: z.string(),
    title: z.string(),
    text: z.string(),
    userId: z.string(),
    createdAt: z.number()
})

export type UserNotes = z.infer<typeof UserNotesSchema>;
const UserNotesResponseSchema = z.object({
    list: z.array(UserNotesSchema),
    pageCount: z.number(),      
  });
  
export type UserNotesResponse = z.infer<typeof UserNotesResponseSchema>;

export function getNotes(): Promise<UserNotesResponse> {
    return fetch('/api/notes')
    .then(response => response.json())
    .then(data => UserNotesResponseSchema.parse(data))
}

export function postNotes(notes: Notes): Promise<void> {
    return fetch('/api/notes', {
        method: "POST",
        headers: {
            'Content-type': 'applacation/json'
        },
        body: JSON.stringify(notes)
    })
    .then(validationResponse)
    .then(() => undefined)
}