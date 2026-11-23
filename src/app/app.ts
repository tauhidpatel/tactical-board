import { Component } from '@angular/core';
import { TacticalBoard } from './features/tactical-board/tactical-board';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TacticalBoard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  
}
