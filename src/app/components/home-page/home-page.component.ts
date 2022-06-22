import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { GetApiService } from 'src/app/services/getApi.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  homePageForm!: FormGroup

  constructor(private GetApiService: GetApiService) { }

  convert(){
    console.log('convert method is working');
    this.GetApiService.getCurrency(this.homePageForm.value).subscribe(data=>console.log(data))
    // const {valueFrom, selectFrom, valueTo, selectTo} = this.homePageForm.value;
    // console.log(`from ${valueFrom} ${selectFrom} to ${valueTo} ${selectTo}`)
  }

  ngOnInit(): void {
    this.homePageForm = new FormGroup({
      'valueFrom': new FormControl(''),
      'selectFrom': new FormControl(''),
      'valueTo': new FormControl(''),
      'selectTo': new FormControl(''),

    })
  }

}
