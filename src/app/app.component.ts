import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Tools at your disposal:';
  websites = [
    { 
      name: 'Sticker Generator', 
      url: 'https://mattjcarkeek.github.io/stickergenerator/',
      description: 'Scan To Play Stickers',
      previewUrl: `https://mini.s-shot.ru/1024x768/JPEG/1024/Z100/?https://mattjcarkeek.github.io/stickergenerator/`
    },
    { 
      name: 'Blog Copy-erator', 
      url: 'https://mattjcarkeek.github.io/sitecopy/',
      description: "Copy and AMS'ify blogs",
      previewUrl: `https://mini.s-shot.ru/1024x768/JPEG/1024/Z100/?https://mattjcarkeek.github.io/sitecopy/`
    },
    { 
      name: 'Blog Copy-erator', 
      url: 'https://mattjcarkeek.github.io/songsearcher/',
      description: "Song Deletion for Lone Star",
      previewUrl: `https://mini.s-shot.ru/1024x768/JPEG/1024/Z100/?https://mattjcarkeek.github.io/songsearcher/`
    }
  ];
}