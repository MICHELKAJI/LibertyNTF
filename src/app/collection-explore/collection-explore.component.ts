import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-collection-explore',
  standalone: true,
  imports: [NgIf,NgFor],
  templateUrl: './collection-explore.component.html',
  styleUrl: './collection-explore.component.css'
})
export class CollectionExploreComponent {
  slides = [
    { src: "assets/images/collection-01.jpg", alt: "Description de l'image 1", title:"Genesis Collective Statue", item:"380/394", categorie:"Music Art" },
    { src: "assets/images/collection-01.jpg", alt: "Description de l'image 1", title:"Genesis Collective Statue", item:"380/394", categorie:"Music Art" },
    { src: "assets/images/collection-01.jpg", alt: "Description de l'image 1", title:"Genesis Collective Statue", item:"380/394", categorie:"Music Art" },
    { src: "assets/images/collection-01.jpg", alt: "Description de l'image 1", title:"Genesis Collective Statue", item:"380/394", categorie:"Music Art" },
    { src: "assets/images/collection-01.jpg", alt: "Description de l'image 1", title:"Genesis Collective Statue", item:"380/394", categorie:"Music Art" },
    { src: "assets/images/collection-01.jpg", alt: "Description de l'image 1", title:"Genesis Collective Statue", item:"380/394", categorie:"Music Art" },
    { src: "assets/images/collection-01.jpg", alt: "Description de l'image 1", title:"Genesis Collective Statue", item:"380/394", categorie:"Music Art" },
    { src: "assets/images/collection-01.jpg", alt: "Description de l'image 1", title:"Genesis Collective Statue", item:"380/394", categorie:"Music Art" },
    { src: "assets/images/collection-01.jpg", alt: "Description de l'image 1", title:"Genesis Collective Statue", item:"380/394", categorie:"Music Art" },
    { src: "assets/images/collection-01.jpg", alt: "Description de l'image 1", title:"Genesis Collective Statue", item:"380/394", categorie:"Music Art" }
    
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
    if (this.currentSlideIndex === this.slides.length - 1) {
      this.currentSlideIndex = 0; 
    } else {
      this.currentSlideIndex++;
    }
  }


  prevSlide(): void {
    this.currentSlideIndex = 
      this.currentSlideIndex === 0 ? this.slides.length - 1 : this.currentSlideIndex - 1;
  }
}