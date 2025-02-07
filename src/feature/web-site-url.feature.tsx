import { QRCode } from 'react-qrcode-logo';

const WebSiteUrl: React.FC = () => {
    const domainName: string = `https://${window.location.hostname}`;

    return (
        <div className="hidden sm:flex flex-row justify-between items-center">
            <div className='h-full flex flex-col justify-center gap-6'>
                <p>Ce site web est accessible depuis le lien <a href={domainName} rel="Lien vers le site de présentation de l'activité" className="underline text-[#4169E1]">{ domainName }</a></p>
                <p>Vous ne savez pas quel personnage prendre ? <a href='/characters' rel='Lien vers la page avec tous les personnages de Rick et Morty' className='underline text-[#4169E1]'>Liste des personnages</a></p>
            </div>
            <QRCode value={ domainName } logoImage='/images/polytech.png' fgColor='#009de0' removeQrCodeBehindLogo={true} qrStyle='dots' style={{ borderRadius: '8px' }} />
        </div>
    )
}

export default WebSiteUrl;