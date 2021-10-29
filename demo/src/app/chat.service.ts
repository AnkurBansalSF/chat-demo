import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Chat } from "./chat.model";

const baseUrl = `http://localhost:3005/messages`;
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImZmMGI5ODRmLThmMTUtOTExMi02NTJlLTY3OTlmYmI4MTQwNCIsImZpcnN0TmFtZSI6IkFkbWluIiwibGFzdE5hbWUiOiJVc2VyIiwibWlkZGxlTmFtZSI6bnVsbCwidXNlcm5hbWUiOiJhZG1pbkBleGFtcGxlLmNvbSIsImVtYWlsIjoiYWRtaW5AZXhhbXBsZS5jb20iLCJwaG9uZSI6bnVsbCwiYXV0aENsaWVudElkcyI6WzFdLCJsYXN0TG9naW4iOiIyMDIxLTEwLTI5VDExOjA3OjM3LjUyOVoiLCJkb2IiOm51bGwsImdlbmRlciI6bnVsbCwiZGVmYXVsdFRlbmFudElkIjoiNTIzN2M4N2EtMTk3Yy01OTk5LTcwMWUtNmRhMTAzZGQ0NjZiIiwicGVybWlzc2lvbnMiOlsiVmlld01lc3NhZ2UiLCJDcmVhdGVNZXNzYWdlIiwiVXBkYXRlTWVzc2FnZSIsIkRlbGV0ZU1lc3NhZ2UiLCJWaWV3TWVzc2FnZVJlY2lwaWVudCIsIkNyZWF0ZU1lc3NhZ2VSZWNpcGllbnQiLCJVcGRhdGVNZXNzYWdlUmVjaXBpZW50IiwiRGVsZXRlTWVzc2FnZVJlY2lwaWVudCIsIlZpZXdOb3RpZmljYXRpb24iLCJDcmVhdGVOb3RpZmljYXRpb24iLCJVcGRhdGVOb3RpZmljYXRpb24iLCJEZWxldGVOb3RpZmljYXRpb24iLCJDYW5HZXROb3RpZmljYXRpb25BY2Nlc3MiXSwicm9sZSI6IjAiLCJhdXRoQ2xpZW50SWQiOjEsImRldmljZUluZm8iOnsidXNlckFnZW50IjoiTW96aWxsYS81LjAgKFgxMTsgTGludXggeDg2XzY0KSBBcHBsZVdlYktpdC81MzcuMzYgKEtIVE1MLCBsaWtlIEdlY2tvKSBDaHJvbWUvOTEuMC40NDcyLjc3IFNhZmFyaS81MzcuMzYifSwidXNlclByZWZlcmVuY2VzIjp7ImxvY2FsZSI6ImVuIn0sInRlbmFudElkIjoiNTIzN2M4N2EtMTk3Yy01OTk5LTcwMWUtNmRhMTAzZGQ0NjZiIiwidXNlclRlbmFudElkIjoiMDJkMzc0YTMtM2Q5Mi0wNjdiLTY1MDItYjUxM2E3NTk0MDg3Iiwic3RhdHVzIjoxLCJpYXQiOjE2MzU1MDU2NTcsImV4cCI6MTYzNTUwNjU1NywiaXNzIjoiaHR0cHM6Ly9sb29wYmFjazQtbWljcm9zZXJ2aWNlLWNhdGFsb2cifQ.qungRzpyHXh-CBC7kzr5yTchDHHaDfL9BAhpzJxbuOU';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) {
  }

  createAuthorizationHeader(headers: HttpHeaders) {
    headers.append('Authorization', `Bearer ${token}`);
  }

  get() {
    let authHeader = new HttpHeaders({'Authorization':`Bearer ${token}`});
    // this.createAuthorizationHeader(authHeader);
    return this.http.get<Chat[]>(baseUrl ,{
      headers: authHeader,
      params: {
        channelId: 'cc84cc10-12b0-4cb5-84dc-e5ed50e27c83'
      }
    },);
  }

  post(message: Chat){
    let authHeader = new HttpHeaders({'Authorization':`Bearer ${token}`});
    console.log("message send to db: ",message);
    return this.http.post(baseUrl, message,{headers: authHeader});
  }
}