import Card from "./card.feature";

const Cards: React.FC = () => {

    return (
        // <div className="flex flex-wrap justify-between gap-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
            <Card firstName="Vincent B." characterId={8} />
            <Card firstName="Isabelle B." characterId={4} />
            <Card firstName="Olivier DJ" characterId={53} />
            <Card firstName="Etienne G" characterId={95} />
            <Card firstName="Dorian R" characterId={177} />
            <Card firstName="Margot B" characterId={42} />
            <Card firstName="Zoé T" characterId={47} />
            <Card firstName="Rafael R" characterId={8} />        
        </div>
    )
}

export default Cards;