import { FC } from "react";
import { Button } from "../Button";
import { logout} from "../../api/user";
import {useMutation} from "@tanstack/react-query";
import { queryClient } from "../../api/queryClient";
import "./LogoutButton.css";

export const LogoutButton: FC = () => {

  const logoutMutation = useMutation({
    mutationFn: () => logout(),
    onSuccess() {
      queryClient.invalidateQueries({queryKey: ['user', 'me']})
    }
  });

  const handleClick = () => {
    logoutMutation.mutate();
  }

  return (
    <div className="logout-button">
      <Button onClick={handleClick} kind="secondary">Выйти</Button>
    </div>
  );
};
