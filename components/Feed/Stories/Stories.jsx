import { useEffect, useState } from "react";

import Story from "./Story";
import { faker } from "@faker-js/faker";
import { useSession } from "next-auth/react";

const Stories = () => {
	const [suggestions, setSuggestions] = useState([]);
	const { data: session } = useSession();
	useEffect(() => {
		const suggestions = [...Array(20)].map((_, i) => ({
			...faker.helpers.contextualCard(),

			id: i,
		}));

		setSuggestions(suggestions);
	}, []);

	return (
		<div className="flex space-x-2 p-6 rounded-sm bg-white mt-8 border-gray-200 overflow-x-scroll scrollbar-thin scrollbar-thumb-black">
			{session && <Story img={session?.user?.name} />}
			{suggestions.map((profile, i) => (
				<Story
					key={profile.id}
					img={profile.avatar}
					username={profile.username}
				/>
			))}
		</div>
	);
};

export default Stories;
