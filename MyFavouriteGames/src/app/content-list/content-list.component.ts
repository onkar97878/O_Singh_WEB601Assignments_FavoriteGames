import { Component } from '@angular/core';
import { GameServiceService} from '../services/game.service';

// import { ContentList } from '../helper-files/content-list';
import { Content} from '../helper-files/content-interface'

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrl: './content-list.component.scss'
})

export class ContentListComponent {

  name : string | undefined;
   contentArray: Content[] = [];
   contentItem: Content;
   logContentInfo(id: string, title: string) {
    console.log("Content ID:", id);
    console.log("Content Title:", title);
  }
  typePresent:boolean | undefined;
  inputValue:string='';
  constructor(private service:GameServiceService){
//   this.contentArray.push(
    
//       { 
//         id: 1, 
//         title: 'Badminton',
//          description: 'Badminton, court or lawn game ',
//           creator: 'The Duke of Beaufort', 
//           imgURL: 'https://www.games-eshop.com/wp-content/uploads/2020/09/Badminton_Den_Haag-scaled-2-2048x1365.jpg', 
//           type: '',
//         tags: ['Tag1', 'Tag2'] 
//       },
//       { 
//         id: 2, 
//         title: 'Football',
//          description: 'Association football or soccer', 
//          creator: 'James Haldane ', 
//          imgURL: '',
//           type: '',
//         tags: ['Tag3', 'Tag6'] 
//       },
//       { 
//         id: 3, 
//         title: 'Racing', 
//         description: 'Racing is my favourite', 
//         creator: 'Jakson Wild', 
//         imgURL: 'https://assetstorev1-prd-cdn.unity3d.com/package-screenshot/e7783bd1-cbb5-42ac-87ce-053670c4b357_scaled.jpg', 
//         type: '',
//         tags: ['Tag5', 'Tag6'] 
//       },
//       { 
//         id: 4, 
//         title: 'Cash ', 
//         description: 'Description for all games', 
//         creator: 'Harry tho', 
//         imgURL: 'https://www.wallpaperup.com/uploads/wallpapers/2014/06/24/377589/38350a3152f132e5dbc4de5e802734b4.jpg', 
//         type: 'Computer', 
//         tags: ['Tag5', 'Tag6'] 
//       },  { 
//         id: 5, 
//         title: 'Battleground', 
//         description: 'Cycling is goods for health', 
//         creator: 'Nature', 
//         imgURL: 'https://th.bing.com/th/id/OIP.QiY9_ch3mhhluBEZvDlsFAHaEO?rs=1&pid=ImgDetMain', 
//         type: 'Computer', 
//         tags: ['Tag5', 'Tag6'] 
//       },
//       { 
//         id: 6, 
//         title: 'Snipper', 
//         description: 'Cycling is goods for health', 
//         creator: 'Nature', 
//         imgURL: 'https://th.bing.com/th/id/OIP.x2QCGE8Vx50S1KP7raLTwAHaEK?w=312&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7', 
//         type: 'Computer', 
//         tags: ['Tag5', 'Tag6'] 
//       },
//       { 
//         id: 7, 
//         title: 'Hockey', 
//         description: 'Cycling is goods for health', 
//         creator: 'Nature', 
//         imgURL: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/f8c677104758261.5f6a25a1a5f8d.jpg', 
//         type: 'outdoor', 
//         tags: ['Tag5', 'Tag6'] 
//       },
//       { 
//         id: 8, 
//         title: 'Baseball', 
//         description: 'Cycling is goods for health', 
//         creator: 'Nature', 
//         imgURL: 'https://th.bing.com/th/id/R.ffb8dfba085441e83f6e4db8872649c4?rik=kLSyeJ17Bc5TIQ&pid=ImgRaw&r=0', 
//         type: 'outdoor', 
//         tags: ['Tag5', 'Tag6'] 
//       },
//       { 
//         id: 9, 
//         title: 'Cycling', 
//         description: 'Cycling is goods for health', 
//         creator: 'Nature', 
//         imgURL: 'https://omgnepal.com/wp-content/uploads/2020/07/Best-Beginner-Road-Bikes-gear-patrol-full-lead.jpg', 
//         type: 'outdoor', 
//         tags: ['Tag5', 'Tag6'] 
//       },
      
//      );
  }
  ngOnInit(){
    console.log("service")

    this.service.getContent().subscribe((res: any)=>{
      console.log(res)
      this.contentArray.push(...res)
    })}


search(str:string){
     
  for(let  i=0; i < this.contentArray.length; i++){
    if(this.contentArray[i].title==str)
    {
      this.typePresent=true;
      break;
    }
  
  else if(this.contentArray[i].title!=str)
   this.typePresent=false;
  }
      
    }

}
