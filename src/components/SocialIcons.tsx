import { social } from "../constants";

const SocialIcons = () => {
  return (
    <ul className="social-icons">
      {social.map(({ id, url, Icon }) => {
        return (
          <li key={id}>
            <a href={url} target="_blank" rel="noreferrer">
              <Icon />
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default SocialIcons;
