import Card from "./Card";
import CardsContainer from "./CardsContainer";

export default function Cards() {
    return <CardsContainer>

        <Card heading={"Design Implementation"}
            icon={<ion-icon name="fitness-outline"></ion-icon>}
            description={"Lovingly crafted designs that are appealing to your audience"} />
        <Card heading={"Performance/Accessibility"}
            icon={<ion-icon name="construct-outline"></ion-icon>}
            description={"Smooth user experience and fast loading times"} />
        <Card heading={"Interactive Features"}
            icon={<ion-icon name="gift-outline"></ion-icon>}
            description={"Uses REACT to create interactive and engaging user interfaces"} />
        <Card heading={"Reliablity/Best Practices"}
            icon={<ion-icon name="shield-checkmark-outline"></ion-icon>}
            description={"Follows best practices with security conciousness + fast delivery"} />
        <footer className="text-sm">&copy; 2024 Devhunter by Mint </footer>
    </CardsContainer>;
}
