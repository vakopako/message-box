import React from "react";
import QrCodeLibrary from 'qrcode';

interface QrCodeProps {
  groupId: string;
}

const errorCallback = (error: Error | null | undefined): void => {
  if (error) console.error(error);
};

const QrCode = ({ groupId }: QrCodeProps) => {
  const canvasRef = React.useRef(null);

  const qrCodeUrl = React.useMemo(() => {
    return `https://www.message-box.local/${groupId}`;
  }, []);

  React.useEffect(() => {
    QrCodeLibrary.toCanvas(canvasRef.current, qrCodeUrl, errorCallback);
  }, [qrCodeUrl]);

  return <canvas ref={canvasRef} role="img" />;
};

export default QrCode;