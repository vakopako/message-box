import React from "react";
import QrCodeLibrary from 'qrcode';

const HARDCODED_MESSAGE_GROUP_ID = 'c0b2b020-6787-11ee-8c99-0242ac120002';

const errorCallback = (error: Error | null | undefined): void => {
  if (error) console.error(error)
}

const QrCode = () => {
  const canvasRef = React.useRef(null);

  const qrCodeUrl = React.useMemo(() => {
    return `https://www.message-box.local/${HARDCODED_MESSAGE_GROUP_ID}`;
  }, []);

  React.useEffect(() => {
    QrCodeLibrary.toCanvas(canvasRef.current, qrCodeUrl, errorCallback)
  }, [qrCodeUrl]);

  return (
    <canvas ref={canvasRef} />
  );
}

export default QrCode;