import { Component, OnInit } from '@angular/core';

import { moveItemInArray, CdkDragDrop } from "@angular/cdk/drag-drop";
import { NbWindowService } from '@nebular/theme';
import { TestimonialFormComponent } from '../testimonial-form/testimonial-form.component';


import { Router } from '@angular/router';
import { TestimonialService } from '../../testimonial.service';

@Component({
  selector: 'ngx-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {

  testimonials={
    name:"",
    position:"",
    organization:"",
    testimonial:"",
    course_title:"",
    Image:""
  }

  constructor(private windowService:NbWindowService,private testimonialService:TestimonialService,private router:Router) { }

  ngOnInit(): void {

      this.testimonialService.gettestimonials().subscribe((data)=>{
      this.testimonials=JSON.parse(JSON.stringify(data));
    })
  }
addTestimonial(){
  this.windowService.open(TestimonialFormComponent, { title: 'Add testimonial'});
}




}
