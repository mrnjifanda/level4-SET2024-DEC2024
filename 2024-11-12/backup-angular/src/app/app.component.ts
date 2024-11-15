import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'backup-angular';
  hello: string = 'Hello Word';
  apiData: any;

  constructor(private readonly httpClient: HttpClient) {}

  updateHello(): void {

    this.hello = "New name"
  }

  apiWithHttpClient(): void {

    this.httpClient.get('https://www.google.com').subscribe((response: any) => {

      console.log(response);
    });

  }

  api(): void {

    fetch("https://www.google.com")
      .then(response => response.text())
      .then(data => {
        this.apiData = data;
        console.log(data);
      })
      .catch(err => alert(err.message));
  }
}
