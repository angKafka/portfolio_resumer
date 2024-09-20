import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'] // Fix here
})
export class HomeComponent implements OnInit {
  greetingMessage: string = '';
  displayedMessage: string = '';
  isTyping: boolean = false;

  ngOnInit(): void {
    this.setGreeting(); 
    this.startTyping();
  }

  startTyping() {
    this.isTyping = true; 
    this.displayedMessage = ''; // Clear displayed message first
    let i = 0;

    const type = () => {
      if (i < this.greetingMessage.length) {
        this.displayedMessage += this.greetingMessage.charAt(i);
        i++;
        setTimeout(type, 100); // Adjust speed here
      } else {
        this.isTyping = false; 
      }
    };

    type();
  }

  setGreeting() {
    const currentHour = new Date().getHours(); // Get the current hour (0-23)

    if (currentHour >= 0 && currentHour < 12) {
      this.greetingMessage = "Good Morning";
    } else if (currentHour >= 12 && currentHour < 16) {
      this.greetingMessage = "Good Afternoon";
    } else if (currentHour >= 16 && currentHour < 19) {
      this.greetingMessage = "Good Evening";
    } else {
      this.greetingMessage = "Good Night";
    }
  }
}