export interface Filters {
    specialty?: string;
    subSpecialty?: string;
    city?: string;
    governorate?: string;
    name?: string;
    degree?: {
        master?: boolean;
        bachelor?: boolean;
        phd?: boolean;
      };
      subSpecialties?: {
        newBorn?: boolean;
        pediatricAllergy?: boolean;
      };
      gender?: string;
      fees?: {
        any?: boolean;
        lessThan50?: boolean;
        from50To100?: boolean;
        from100To200?: boolean;
        from200To300?: boolean;
        greaterThan300?: boolean;
      };
      insurance?: string;      // 🛠️ أضف هذا السطر
  maxFees?: number; 
}
