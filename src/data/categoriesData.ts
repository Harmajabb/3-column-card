export type Category = {
    id: string;
    bg: string;
    title: string;
    text: string;
    buttonLabel: string;
};

export const categoriesData: Category[] = [
    {
        id: "sedans",
        bg: "--sedans",
        title: "SEDANS",
        text: " Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.",
        buttonLabel:"Learn More",
    },
    {
        id: "suvs",
        bg: "--suvs",
        title: "SUVS",
        text: " Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.",
        buttonLabel:"Learn More",
    },
        {
        id: "luxury",
        bg: "--luxury",
        title: "LUXURY",
        text: "Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.",
        buttonLabel:"Learn More",
    },

];