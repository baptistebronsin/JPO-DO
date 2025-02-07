import Card from "./card.feature";

const Cards: React.FC = () => {

    return (
        // <div className="flex flex-wrap justify-between gap-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
            <Card firstName="Sacha" characterId={1} />
            <Card firstName="Charlotte" characterId={28} />
            <Card firstName="Baptiste" characterId={2} />
            <Card firstName="Lucas" characterId={70} />
            <Card firstName="Sarah" characterId={37} />
            <Card firstName="Dorian" characterId={38} />
            <Card firstName="Hugo" characterId={23} />
            <Card firstName="Benoît" characterId={292} />
            <Card firstName="Samuel" characterId={264} />
            <Card firstName="Joris" characterId={421} />
            <Card firstName="Damien" characterId={573} />
            <Card firstName="Auriane" characterId={139} />
        </div>
    )
}

export default Cards;