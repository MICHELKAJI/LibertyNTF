
import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit, OnDestroy{
  slides = [
    { src: "assets/images/banner-01.png", alt: "Description de l'image 1" },
    { src: "assets/images/banner-02.png", alt: "Description de l'image 2" },
    
  ];
  currentSlideIndex = 0;
  intervalId: any;

  ngOnInit(): void {
    this.startAutoplay();
  }

  ngOnDestroy(): void {
    this.stopAutoplay();
  }

  startAutoplay(): void {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 3000); 
  }

  stopAutoplay(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  nextSlide(): void {
    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.slides.length;
  }

  prevSlide(): void {
    this.currentSlideIndex = 
      this.currentSlideIndex === 0 ? this.slides.length - 1 : this.currentSlideIndex - 1;
  }
}

