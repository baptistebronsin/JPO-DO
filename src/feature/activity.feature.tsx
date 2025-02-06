import CardsFeature from "./cards.feature";

const ActivityFeature: React.FC = () => {

    return (
        <div className="flex flex-col gap-4">
            <h2 className="text-lg">Activité</h2>
            <div className="flex flex-col gap-4">
                <p>Merci à tous nos participants et participantes, nous espérons vous revoir très vite 😄</p>
                <CardsFeature />
            </div>
        </div>
    )
}

export default ActivityFeature;