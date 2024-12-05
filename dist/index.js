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
exports.isValidWeChatContact = isValidWeChatContact;
const qrcode_1 = __importDefault(require("qrcode"));
/**
 * Generate QR code from text
 * @param text Content to encode in QR code
 * @param outputPath Path where to save the QR code image
 */
function generateQrCodeFile(text_1, outputPath_1) {
    return __awaiter(this, arguments, void 0, function* (text, outputPath, options = {
        errorCorrectionLevel: "H",
        margin: 1,
        scale: 8,
    }) {
        yield qrcode_1.default.toFile(outputPath, text, options);
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
/**
 * Check if the QR code is a valid WeChat contact QR code
 * @param qrcode QR code to check
 */
function isValidWeChatContact(qrcode) {
    // ex: https://u.wechat.com/JEC53CF4sRMLlOa-GSQz74p
    if (!qrcode) {
        return false;
    }
    if (qrcode.length < 36) {
        return false;
    }
    return qrcode.startsWith("https://u.wechat.com/");
}
//# sourceMappingURL=index.js.map