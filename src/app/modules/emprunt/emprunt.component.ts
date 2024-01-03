import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { EmpruntService } from 'src/app/services/emprunts.service';
import { LivresService } from 'src/app/services/livres.service';
class Emp {
  dateDebut : any;
  dateFin : any;
  user :any
  livre : any
  code : any
}
@Component({
  selector: 'app-emprunt',
  templateUrl: './emprunt.component.html',
  styleUrls: ['./emprunt.component.css']
})
export class EmpruntComponent implements OnInit{
  id = this.route.snapshot.params['id']
  livre :any
  emp = new Emp()
  user : any
  qrCodeImage: any;
  qrTitle : any
  constructor(
    private route : ActivatedRoute , 
    private livreService : LivresService , 
    private auth : AuthService ,
    private empruntService : EmpruntService
    ){

  }
  ngOnInit(): void {
    this.livreService.getById(this.id).subscribe(res=>{
      this.livre = res
    })
    this.auth.me().subscribe(res=>{
      console.log(res.principal.username);
      this.auth.userByUserName(res.principal.username).subscribe(res=>{
        console.log(res);
        this.user = res
        
      }) 
    })
  }
  getQRCodeImage(data:any) {
    this.empruntService.getQRCodeImage(data).subscribe((data: any) => {
      this.createImageFromBlob(data);
    }, error => {
      console.error(error);
    });
  }
  qrcodeAction(i:any){
    this.getQRCodeImage(i)
  }
  createImageFromBlob(image: Blob) {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
      this.qrCodeImage = reader.result;
    }, false);

    if (image) {
      reader.readAsDataURL(image);
    }
  }
  submitForm(){
    this.emp.livre = this.livre
    this.emp.user = this.user
    this.emp.code = this.generateRandomStringOf19Chars()
    console.log(this.emp);
    this.empruntService.add(this.emp).subscribe(res=>{
      console.log(res)
      this.qrTitle = res.code
      this.qrcodeAction(this.qrTitle)
    })
    
  }

  generateRandomString(length: number): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let result = '';

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charactersLength);
      result += characters.charAt(randomIndex);
    }

    return result;
  }

  generateRandomStringOf19Chars(): string {
    return this.generateRandomString(19);
  }

}
