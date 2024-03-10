import { Component, OnInit } from '@angular/core';
import { ContentList } from '../helper-files/content-list';

@Component({
  selector: 'app-content-card',
  standalone: true,
  imports: [],
  templateUrl: './content-card.component.html',
  styleUrl: './content-card.component.scss'
})
export class ContentCardComponent implements OnInit {
  contentList: ContentList = new ContentList();
  title="My Application"
  constructor() {
    // Adding at least 3 valid items
    this.contentList.add({ id: 1, title: 'Badminton', description: 'Badminton, court or lawn game ', creator: 'The Duke of Beaufort', imgURL: 'https://www.games-eshop.com/wp-content/uploads/2020/09/Badminton_Den_Haag-scaled-2-2048x1365.jpg', type: 'Indoor', });

    this.contentList.add({ id: 2, title: 'Football', description: 'Association football or soccer', creator: 'James Haldane ', imgURL: 'https://mir-s3-cdn-cf.behance.net/project_modules/fs/f8c677104758261.5f6a25a1a5f8d.jpg', type: 'Outdoor' });

    this.contentList.add({ id: 3, title: 'Racing', description: 'Racing is my favourite', creator: 'Jakson Wild', imgURL: 'https://assetstorev1-prd-cdn.unity3d.com/package-screenshot/e7783bd1-cbb5-42ac-87ce-053670c4b357_scaled.jpg', type: 'Outdoor' });
  }

  ngOnInit(): void {
    console.log(this.contentList)

  }
}