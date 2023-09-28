import axios from 'axios';
import { SortAsc, Trash, Edit, Plus, Search } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useAuthHeader } from 'react-auth-kit';
import NewNote from './NewNote.tsx';
import SERVER_URL from '../../config/config';

interface Note {
  title: string;
  description: string;
}

const NotesView = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const header = useAuthHeader();
  useEffect(() => {
    axios.defaults.headers.common['Authorization'] = header();
    axios.get(`${SERVER_URL}/user/getNotes`).then((response) => {
      const newNotes = response.data;
      setNotes([...notes, ...newNotes]);
    });
  }, []);

  const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
    const title =
      e.currentTarget.parentNode?.parentNode?.querySelector('h1')?.innerText;
    axios.defaults.headers.common['Authorization'] = header();
    axios
      .delete(`${SERVER_URL}/user/deleteNote`, {
        data: { title },
      })
      .then(() => window.location.reload())
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="w-full h-full flex flex-col bg-[#121215] overflow-auto">
        <div className="border-b border-[#848486]/20 flex justify-start items-center gap-5 w-full  p-10">
          <h1 className="font-bold text-white text-2xl whitespace-nowrap">
            My Notes
          </h1>
          <div className="w-full h-10 bg-[#2b2c2e] p-5 flex justify-between items-center rounded-lg gap-2">
            <Search className="text-white" size={15} />
            <input
              type="text"
              placeholder="Search Notes..."
              className="bg-transparent w-full outline-none text-white"
            />
          </div>
          <NewNote />
        </div>
        <div className="grid p-10 w-full h-full overflow-auto grid-cols-3  gap-5 ">
          {notes.map((note) => {
            return (
              <div className="w-full bg-bg py-2 flex flex-col rounded-md max-h-[200px]">
                <div className="flex justify-between items-center w-[90%] mx-auto border-b border-white/20 pb-2">
                  <h1
                    className="
                  text-white"
                  >
                    {note?.title}
                  </h1>
                  <div className="flex gap-1">
                    <button className="w-[35px] h-[35px] border border-[#29292b] p-2 flex bg-[#29292b] justify-center items-center hover:bg-[#29292b]/20 rounded-md text-white">
                      <Edit />
                    </button>
                    <button
                      onClick={handleDelete}
                      className="w-[35px] h-[35px] border border-[#29292b] p-2 flex bg-[#29292b] justify-center items-center hover:bg-[#29292b]/20 rounded-md text-white"
                    >
                      <Trash />
                    </button>
                  </div>
                </div>

                <p className="text-white w-[90%] mx-auto">
                  {note?.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default NotesView;
