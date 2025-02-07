import { Card } from "../feature";

const Characters: React.FC = () => {

    return (
        <template className='flex justify-center py-6 px-4'>
            <div className='max-w-7xl w-full flex flex-col gap-12'>
                <h1 className="text-lg font-bold">Choisissez votre personnage de Rick et Morty</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
                    {
                        Array.from({ length: 826 }, (_, index) => (
                            <Card key={index + 1} firstName={undefined} characterId={index + 1} />
                        ))
                    }
                </div>
            </div>
        </template>
    )
}

export default Characters;