import { Component } from '@angular/core';
import { NumberConverterPipe } from '../number-to-words.pipe';


@Component({
  selector: 'app-number-converter',
  templateUrl: './number-converter.component.html',
  styleUrls: ['./number-converter.component.scss'],
})
export class NumberConverterComponent {
  inputNumber!: number;
  convertedText!: string;

  convert() {
    const numberConverterPipe = new NumberConverterPipe();
    this.convertedText = numberConverterPipe.transform(this.inputNumber);
  }
}
