import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {
  minutes: number = 5; 
  seconds: number = 0;
  isTimerRunning: boolean = false;
  timerInterval: any;

  ngOnInit(): void {
    this.resetTimer();
  }


  startTimer() {
    if (!this.isTimerRunning) {
      this.timerInterval = setInterval(() => {
        this.seconds--;
        if (this.seconds < 0) {
          if (this.minutes === 0) {
            this.stopTimer();
            return;
          }
          this.minutes--;
          this.seconds = 59;
        }
      }, 1000);
      this.isTimerRunning = true;
    }
  }

  stopTimer() {
    clearInterval(this.timerInterval);
    this.isTimerRunning = false;
  }

  resetTimer() {
    this.minutes = 5;
    this.seconds = 0;
    this.stopTimer();
  }
}
