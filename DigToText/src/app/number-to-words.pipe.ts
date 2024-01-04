import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberConverter',
})
export class NumberConverterPipe implements PipeTransform {
  transform(value: any): string {
    const isNumeric = /^[0-9]+$/.test(value);

    if (!isNumeric) {
      return 'Input should be numeric';
    }

    if (value === null || value === undefined) {
      return '';
    }

    const words: string[] = [
      '', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten',
      'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'
    ];

    const tens: string[] = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];

    const convertTwoDigits = (num: number): string => {
      if (num === 0) {
        return '';
      } else if (num < 20) {
        return words[num] + ' ';
      } else {
        const digitOne = num % 10;
        const digitTen = Math.floor(num / 10);
        return tens[digitTen] + ' ' + words[digitOne] + ' ';
      }
    };

    const convertThreeDigits = (num: number): string => {
      const digitHundred = Math.floor(num / 100);
      const remainingTwoDigits = num % 100;

      let result = '';
      if (digitHundred > 0) {
        result += words[digitHundred] + ' Hundred ';
      }

      result += convertTwoDigits(remainingTwoDigits);

      return result;
    };

    const convertToIndianNumberSystem = (num: number): string => {
      if (num === 0) {
        return 'Zero';
      }

      let result = '';

      const crore = Math.floor(num / 10000000);
      const remainingCrore = num % 10000000;

      const lakh = Math.floor(remainingCrore / 100000);
      const remainingLakh = remainingCrore % 100000;

      const thousand = Math.floor(remainingLakh / 1000);
      const remainingThousand = remainingLakh % 1000;

      if (crore > 0) {
        result += convertThreeDigits(crore) + 'Crore ';
      }

      if (lakh > 0) {
        result += convertThreeDigits(lakh) + 'Lakh ';
      }

      if (thousand > 0) {
        result += convertThreeDigits(thousand) + 'Thousand ';
      }

      if (remainingThousand > 0) {
        result += convertThreeDigits(remainingThousand);
      }

      return result.trim();
    };

    if (value > 1000000) {
      return 'Number too big';
    }

    return convertToIndianNumberSystem(value);
  }
}

