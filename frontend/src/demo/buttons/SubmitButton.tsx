import { Button } from "@/components/ui/button";
import { ButtonType } from "@/types/ButtonType";
import { useFormStatus } from "react-dom";

const SubmitButton = ({ name, type, onClick }: ButtonType) => {
  const { pending } = useFormStatus();
  return (
    <Button
      type={type}
      onClick={onClick}
      disabled={pending}
      className="bg-blue-500"
    >
      {name}
    </Button>
  );
};

export default SubmitButton;
