import { faker } from "@faker-js/faker";
import { useEffect, useState } from "react";
import Story from "./Story";
const Stories = () => {
  const [suggestions, setSuggestions] = useState([]);
  useEffect(() => {
    const suggestions = [...Array(20)].map((_, i) => ({
      ...faker.helpers.contextualCard(),

      id: i,
    }));

    setSuggestions(suggestions);
  }, []);
  return (
    <div className="flex space-x-2 p-6 rounded-sm bg-white mt-8 border-gray-200 overflow-x-scroll ">
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
