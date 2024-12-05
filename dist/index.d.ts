/**
 * Generate QR code from text
 * @param text Content to encode in QR code
 * @param outputPath Path where to save the QR code image
 */
export declare function generateQrCodeFile(text: string, outputPath: string, options?: any): Promise<void>;
/**
 * Generate QR code and return as data URL
 * @param text Content to encode in QR code
 */
export declare function generateQrCodeDataUrl(text: string): Promise<string>;
/**
 * Check if the QR code is a valid WeChat contact QR code
 * @param qrcode QR code to check
 */
export declare function isValidWeChatContact(qrcode: string): boolean;
//# sourceMappingURL=index.d.ts.map