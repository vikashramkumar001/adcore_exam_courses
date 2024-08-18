import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from "@angular/material/core";
import {MomentDateAdapter} from "@angular/material-moment-adapter";
import {MatTable, MatTableDataSource} from "@angular/material/table";
import {AppService} from "./app.service";
import moment from 'moment';
import {FormBuilder, FormGroup, FormGroupDirective, Validators} from "@angular/forms";
import {MatDatepicker} from "@angular/material/datepicker";
import {MatSnackBar} from "@angular/material/snack-bar";
import {HttpErrorResponse} from "@angular/common/http";

export interface CourseData {
  City: string,
  Country: string,
  CourseDescription: string,
  CourseName: string,
  Currency: string,
  EndDate: string,
  Price: number,
  StartDate: string,
  University: string,
  createdAt: string,
  _id: string
}

export interface TableData {
  course_name: string,
  location: string,
  start_date: string,
  length: number,
  price: number,
  currency: string,
  course_description: string,
  id: string,
  city: string,
  country: string,
  end_date: string,
  university: string
}

export const MY_FORMATS = {
  parse: {
    dateInput: 'YYYY-MM-DD',
  },
  display: {
    dateInput: 'YYYY-MM-DD',
    monthYearLabel: 'YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'YYYY',
  },
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS}
  ]
})
export class AppComponent implements OnInit, AfterViewInit {

  showLoader: boolean;

  dataSource: MatTableDataSource<TableData>;
  displayedColumns = [
    'course_name',
    'location',
    'start_date',
    'length',
    'price'
  ]
  coursesReturned: CourseData[] = [];
  totalCoursesReturned = 0;
  currentPage = 1;
  itemsPerPage = 10;

  showCourseForm: boolean = false;
  areWeEditing = false;
  areWeCreating = false;
  idBeingEdited: string | null = null;

  @ViewChild(MatTable) table!: MatTable<any>;
  @ViewChild('courseForm') courseFormDirective!: FormGroupDirective;
  @ViewChild('start_picker') startPicker!: MatDatepicker<Date>;
  @ViewChild('end_picker') endPicker!: MatDatepicker<Date>;

  searchInput: string = '';
  fgCourseForm: FormGroup;

  currencyList: string[] = [];
  universityList: string[] = [];
  cityList: string[] = [];
  countryList: string[] = [];
  courseList: string[] = [];

  filteredCurrencyList: string[] = [];
  filteredUniversityList: string[] = [];
  filteredCityList: string[] = [];
  filteredCountryList: string[] = [];
  filteredCourseList: string[] = [];

  constructor(private service: AppService, private fb: FormBuilder, private snackBar: MatSnackBar) {
    this.dataSource = new MatTableDataSource<TableData>([]);
    this.fgCourseForm = fb.group({
      course_name: [null, [Validators.required]],
      university: [null, [Validators.required]],
      country: [null, [Validators.required]],
      city: [null, [Validators.required]],
      price_currency: [null, [Validators.required]],
      price_amount: [null, [Validators.required]],
      start_date: [null, [Validators.required]],
      end_date: [null, [Validators.required]],
      course_description: [null, [Validators.required]],
    })
    this.showLoader = true;
  }

  openSnackBar(message: string, action: string = 'Dismiss') {
    this.snackBar.open(message, action, {
      duration: 5000,
      horizontalPosition: 'center', // 'start' | 'center' | 'end' | 'left' | 'right'
      verticalPosition: 'bottom', // 'top' | 'bottom'
    });
  }

  ngOnInit(): void {
    this.getLists();
  }

  getLists = () => {
    this.service.serviceGetLists()
      .subscribe({
          next: (data: any) => {
            console.log('get lists data', data);
            this.cityList = data.cities;
            this.countryList = data.countries;
            this.universityList = data.universities;
            this.courseList = data.courses;
            this.currencyList = data.currencies;
          },
          error: (error: HttpErrorResponse) => {
            console.log('get lists error', error);
            this.openSnackBar(error.error?.message);
          }
        }
      )
  }

  filterCoursesList = () => {
    const searchString = this.fgCourseForm.get('course_name')?.value;
    if (!searchString) {
      this.filteredCourseList = [];
    } else {
      // only filter if search string is 2 or more characters
      if (searchString.length >= 1) {
        // return top 5 after filtering
        this.filteredCourseList = this.courseList.filter(course => course.toLowerCase().indexOf(searchString.toLowerCase()) >= 0).slice(0, 5);
      } else {
        this.filteredCourseList = [];
      }
    }
  }
  filterCurrencyList = () => {
    const searchString = this.fgCourseForm.get('price_currency')?.value;
    if (!searchString) {
      this.filteredCurrencyList = [];
    } else {
      // only filter if search string is 2 or more characters
      if (searchString.length >= 1) {
        // return top 5 after filtering
        this.filteredCurrencyList = this.currencyList.filter(currency => currency.toLowerCase().indexOf(searchString.toLowerCase()) >= 0).slice(0, 5);
      } else {
        this.filteredCurrencyList = [];
      }
    }
  }
  filterCountryList = () => {
    const searchString = this.fgCourseForm.get('country')?.value;
    if (!searchString) {
      this.filteredCountryList = [];
    } else {
      // only filter if search string is 2 or more characters
      if (searchString.length >= 1) {
        // return top 5 after filtering
        this.filteredCountryList = this.countryList.filter(country => country.toLowerCase().indexOf(searchString.toLowerCase()) >= 0).slice(0, 5);
      } else {
        this.filteredCountryList = [];
      }
    }
  }
  filterCityList = () => {
    const searchString = this.fgCourseForm.get('city')?.value;
    if (!searchString) {
      this.filteredCityList = [];
    } else {
      // only filter if search string is 2 or more characters
      if (searchString.length >= 1) {
        // return top 5 after filtering
        this.filteredCityList = this.cityList.filter(city => city.toLowerCase().indexOf(searchString.toLowerCase()) >= 0).slice(0, 5);
      } else {
        this.filteredCityList = [];
      }
    }
  }
  filterUniversityList = () => {
    const searchString = this.fgCourseForm.get('university')?.value;
    if (!searchString) {
      this.filteredUniversityList = [];
    } else {
      // only filter if search string is 2 or more characters
      if (searchString.length >= 1) {
        // return top 5 after filtering
        this.filteredUniversityList = this.universityList.filter(uni => uni.toLowerCase().indexOf(searchString.toLowerCase()) >= 0).slice(0, 5);
      } else {
        this.filteredUniversityList = [];
      }
    }
  }

  resetFilteredLists = () => {
    this.filteredCityList = [];
    this.filteredCountryList = [];
    this.filteredUniversityList = [];
    this.filteredCourseList = [];
    this.filteredCurrencyList = [];
  }

  startSelectToday = () => {
    const today = new Date();
    this.fgCourseForm.get('start_date')?.setValue(today);
    this.startPicker.close();
  }

  startClearDate = () => {
    this.fgCourseForm.get('start_date')?.setValue(null);
    this.startPicker.close();
  }

  endSelectToday = () => {
    const today = new Date();
    this.fgCourseForm.get('end_date')?.setValue(today);
    this.endPicker.close();
  }

  endClearDate = () => {
    this.fgCourseForm.get('end_date')?.setValue(null);
    this.endPicker.close();
  }

  populateTable = () => {
    const tempData: TableData[] = []
    for (let course of this.coursesReturned) {
      const temp: TableData = {} as TableData;
      temp.course_name = course.CourseName;
      temp.location = course.Country + ', ' + course.City + ', ' + course.University
      temp.start_date = course.StartDate;
      temp.price = course.Price;
      temp.length = this.calculateDaysInclusive(course.StartDate, course.EndDate);
      temp.currency = course.Currency
      temp.course_description = course.CourseDescription
      temp.id = course._id
      temp.city = course.City
      temp.country = course.Country
      temp.end_date = course.EndDate
      temp.university = course.University
      tempData.push(temp);
    }
    this.dataSource = new MatTableDataSource<TableData>(tempData);
  }

  onPageChange = () => {
    this.getCourses();
  }

  onSearchEnter = () => {
    // check if form is open - close create/edit and prepare for data
    if (this.areWeEditing || this.areWeCreating) {
      this.showCourseForm = false;
      this.resetCourseForm();
    }
    // reset paginator to first page
    this.currentPage = 1;
    // perform search by getting courses
    this.getCourses();
  }

  clearSearch = () => {
    this.searchInput = '';
    this.getCourses();
  }

  editCourseClicked = (course: TableData) => {
    console.log('edit clicked', this.fgCourseForm)
    this.areWeEditing = true;
    this.areWeCreating = false;
    this.fgCourseForm.get('university')?.setValue(course.university);
    this.fgCourseForm.get('university')?.disable();
    this.fgCourseForm.get('city')?.setValue(course.city);
    this.fgCourseForm.get('city')?.disable();
    this.fgCourseForm.get('course_name')?.setValue(course.course_name);
    this.fgCourseForm.get('course_name')?.disable();
    this.fgCourseForm.get('course_description')?.setValue(course.course_description);
    this.fgCourseForm.get('start_date')?.setValue(moment(course.start_date));
    this.fgCourseForm.get('end_date')?.setValue(moment(course.end_date));
    this.fgCourseForm.get('price_amount')?.setValue(course.price);
    this.fgCourseForm.get('price_currency')?.markAsTouched()
    this.fgCourseForm.get('price_currency')?.setValue(course.currency);
    this.filterCurrencyList();
    this.fgCourseForm.get('price_currency')?.updateValueAndValidity();
    this.fgCourseForm.get('country')?.setValue(course.country);
    this.fgCourseForm.get('country')?.disable();
    this.idBeingEdited = course.id;
    this.showCourseForm = true;
  }

  resetCourseForm = () => {
    if (this.areWeEditing) {
      this.fgCourseForm.get('university')?.enable();
      this.fgCourseForm.get('city')?.enable();
      this.fgCourseForm.get('course_name')?.enable();
      this.fgCourseForm.get('country')?.enable();
      this.idBeingEdited = null;
    }
    this.fgCourseForm.reset();
    this.courseFormDirective.reset();
    this.resetFilteredLists();
    this.areWeEditing = false;
    this.areWeCreating = false;
  }

  deleteCourse = (course: TableData) => {
    console.log('delete', course);
    this.showLoader = true;
    this.service.serviceDeleteCourse(course.id)
      .subscribe({
        next: (data: any) => {
          console.log('delete course data', data);
          this.openSnackBar('Course successfully deleted');
          this.getCourses();
        },
        error: (error: HttpErrorResponse) => {
          console.log('delete course error', error);
          this.showLoader = false;
          this.openSnackBar(error.error?.message);
        }
      })
  }

  addNewCourseButtonClicked = () => {
    this.showCourseForm = true;
    this.areWeCreating = true;
    this.areWeEditing = false;
  }

  cancelFormClicked = () => {
    this.showCourseForm = false;
    this.resetCourseForm();
  }

  onFormSubmit = () => {
    console.log(this.fgCourseForm.value)
    console.log(this.fgCourseForm.valid)
    if (this.fgCourseForm.valid) {
      if (this.areWeCreating) {
        this.showLoader = true;
        const data2send = {
          University: this.fgCourseForm.get('university')?.value,
          City: this.fgCourseForm.get('city')?.value,
          CourseName: this.fgCourseForm.get('course_name')?.value,
          CourseDescription: this.fgCourseForm.get('course_description')?.value,
          StartDate: this.fgCourseForm.get('start_date')?.value,
          EndDate: this.fgCourseForm.get('end_date')?.value,
          Price: this.fgCourseForm.get('price_amount')?.value,
          Currency: this.fgCourseForm.get('price_currency')?.value,
          Country: this.fgCourseForm.get('country')?.value
        }
        this.service.serviceCreateCourse(data2send)
          .subscribe({
            next: (data: any) => {
              console.log('create course data', data);
              this.openSnackBar('Course ID ' + data?.id + ' created successfully');
              this.showCourseForm = false;
              this.resetCourseForm();
              this.getCourses();
            },
            error: (error: HttpErrorResponse) => {
              console.log('create course error', error);
              this.showLoader = false;
              this.openSnackBar(error.error?.message);
            }
          })
      }
      if (this.areWeEditing && this.idBeingEdited) {
        this.showLoader = true;
        const data2send = {
          CourseDescription: this.fgCourseForm.get('course_description')?.value,
          StartDate: this.fgCourseForm.get('start_date')?.value,
          EndDate: this.fgCourseForm.get('end_date')?.value,
          Price: this.fgCourseForm.get('price_amount')?.value,
          Currency: this.fgCourseForm.get('price_currency')?.value
        }
        this.service.serviceUpdateCourse(this.idBeingEdited, data2send)
          .subscribe({
            next: (data: any) => {
              console.log('update course data', data);
              this.openSnackBar('Course successfully updated');
              this.showCourseForm = false;
              this.resetCourseForm();
              this.getCourses();
            },
            error: (error: HttpErrorResponse) => {
              console.log('update course error', error);
              this.showLoader = false;
              this.openSnackBar(error.error?.message);
            }
          })
      }
    }
  }

  getCourses = () => {
    this.showLoader = true;
    this.service.serviceGetCourses({
      page: this.currentPage,
      limit: this.itemsPerPage,
      search: this.searchInput
    })
      .subscribe({
        next: (data: any) => {
          console.log('get courses data', data);
          this.coursesReturned = data['courses'];
          this.totalCoursesReturned = data['total'];
          this.populateTable();
          this.showLoader = false;
        },
        error: (error: HttpErrorResponse) => {
          console.log('get courses error', error);
          this.showLoader = false;
          this.openSnackBar(error.error?.message);
        }
      })
  }

  calculateDaysInclusive = (startDateStr: string, endDateStr: string) => {
    // Parse the dates using Moment
    const startDate = moment(startDateStr);
    const endDate = moment(endDateStr);
    // Calculate the difference in days
    const differenceInDays = endDate.diff(startDate, 'days');
    // Add one to make the count inclusive
    return differenceInDays + 1;
  }

  ngAfterViewInit(): void {
    this.getCourses();
  }

}
