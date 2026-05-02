console.log("[+] Script chargé");

const recvPtr = Process.getModuleByName("libc.so").getExportByName("recv");
console.log("[+] recv trouvée à : " + recvPtr);

Interceptor.attach(recvPtr, {
  onEnter(args) {
    console.log("[+] recv appelée");
  }
});