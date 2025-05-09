import { Star } from "../types";

export function Stars({ stars }: { stars: Star[] }) {
  return (
    <>
      {stars.map((star) => (
        <div
          key={star.id}
          className="star animate-pulse-subtle"
          style={{
            width: star.size + "px",
            height: star.size + "px",
            left: star.x + "%",
            top: star.y + "%",
            opacity: star.opacity,
            animationDuration: star.animationDuration + "s"
          }}
        />
      ))}
    </>
  );
}
