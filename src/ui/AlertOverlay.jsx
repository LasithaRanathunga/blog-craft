import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

export default function AlertOverlay({ alertData }) {
  return (
    <div>
      <AlertDialog open={true}>
        <AlertDialogTrigger asChild>
          <Button variant="outline" className="hidden">
            Show Dialog
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>{alertData.title}</AlertDialogTitle>
            <AlertDialogDescription>
              {alertData.discription}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            {alertData.cancelBtnName ? (
              <AlertDialogCancel
                onClick={() => alertData.cancelBtnHandler(false)}
              >
                {alertData.cancelBtnName}
              </AlertDialogCancel>
            ) : null}
            {alertData.actionBtnName ? (
              <AlertDialogAction onClick={alertData.actionBtnHandler}>
                {alertData.actionBtnName}
              </AlertDialogAction>
            ) : null}
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
