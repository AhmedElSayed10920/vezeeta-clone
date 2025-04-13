import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { from } from 'rxjs';

// Define an interface for the filters to improve type safety
export interface Filters {
  title?: {
    professor: boolean;
    lecturer: boolean;
    consultant: boolean;
    specialist: boolean;
  };
  gender?: string;
  
  fees?: {
    any: number;
    lessThan50: number;
    from50To100: number;
    from100To200: number;
    from200To300: number;
    greaterThan300: number;
  };
  // إضافة الخصائص المطلوبة
  specialty?: string; // اختياري لأنه قد لا يتم تمريره دائمًا
  city?: string;
  governorate?: string;
  name?: string;
}

// Define an interface for the sections to ensure type safety
interface Sections {
  title: boolean;
  // subSpecialties: boolean;
  gender: boolean;
  fees:boolean;
}
@Component({
  selector: 'app-filters-sidebar',
  imports: [FormsModule,CommonModule],
  templateUrl: './filters-sidebar.component.html',
  styleUrl: './filters-sidebar.component.css'
})
export class FiltersSidebarComponent {
// Object to track which sections are expanded/collapsed
sections: Sections = {
  title: false,
  // subSpecialties: false,
  gender: false,
  fees:false
};

// Object to store filter values
filters: Filters = {
  title: {
    professor: false,
    lecturer: false,
    consultant: false,
    specialist: false,
  },
  // subSpecialties: {
  //   newBorn: false,
  //   pediatricAllergy: false,
  // },
  gender: '',
 
  fees:{
    any:0,
    lessThan50:0,
    from50To100:0,
    from100To200: 0,
    from200To300:0,
    greaterThan300:0,
  },
  // خصائص اختيارية بقيم افتراضية (لو احتجت تمررها لاحقًا بدون أخطاء)
  specialty: '',
  city: '',
  governorate: '',
  name: ''

};

// Event emitter to send filter data to parent component
@Output() filtersChanged = new EventEmitter<Filters>();

// Toggle section visibility
toggleSection(section: keyof Sections) {
  console.log('Toggling section:', section);
  this.sections[section] = !this.sections[section];
}

// Emit filters to parent component whenever they change
applyFilters() {
  this.filtersChanged.emit(this.filters);
}
}
