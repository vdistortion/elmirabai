import { Component } from '@angular/core';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';
import { Description } from '../../components/description/description';
import { Gallery } from '../../components/gallery/gallery';
import { Price } from '../../components/price/price';
import { About } from '../../components/about/about';
import { Reviews } from '../../components/reviews/reviews';
import { Course } from '../../components/course/course';

@Component({
  selector: 'app-main-page',
  imports: [
    Header,
    Footer,
    Description,
    Gallery,
    Price,
    About,
    Reviews,
    Course
  ],
  templateUrl: './main-page.html',
  styleUrl: './main-page.scss'
})
export class MainPage {

}
