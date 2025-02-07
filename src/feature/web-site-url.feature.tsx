import { QRCode } from 'react-qrcode-logo';

const WebSiteUrl: React.FC = () => {
    const domainName: string = `https://${window.location.hostname}`;

    return (
        <div className="hidden sm:flex flex-row justify-between items-center">
            <p>Ce site web est accessible depuis le lien <a href={domainName} rel="Lien vers le site de présentation de l'activité" className="underline text-[#4169E1]">{ domainName }</a></p>
            <QRCode value={ domainName } logoImage='/images/polytech.png' fgColor='#009de0' logoPadding={8} removeQrCodeBehindLogo={true} qrStyle='dots' style={{ borderRadius: '8px' }} />
        </div>
    )
}

export default WebSiteUrl;