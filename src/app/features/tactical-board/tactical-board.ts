import { Component } from '@angular/core';
import { FootballPitch } from './components/football-pitch/football-pitch';
import { BoardToolbar } from './components/board-toolbar/board-toolbar';

@Component({
  selector: 'app-tactical-board',
  standalone: true,
  imports: [FootballPitch, BoardToolbar],
  styleUrl: './tactical-board.css',
  templateUrl: './tactical-board.html',
})

export class TacticalBoard {
  
}
