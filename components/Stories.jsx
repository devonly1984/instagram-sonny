import { faker } from "@faker-js/faker";
import { useEffect, useState } from "react";
const Stories = () => {
  const [suggestions, setSuggestions] = useState();
  useEffect(() => {
    const suggestions = [...Array(20)].map((_, i) => ({
      ...faker.helpers.contextualCard(),

      id: i,
    }));

    console.log(suggestions);
  }, []);
  return <div>Stories</div>;
};

export default Stories;
