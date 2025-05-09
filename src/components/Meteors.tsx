import { Meteor } from "../types";

export function Meteors({ meteors }: { meteors: Meteor[] }) {
  return (
    <>
      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="meteor animate-meteor"
          style={{
            width: meteor.size * 50 + "px",
            height: meteor.size * 2 + "px",
            left: meteor.x + "%",
            top: meteor.y + "%",
            animationDelay: `${meteor.delay}`,
            animationDuration: meteor.animationDuration + "s"
          }}
        />
      ))}
    </>
  );
}
