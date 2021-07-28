import { Avatar, Button, IconButton } from "@material-ui/core";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchIcon from "@material-ui/icons/Search";

const Sidebar = () => {
  return (
    //Container
    <div>
      {/* Header */}
      <div className="sticky top-0 z-40 flex items-center justify-between p-2 border-b-2 border-gray-300 background-white h-13">
        <Avatar className="cursor-pointer hover:opacity-80" />
        {/* IconsContainer */}
        <div>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <MoreVertIcon />
        </div>
      </div>
      {/*Search*/}
      <div className="flex items-center p-3.5 border-0">
        <SearchIcon />
        <input
          placeholder="Search in chats."
          className="flex-1 border-0 outline-none "
        />
      </div>
      <Button className='w-full'>Start a new chat </Button>
    </div>
  );
};

export default Sidebar;
