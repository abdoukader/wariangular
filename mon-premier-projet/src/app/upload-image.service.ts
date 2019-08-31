  import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UploadImageService {

  constructor(private http : HttpClient) { }

  postFile(caption: string, fileToUpload: File) {
    const endpoint = 'http://localhost:8000/api/register';
    const formData: FormData = new FormData();
    formData.append('Image', fileToUpload, fileToUpload.name);
    
    return this.http
      .post(endpoint, formData);
  }

}