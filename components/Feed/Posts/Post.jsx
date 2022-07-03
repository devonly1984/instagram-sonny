import {
  BookMarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/outline";
const Post = ({ id, username, userImg, img, caption }) => {
  return (
    <div className="bg-white my-7 border rouned-sm">
      {/**Header*/}
      <div className="flex  items-center p-5">
        <img
          src={userImg}
          alt={username}
          className="rounded-full h-12 w-12 object-contain border p-1 mr-3"
        />
        <p className="flex-1 font-bold">{username}</p>
        <DotsHorizontalIcon className="h-5" />
      </div>
      {/**img */}
      {/**Buttons */}
      {/*caption*/}
      {/**comments */}
      {/**input box */}
    </div>
  );
};

export default Post;
