import { Component } from '@angular/core';
import Test from 'src/app/Test';
import tests from './gen/tests/tests';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  current: number = 0;
  tmp: Array<Test> = [];
  url: string = "http://localhost:5000/api";

  onclick() {  
    this.current = 0;
    this.exec(tests[0], 0);
  }  

  exec(test: Test, index: number) {
    console.log(index);
    test.execute(test, this.url).then(() => {   
        this.tmp = [...this.tmp, test];
        this.current = index;  
        index = index + 1;         
        if(index < tests.length) {
          this.exec(tests[index], index);
        }
    });
  }

}
