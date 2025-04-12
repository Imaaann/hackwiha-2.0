import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { AlertDialog, AlertDialogAction } from "@radix-ui/react-alert-dialog";
import {
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./ui/alert-dialog";
import { Textarea } from "./ui/textarea";
import { ResourceTypeSelect } from "./ResourceTypeSelect";

function CreateResource() {
  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <Button className=" text-foreground text-lg py-2 px-4">Create</Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="h-[375px] w-[425px] self-center secondary-shadow p-4 rounded-md">
        <AlertDialogHeader>
          <AlertDialogTitle>Create new resource</AlertDialogTitle>
          <AlertDialogDescription>
            Share one of the resources that helped you in your journey
          </AlertDialogDescription>
        </AlertDialogHeader>
        <hr className="my-2" />
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4 ">
            <Label htmlFor="name" className="text-right">
              Title:
            </Label>
            <Input id="title" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-start gap-4">
            <Label htmlFor="description" className="text-right">
              Description:
            </Label>
            <Textarea id="description" className="col-span-3 m" />
          </div>
          <ResourceTypeSelect />
        </div>
        <AlertDialogFooter className="self-center">
          <AlertDialogCancel>
            <Button variant="outline" className="text-foreground">
              Cancel
            </Button>
          </AlertDialogCancel>
          <AlertDialogAction>
            <Button type="submit" className="text-foreground">
              Save changes
            </Button>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default CreateResource;
