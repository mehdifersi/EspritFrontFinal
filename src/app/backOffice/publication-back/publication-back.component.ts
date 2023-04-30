import { Component, OnInit } from '@angular/core';
import { Publication } from 'src/app/Modals/Publication.modal';
import { Comment } from 'src/app/core/Model/Comment';
import { CommentService } from 'src/app/services/comment.service';
import { PublicationService } from 'src/app/services/publication.service';
import { RAtingService } from 'src/app/services/rating.service';
import { ReactService } from 'src/app/services/react.service';
import { SignalpostService } from 'src/app/services/signalpost.service';

@Component({
  selector: 'app-publication-back',
  templateUrl: './publication-back.component.html',
  styleUrls: ['./publication-back.component.css']
})
export class PublicationBackComponent implements OnInit {
  pubList : Publication[]=[]
  pubadd : Publication = new Publication()
  pubupdate : Publication = new Publication()
  commadd = new Comment()
  errmsg :string=""
  select : any;
  rate : any;
constructor(private pubservice : PublicationService ,private reactservice : ReactService ,private commenservice : CommentService , private signalservice : SignalpostService , private ratingservice : RAtingService){

}
  ngOnInit(): void {
this.getallpub()  }


getscore(id : any){
  this.ratingservice.getScore(id).subscribe(data => {
    this.rate = data;
  })
}
addrate(id : any , rate : any)
{
  console.log(this.select)
  this.ratingservice.addrate(id , this.select).subscribe()
  console.log("add")
}
addcoment(){
  this.commenservice.addComment(this.commadd, this.pubComm.idPublication).subscribe(
    data => {},
    err => {
      this.errmsg = err.error.text;
      console.log(err.error.text)
      if(err.error.text == 'add successfuly'){
        window.location.reload()
      }
    }
      
  )
}

signalPost(id :any){
this.signalservice.addsignal(id).subscribe(data =>{})
window.location.reload();
}
setupdate(p : Publication){
  this.pubupdate = p
}
addpost(){
  this.pubservice.addpub(this.pubadd).subscribe(data=>{console.log(data)
  window.location.reload()})

}
addreact(id : any , react : string){
  this.reactservice.addreact(id,react).subscribe(Data =>this.getallpub)
  window.location.reload()

}
updatepost(){
  this.pubservice.updatepub(this.pubupdate).subscribe(data=>{console.log(data)
  window.location.reload()})

}
getallpub(){
this.pubservice.getPosts().subscribe(data => {this.pubList = data
console.log(data)})
}
pubComm : Publication= new Publication
postComment(p : Publication){
this.pubComm = p
}
deletePost(id :any){
  this.pubservice.deletePost(id).subscribe(data => {
    this.getallpub()
  })
  }


divcomm : boolean=false
  affcom(){
this.divcomm = !this.divcomm
  }

  rateb : boolean=false
  showrate(){
    this.rateb = ! this.rateb
  }
}


