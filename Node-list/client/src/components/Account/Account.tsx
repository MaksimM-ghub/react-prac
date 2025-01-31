import { fetchMe } from "../../api/user";
import { useQuery } from "@tanstack/react-query";
import { Loader } from "../Loader";
import { AuthForm } from "../AuthForm";
import { LogoutButton } from "../LogoutButton";
import { Layout } from "../Layout";
import { NoteForm } from "../NoteForm";
import { UserView } from "../UserView";
import { NotesListView } from '../NotesListView'

export const Account = () => {
  const meQuery = useQuery({
    queryFn: fetchMe,
    queryKey: ["user", "me"],
  });

  meQuery.error && console.error(meQuery.error);


    switch (meQuery.status) {
      case "pending":
        return <Loader />;
      case "error":
        return <AuthForm />;
      case "success":
        return (
          <Layout>
            <UserView username={meQuery.data.username}/>
            <NoteForm />
            <LogoutButton />
            <NotesListView />
          </Layout>
        );
    }
};
