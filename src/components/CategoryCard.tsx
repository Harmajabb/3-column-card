import CardIcon from "./CardIcon";
import "./CategoryCard.css";

type CategoryCardProps = {
  bg: string;
  title: string;
  text: string;
  buttonLabel: string;
  iconSrc: string;
};

export default function CategoryCard ({
    bg,
    title,
    text,
    buttonLabel,
    iconSrc,
}: CategoryCardProps) {
    return (
        <article className={`card card--${bg.replace("--", "")}`}>
            <CardIcon title={title} src={iconSrc} />
            <h2 className="card_title">{title}</h2>
            <p className="card_text">{text}</p>
            <button type="button" className="btn" aria-label={`${buttonLabel} ${title}`}>
                {buttonLabel}
            </button>
        </article>
    )
}