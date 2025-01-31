import {useForm} from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from "@tanstack/react-query";
import { postNotes } from '../../api/posts';
import { FormField } from "../FormField";
import { Button } from "../Button";
import "./NoteForm.css";
import { queryClient } from '../../api/queryClient';

const notesSchema =z.object({
  title: z.string().min(5, {message: "Заголовок должен содержать не менее 5 символов"}).nonempty('Поле обязательное для заполнения'),
  text: z.string().min(10, {message: "Поле должно содержать не менее 10 символов"}).max(300, {message: "Поле должно содержать не более 300 символов"}).nonempty('Поле обязательное для заполнения')
})

type NotesData = z.infer<typeof notesSchema>;

export const NoteForm = () => {

  const {register, handleSubmit, formState: {errors}, reset} = useForm<NotesData>({
    resolver: zodResolver(notesSchema)
  })

  const notesMutation = useMutation({
    mutationFn: postNotes,
    onSuccess() {
      queryClient.invalidateQueries({queryKey: ["notes"]})
    },
    onError() {
      reset();
    }
  });

  const onSubmit = (data: NotesData) => {
    console.log(data);
    notesMutation.mutate(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="note-form">
      <FormField label="Заголовок" errorMessage={errors.title?.message}>
        <input {...register('title')} type="text" />
      </FormField>
      <FormField label="Текст" errorMessage={errors.text?.message}>
        <textarea {...register('text')} />
      </FormField>
      <Button type='submit' isLoading={notesMutation.isPending}>Сохранить</Button>
      {/* <span style={{color: "red"}}>{(notesMutation.error as Error).message}</span> */}
    </form>
  );
};
