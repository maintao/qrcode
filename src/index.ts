import QRCode, { QRCodeToFileOptions } from "qrcode";

/**
 * Generate QR code from text
 * @param text Content to encode in QR code
 * @param outputPath Path where to save the QR code image
 */
export async function generateQrCodeFile(
  text: string,
  outputPath: string,
  options: any = {
    errorCorrectionLevel: "H",
    margin: 1,
    scale: 8,
  }
): Promise<void> {
  await QRCode.toFile(outputPath, text, options as QRCodeToFileOptions);
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

/**
 * Check if the QR code is a valid WeChat contact QR code
 * @param qrcode QR code to check
 */
export function isValidWeChatContact(qrcode: string): boolean {
  // ex: https://u.wechat.com/JEC53CF4sRMLlOa-GSQz74p
  if (!qrcode) {
    return false;
  }
  if (qrcode.length < 36) {
    return false;
  }
  return qrcode.startsWith("https://u.wechat.com/");
}
