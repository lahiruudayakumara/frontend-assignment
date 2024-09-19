import Image from "next/image";

interface Props {
    src: string;
    alt: string;
}

const ImageView: React.FC<Props> = ({ src, alt }) => {
    return (
        <div className="flex items-center justify-center p-8 border min-h-40 rounded-md">
            <Image src={src} alt={alt} width={150} height={150} />
        </div>
    );
}

export default ImageView;