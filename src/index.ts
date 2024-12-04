import QRCode from "qrcode";

/**
 * Generate QR code from text
 * @param text Content to encode in QR code
 * @param outputPath Path where to save the QR code image
 */
export async function generateQrCodeFile(text: string, outputPath: string): Promise<void> {
  await QRCode.toFile(outputPath, text, {
    errorCorrectionLevel: "H",
    margin: 1,
    scale: 8,
  });
}

/**
 * Generate QR code and return as data URL
 * @param text Content to encode in QR code
 */
export async function generateQrCodeDataUrl(text: string): Promise<string> {
  return QRCode.toDataURL(text, {
    errorCorrectionLevel: "H",
    margin: 1,
    scale: 8,
  });
}
