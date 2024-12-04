"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateQrCodeFile = generateQrCodeFile;
exports.generateQrCodeDataUrl = generateQrCodeDataUrl;
const qrcode_1 = __importDefault(require("qrcode"));
/**
 * Generate QR code from text
 * @param text Content to encode in QR code
 * @param outputPath Path where to save the QR code image
 */
function generateQrCodeFile(text, outputPath) {
    return __awaiter(this, void 0, void 0, function* () {
        yield qrcode_1.default.toFile(outputPath, text, {
            errorCorrectionLevel: "H",
            margin: 1,
            scale: 8,
        });
    });
}
/**
 * Generate QR code and return as data URL
 * @param text Content to encode in QR code
 */
function generateQrCodeDataUrl(text) {
    return __awaiter(this, void 0, void 0, function* () {
        return qrcode_1.default.toDataURL(text, {
            errorCorrectionLevel: "H",
            margin: 1,
            scale: 8,
        });
    });
}
//# sourceMappingURL=index.js.map