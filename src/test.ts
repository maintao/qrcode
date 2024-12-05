import path from "path";
import { generateQrCodeFile, generateQrCodeDataUrl, isValidWeChatContact } from "./index";

async function test() {
  // Test file generation
  const testText = "https://www.github.com";
  const outputPath = path.join(__dirname, "../test-files", "test-qr.png");

  await generateQrCodeFile(testText, outputPath);
  console.log(`QR code file generated at: ${outputPath}`);

  // Test data URL generation
  const dataUrl = await generateQrCodeDataUrl(testText);
  console.log("QR code data URL generated:", dataUrl);

  console.log(isValidWeChatContact("https://u.wechat.com/JEC53CF4sRMLlOa-GSQz74p"));
}

test();
