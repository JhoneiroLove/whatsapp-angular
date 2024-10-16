import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true, // definir como standalone
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  phoneNumber: string = '';
  messageText: string = '';

  // Método para enviar el mensaje
  sendMessage() {
    const phone = this.phoneNumber.startsWith('+') ? this.phoneNumber : `+${this.phoneNumber}`;
    const encodedMessage = encodeURIComponent(this.messageText);
    const url = `https://web.whatsapp.com/send?phone=${phone}&text=${encodedMessage}`; // Para abrir en la web de WhatsApp
    //const url = `https://wa.me/${phone}?text=${encodedMessage}`; -> Para abrir en la app de WhatsApp
    window.open(url, '_blank');
  }
}
