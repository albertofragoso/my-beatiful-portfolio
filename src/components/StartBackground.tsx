import { useEffect, useState } from "react";
import { Meteor, Star } from "../types";
import { generateMeteors, generateStars } from "../lib/utils";
import { Stars } from "./Stars";
import { Meteors } from "./Meteors";

export function StarBackground() {
  const [stars] = useState<Star[]>(generateStars());
  const [meteors] = useState<Meteor[]>(generateMeteors());

  useEffect(() => {
    window.addEventListener("resize", generateStars);
    return () => window.removeEventListener("resize", generateStars);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <Stars stars={stars} />
      <Meteors meteors={meteors} />
    </div>
  );
}
