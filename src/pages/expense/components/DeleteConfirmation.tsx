import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import deleteExpense from "@/services/deleleteExpense";

export const DeleteConfirmation = (
  id: string,
  name: string,
  amount: number,
) => {

  const handleDelete = async () => {
    await deleteExpense(id);
  };

  return (
    <Dialog>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            Delete {name} - {amount}
          </DialogTitle>
        </DialogHeader>
        <DialogDescription>
          Are you sure you want to delete this expense?
        </DialogDescription>
      </DialogContent>
      <DialogFooter>
        <Button type="button" onClick={handleDelete}> {/* Corrected event */}
          Confirm
        </Button>
      </DialogFooter>
    </Dialog>
  );
};
