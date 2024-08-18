import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})

export class AppService {

  constructor(private http: HttpClient) {
  }

  baseApiURL = environment.API_URL

  getCoursesURL = this.baseApiURL + 'get/courses';
  deleteCourseURL = this.baseApiURL + 'delete/course/';
  createCourseURL = this.baseApiURL + 'create/course';
  updateCourseURL = this.baseApiURL + 'update/course/';
  getListsURL = this.baseApiURL + 'get/lists';

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
