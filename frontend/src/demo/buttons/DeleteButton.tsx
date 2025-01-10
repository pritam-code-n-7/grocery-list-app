import { Button } from "@/components/ui/button";
import { ButtonType } from "@/types/ButtonType";

const DeleteButton = ({ name, type, onClick }: ButtonType) => {
  return (
    <Button
      type={type}
      onClick={onClick}
      className="bg-red-500"
    >
      {name}
    </Button>
  );
};

export default DeleteButton;
