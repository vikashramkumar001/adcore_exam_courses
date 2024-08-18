import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class AppService {

  constructor(private http: HttpClient) {
  }

  getCoursesURL = 'http://localhost:1378/get/courses';
  deleteCourseURL = 'http://localhost:1378/delete/course/';
  createCourseURL = 'http://localhost:1378/create/course';
  updateCourseURL = 'http://localhost:1378/update/course/';
  getListsURL = 'http://localhost:1378/get/lists';

  serviceGetCourses = (params: any): Observable<any> => {
    return this.http.get(this.getCoursesURL, {params});
  }

  serviceDeleteCourse = (courseID: string): Observable<any> => {
    return this.http.delete(this.deleteCourseURL + courseID)
  }

  serviceCreateCourse = (data: any): Observable<any> => {
    return this.http.post(this.createCourseURL, data);
  }

  serviceUpdateCourse = (courseID: string, data: any): Observable<any> => {
    return this.http.put(this.updateCourseURL + courseID, data);
  }

  serviceGetLists = (): Observable<any> => {
    return this.http.get(this.getListsURL);
  }

}
