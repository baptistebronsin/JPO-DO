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
            <Card firstName="Lohan S" characterId={1} />  
            <Card firstName="Gabriel CF" characterId={560} /> 
            <Card firstName="Léa G" characterId={2} />       
            <Card firstName="Nathan F" characterId={2} />
            <Card firstName="Mateo L" characterId={1} />   
            <Card firstName="Matys F" characterId={7} />
            <Card firstName="Leny S" characterId={21} />
            <Card firstName="Hermine" characterId={50} />
            <Card firstName="Adrien" characterId={118} />      
        </div>
    )
}

export default Cards;