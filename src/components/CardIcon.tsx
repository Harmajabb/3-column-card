type CardIconProps = {
    title: string;
    src: string;
}

export default function CardIcon({title, src}: CardIconProps) {
    return(
        <img
        src={src}
        alt={title}
        width={64}
        height={40}
        loading="lazy"
        aria-hidden={false}
        />
    );
}