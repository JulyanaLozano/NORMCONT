import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public title = 'Hola Mundo NORMCONT';
  users: string[] = ['Juan Felipe','jfcordoba82@misena.edu.co','calle 16 # 13-48'];
  /*users: string[] = [];*/
  visible: boolean = false;

  setVisible(): void {
    this.visible = this.visible? false: true;
    console.log('hemos echo clic aqui');
  }

}
