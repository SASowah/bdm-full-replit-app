import bdmLogoSrc from "@assets/WhatsApp_Image_2026-04-14_at_3.26.04_AM_1776155672352.jpeg";

interface BdmLogoProps {
  size?: number;
  className?: string;
}

export function BdmLogo({ size = 32, className = "" }: BdmLogoProps) {
  return (
    <div
      className={`bg-white rounded-xl overflow-hidden flex items-center justify-center shrink-0 ${className}`}
      style={{ width: size, height: size }}
    >
      <img
        src={bdmLogoSrc}
        alt="BDM Business logo"
        className="w-full h-full object-contain"
        draggable={false}
      />
    </div>
  );
}
