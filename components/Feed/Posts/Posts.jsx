import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";

import Post from "./Post";
import { db } from "../../../firebase";

const Posts = () => {
	const [posts, setPosts] = useState([]);
	useEffect(
		() =>
			onSnapshot(
				query(collection(db, "posts"), orderBy("timestamp", "desc")),
				(snapshot) => {
					setPosts(snapshot.docs);
				}
			),

		[db]
	);

	return (
		<div>
			{posts &&
				posts.map((post) => {
					return (
						<Post
							key={post.id}
							id={post.data().id}
							username={post.data().username}
							caption={post.data().caption}
							profileImg={post.data().profileImg}
							img={post.data().image}
						/>
					);
				})}
		</div>
	);
};

export default Posts;
