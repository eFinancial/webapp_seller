import {Injectable} from '@angular/core';

@Injectable()
export class QrService {
  private qrData = '';

  setQRData(qrData: any) {
    this.qrData = qrData;
  }

  getQRData() {
    return this.qrData;
  }
}
