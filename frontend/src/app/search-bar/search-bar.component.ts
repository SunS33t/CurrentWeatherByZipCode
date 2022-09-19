import { Component} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ApiCallerService } from '../api-caller.service';


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent{
  zipFormControl = new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]);
  value: any = null;
  request = false;
  
  constructor(private api:ApiCallerService, private toastr: ToastrService){

  }

  onSubmit(e: any){
    this.request = true;
    e.preventDefault();
    if(this.zipFormControl.valid){
      this.api.getWeather(this.zipFormControl.value).subscribe(
        res=> {
          this.value = res;
          this.request = false;
        },
        err=> {
          this.value = null;
          if(err.status == 400){
            this.toastr.error('Typo in zip code')
          }
          else{
            this.toastr.error('Server is not running')
          }
          this.request = false;
        }
      );
    }
    else{
      this.request = false;
    }
  } 
}