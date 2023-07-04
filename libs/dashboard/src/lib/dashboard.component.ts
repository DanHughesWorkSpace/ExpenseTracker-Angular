import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from  '@angular/common/http';
@Component({
  selector: 'org-dashboard',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  private http = inject(HttpClient);

  ngOnInit(){
    this.getExpenses().subscribe((res)=> {
      console.log("heyyyy", res);
      
    })
  }

  getData(){
    return this.http.get('https://localhost:7285/api/Category/Get?id=1')

  }

  getExpenses(){
    return this.http.get('https://localhost:7285/api/Expenses/GetAll?userId=1')
  }

  getIncome(){

  }

  getCategories(){

  }

  postExpense(){

  }

  postIncome(){
    
  }
  

}
