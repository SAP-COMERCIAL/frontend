import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({

  providedIn: 'root'

})

export class AESEncryptService {

  secretKey = 'C64GF-QGX43-2PMM3-KFGKM-Q66PR';

  constructor() { }

  encrypt(value: string): string{

    return CryptoJS.HmacSHA256(value, this.secretKey.trim()).toString();

  }

}