
import {
    MultiChatSocket,
    MultiChatWindow,
    useMultiChatLogic,
  } from 'react-chat-engine-advanced';
import './Chat.css';

const Chat = () => {
    const projectId = (localStorage.getItem('projectId') !== null ? localStorage.getItem('projectId') : '') as string; 
    const username = localStorage.getItem('username') as string;
    const password = localStorage.getItem('password') as string;

    const chatProps = useMultiChatLogic(
        projectId,
        username,
        password
      ) ;

    return (
        <div className="chat__container">
             <div>
                projectId: {projectId}  username: {username}   password: {password}
             </div>
            <MultiChatWindow {...chatProps} style={{ width: '100vw', height: '100vh'}} />
            <MultiChatSocket {...chatProps} />
        </div>
    )
}

export default Chat