import { derece } from './derece';

 function atombondconnectivity(matrixInput) {
    const nodeCount = matrixInput.length;
    let sonuc = 0;
    const dereceler = derece(matrixInput);
    
    for (let satir = 0; satir < nodeCount; satir++) {
        for (let sutun = 0; sutun < nodeCount; sutun++) {
            if (matrixInput[satir][sutun] > 0) {
                const pay = dereceler[satir] + dereceler[sutun] - 2;
                const payda = dereceler[satir] * dereceler[sutun];
                sonuc += Math.sqrt(pay / payda);
            }
        }
    }
    sonuc = sonuc / 2;
    return sonuc;
}
export default atombondconnectivity;
