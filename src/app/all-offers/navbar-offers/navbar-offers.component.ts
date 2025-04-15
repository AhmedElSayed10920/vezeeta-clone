import { CommonModule } from '@angular/common';
import { Component,HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar-offers',
  imports: [RouterModule,CommonModule],
  templateUrl: './navbar-offers.component.html',
  styleUrl: './navbar-offers.component.css'
})
export class NavbarOffersComponent {
  isNavbarCollapsed = true;
  isMegaMenuOpen = false;
  activeSubmenu = 'dental-care';

  menuItems = [
    {
      title: 'Dental Care',
      link: '/dentalCare',
      id: 'dentalCareDropdown',
      subItems: [
        { title: 'Smile Makeover', link: '/smileMakeOver' },
        { title: 'Whitening', link: '/whitening' },
        { title: 'Implant', link: '/implant' },
        { title: 'Crowns & Bridges', link: '/crownsBridges' },
        { title: 'RadioGraphy', link: '/radioGraphy' },
        { title: 'Children', link: '/children' },
        { title: 'Braces', link: '/braces' },
        { title: 'Dental Fillings', link: '/dentalFillings' },
        { title: 'Denture', link: '/denture' },
        { title: 'Tooth Extraction', link: '/toothExtraction' },
        { title: 'Other Dental Offers', link: '/otherDentalOffers' }
      ]
    },
    {
      title: 'Laser',
      link: '/laser',
      id: 'laserDropdown',
      subItems: [
        { title: 'Hair Removal', link: '/hairRemoval' }
      ]
    },
    {
      title: 'Hair',
      link: '/hair',
      id: 'hairDropdown',
      subItems: [
        { title: 'Hair loss Treatment', link: '/hairLossTreatment' },
        { title: 'Hair Transplant', link: '/hairTransplant' },
      ]
    },
    {
      title: 'Skin',
      link: '/skin',
      id: 'skinDropdown',
      subItems: [
        { title: 'Mesotherapy', link: '/mesotherapy' },
        { title: 'Skin Glow', link: '/skinGlow' },
        { title: 'Implant', link: '/implant' },
        { title: 'Skin Peeling', link: '/skinPeeling' },
        { title: 'Acne Scars Treatment', link: '/acneScarsTreatment' },
        { title: 'Tattoos', link: '/tattoos' },
        { title: 'Stretch Marks', link: '/stretchMarks' },
        { title: 'Skin Whitening', link: '/skinWhitening' },
        { title: 'Face & Chin', link: '/faceChin' },
        { title: 'Skin Care', link: '/skinCare' },
      ]
    },
    {
      title: 'Beauty',
      link: '/beauty',
      id: 'beautyDropdown',
      subItems: [
        { title: 'Cellulite', link: '/cellulite' },
        { title: 'Stretch Marks', link: '/stretchMarks' },
        { title: 'Face & Chin', link: '/faceChin' },
        { title: 'Breast', link: '/breast' },
        { title: 'Lips', link: '/lips' },
        { title: 'Liposuction', link: '/liposuction' },
        { title: 'Body Sculpting', link: '/bodySculpting' },
        { title: 'Butt', link: '/butt' },
      ]
    }, 
    {
      title: 'Fitness',
      link: '/fitness',
      id: 'fitnessDropdown',
      subItems: [
        { title: 'Stretch Marks', link: '/stretchMarks' },
        { title: 'Weight Loss Surgery', link: '/weightLossSurgery' },
        { title: 'Weight Loss', link: '/weightLoss' },
        { title: 'Rehabilitation', link: '/rehabilitation' },
        { title: 'Liposuction', link: '/liposuction' },
        { title: 'Body Sculpting', link: '/bodySculpting' },
        { title: 'Nutrition', link: '/nutrition' },
      ]
    },
    {
      title: 'Scans',
      link: '/scans',
      id: 'scansDropdown',
      subItems: [
        { title: 'CT-Scan', link: '/ctScan' },
      ]
    },
    {
      title: 'OB-GYN',
      link: '/obGyn',
      id: 'OB-GYNDropdown',
      subItems: [
        { title: 'Delivery', link: '/delivery' },
      ]
    },
    {
      title: 'Kidney',
      link: '/kidney',
      id: 'kidneyDropdown',
      subItems: [
        { title: 'Dialysis', link: '/kidneyDialysis' },
      ]
    },
    // {
    //   title: 'General Surgery',
    //   link: '/generalSurgery',
    //   id: 'surgeryDropdown',
    //   subItems: [
    //     { title: 'Abdomen', link: '/abdomen' },
    //     { title: 'Oncological Surgery', link: '/oncologicalSurgery' },
    //     { title: 'Endocrine Surgery', link: '/endocrineSurgery' },
    //   ]
    // },
    // {
    //   title: 'Gastro-IM',
    //   link: '/gastroIm',
    //   id: 'gastroImDropdown',
    //   subItems: [
    //     { title: 'Endoscopes', link: '/endoscopes' },
    //   ]
    // },
    // {
    //   title: 'Psychiatry',
    //   link: '/psychiatry',
    //   id: 'psychiatryDropdown',
    //   subItems: [
    //     { title: 'General Psychiatry Services', link: '/generalPsychiatryServices' },
    //   ]
    // },
  ];

  toggleNavbar() {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }

  toggleMegaMenu(event: Event) {
    if (window.innerWidth < 992) { // Mobile view
      event.preventDefault();
      this.isMegaMenuOpen = !this.isMegaMenuOpen;
    } else {
      this.isMegaMenuOpen = true;
    }
  }

  showSubmenu(submenuId: string) {
    this.activeSubmenu = submenuId;
    if (window.innerWidth >= 992) { // Desktop view
      this.isMegaMenuOpen = true;
    }
  }

  onMegaMenuLeave() {
    if (window.innerWidth >= 992) {
      this.isMegaMenuOpen = false;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    // Close mega menu when resizing to mobile view
    if (window.innerWidth < 992) {
      this.isMegaMenuOpen = false;
    }
  }

  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {
    // Close mega menu when clicking outside
    const target = event.target as HTMLElement;
    if (!target.closest('.mega-menu') && !target.closest('#allOffersDropdown')) {
      this.isMegaMenuOpen = false;
    }
  }
}
  
  



