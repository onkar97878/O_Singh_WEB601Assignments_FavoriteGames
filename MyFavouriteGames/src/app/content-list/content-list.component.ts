import { Component } from '@angular/core';
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
   logContentInfo(id: string, title: string) {
    console.log("Content ID:", id);
    console.log("Content Title:", title);
  }
  typePresent:boolean | undefined;
  inputValue:string='';
  
  constructor(){
  this.contentArray.push(
    
      { 
        id: 1, 
        title: 'Chess',
         description: 'Tournament sport ',
          creator: 'Sissa Ben Dahir', 
          imgURL: 'https://wallpapercave.com/wp/wp2971102.jpg', 
          type: 'indoor',
        tags: ['Tag1', 'Tag2'] 
      },
      { 
        id: 2, 
        title: 'Carrom Board',
         description: 'A Board Game', 
         creator: ' Henry L. Haskell', 
         imgURL: 'https://th.bing.com/th/id/OIP.r7idDolXZ_hlsP2UQzVoaQHaHa?rs=1&pid=ImgDetMain',
          type: 'indoor',
        tags: ['Tag3', 'Tag6'] 
      },
      { 
        id: 3, 
        title: 'Snakes and Ladders', 
        description: 'Snakes and Ladders', 
        creator: 'will.', 
        imgURL: 'https://th.bing.com/th/id/OIP.YZqPQ_zpubM8m4D-m23DYQAAAA?rs=1&pid=ImgDetMain', 
        type: 'indoor',
        tags: ['Tag5', 'Tag6'] 
      },
      { 
        id: 4, 
        title: 'Clash Of Clans ', 
        description: 'Addictive game', 
        creator: 'Unknown', 
        imgURL: 'https://th.bing.com/th/id/OIP.hoh5JN6HAAdVIGW22YAeHAHaEK?rs=1&pid=ImgDetMain', 
        type: 'electronics', 
        tags: ['Tag5', 'Tag6'] 
      },  { 
        id: 5, 
        title: 'PUBG', 
        description: 'Mobile Game', 
        creator: 'Korea', 
        imgURL: 'https://th.bing.com/th/id/OIP.QiY9_ch3mhhluBEZvDlsFAHaEO?rs=1&pid=ImgDetMain', 
        type: 'electronics', 
        tags: ['Tag5', 'Tag6'] 
      },
      { 
        id: 6, 
        title: 'Snipper', 
        description: 'Phone Game', 
        creator: 'Human', 
        imgURL: 'https://th.bing.com/th/id/OIP.OA5QeP7FQwyHZkInCl_n2QAAAA?rs=1&pid=ImgDetMain', 
        type: 'electronics', 
        tags: ['Tag5', 'Tag6'] 
      },
      { 
        id: 7, 
        title: 'Hockey', 
        description: 'Outdoor Sport', 
        creator: 'Nature', 
        imgURL: 'https://th.bing.com/th/id/R.4952f346cd0a2489bdf8ca97ac2647e0?rik=BMQLgC1M4LIkMw&pid=ImgRaw&r=0', 
        type: '', 
        tags: ['Tag5', 'Tag6'] 
      },
      { 
        id: 8, 
        title: 'Baseball', 
        description: 'Enerzizing game', 
        creator: 'Nature', 
        imgURL: 'https://th.bing.com/th/id/OIP._7jfughUQeg_bk24hyZJxAHaFN?rs=1&pid=ImgDetMain', 
        type: '', 
        tags: ['Tag5', 'Tag6'] 
      },
      { 
        id: 9, 
        title: 'Cycling', 
        description: 'Kind of exercise', 
        creator: 'Nature', 
        imgURL: 'https://omgnepal.com/wp-content/uploads/2020/07/Best-Beginner-Road-Bikes-gear-patrol-full-lead.jpg', 
        type: '', 
        tags: ['Tag5', 'Tag6'] 
      },
      
     );
      
    }


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