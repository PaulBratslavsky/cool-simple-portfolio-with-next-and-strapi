import { BlueSkyLogo, DribbleLogo, GithubLogo, XLogo } from "../icons";

export function IconSelector(label: string) {
  switch (label.toLowerCase()) {
    case "github":
      return <GithubLogo className="h-5 w-5" />;
    case "x":
      return <XLogo className="h-5 w-5" />;
    case "bluesky":
      return <BlueSkyLogo className="h-5 w-5" />;
    case "dribble":
      return <DribbleLogo className="h-5 w-5" />;
    default:
      return null;
  }
}