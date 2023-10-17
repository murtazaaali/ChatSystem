import {
  MultiChatSocket,
  MultiChatWindow,
  useMultiChatLogic,
} from "react-chat-engine-advanced";
const ChatsPage = (props) => {
  const ChatProps = useMultiChatLogic(
    "78cf807b-436f-4056-982b-972af98a3f3f",
    props.user.username,
    props.user.secret
  );
  return (
    <div style={{ height: "100vh" }}>
      <MultiChatSocket {...ChatProps} />
      <MultiChatWindow {...ChatProps} style={{ height: "100%" }} />
    </div>
  );
};
export default ChatsPage;
