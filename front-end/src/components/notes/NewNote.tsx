import axios, { AxiosResponse } from 'axios';
import {
  NewNoteButton,
  NewNoteButtonContainer,
  NewNoteInput,
  NewNoteStyled,
} from '../../styles/notes/NewNote.styled';
import { Button } from '../../components/ui/button.tsx';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../../components/ui/dialog.tsx';
import { Input } from '../../components/ui/input.tsx';
import { Label } from '../../components/ui/label.tsx';
import { useState } from 'react';
import { useAuthHeader } from 'react-auth-kit';
import SERVER_URL from '../../config/config.ts';

const NewNote = () => {
  const [title, setTitle] = useState<string>();
  const [content, setContent] = useState<string>();

  const header = useAuthHeader();
  const handleClick = () => {
    axios.defaults.headers.common['Authorization'] = header();
    axios
      .post(`${SERVER_URL}/user/createNote`, {
        title,
        content,
      })
      .then((response: AxiosResponse) => {
        console.log(response);
        window.location.reload();
      });
  };

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="submit">Add Note</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add New Note?</DialogTitle>
            <DialogDescription>
              Add notes to your tab here. Click add when you're done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="title" className="text-right">
                Title
              </Label>
              <Input
                id="title"
                className="col-span-3"
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Write title..."
                required
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="content" className="text-right">
                Content
              </Label>
              <Input
                id="content"
                className="col-span-3"
                onChange={(e) => setContent(e.target.value)}
                placeholder="Write content..."
                required
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="submit" type="submit" onClick={handleClick}>
              Add
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default NewNote;
