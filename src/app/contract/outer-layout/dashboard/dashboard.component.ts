import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import {CardModule} from 'primeng/card';
import {TableModule} from 'primeng/table';
import {ChartModule} from 'primeng/chart';






@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  contracttask: any[];
  scrollableCols: any[];
  data: any;
  options: any;
  data1: any;
  // options1: any;
  data2: any;
  data3: any;

  allInitiatedContractsCount=0;  //KPI1_initiated
  allPendingSignaturecontractsCount=0;  //KPI2_PendingSignature
  allPendingApprovalContractsCount=0;   //KPI_3_PendingApproval
  totalPendingReviewCount=0; //KPI_4_PendingReview

AllContracts=[];  //for all contract data
ActiveTileIndication:number=2;
columnmessege="Approval request assigned for"; //table var



 constructor(public userService:UserService) {

document.getElementById('loader').style.display='block';
const p1 = this.userService.getInitiatedContractsByUser();
const p2 =this.userService.getContractsByPendingApproval();
const p3 =this.userService.getAllContractsForReviewByLoggedInUser();
const p4 =this.userService.getContractsByPendingSignature();

Promise.all([p1, p2, p3,p4])
.then(results=> {
  console.log(results);
   //this.getContractsCommanly(this.ActiveTileIndication);
  document.getElementById('loader').style.display='none';
});


   // Bar Chart
  this.data = {
    labels: ['Consulting', 'MSA', 'NDA', 'NDVA', 'SOW', 'VA', 'DA'],
    datasets: [
        {
            label: 'My First dataset',
            // backgroundColor: '#42A5F5',
            backgroundColor: ['#42A5F5',
                          "#9966FF",
                         "#4C4CFF",
                         "#00FFFF",
                         "#f990a7",
                         "#F39C12",
                        "#FF6347"
                      ],
            borderColor: '#1E88E5',
            data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
            label: 'My Second dataset',
            backgroundColor: '#9CCC65',
            borderColor: '#7CB342',
            data: [28, 48, 40, 19, 86, 27, 90]
        }
    ]
}                                  //  end-of-data as bar_chart in secondRow dashboard
//  this.options = {
//   legend: {
//         position: 'top'
//     }
//   };

  // Circle/ Doughnut_chart_1
  this.data1 = {
    labels: ['A','B','C', 'D', 'E'],
    datasets: [
        {
            data: [200, 170, 120, 80, 50],
            backgroundColor: [
                "#FF6384",
                "#FFCE56",
                "#36A2EB",
                "#8AE873",
                "#9F9E95"
            ],
            hoverBackgroundColor: [
                "#FF6384",
                "#FFCE56",
                "#36A2EB",
                "#8AE873",
                "#9F9E95"

            ]
        }]
    };    // end-of-dought_chart1_col_1 in 3rd_Row

    // Circle/pie_chart_2
  this.data2 = {
    labels: ['A','B','C', 'D', 'E', 'F'],
    datasets: [
        {
            data: [100, 90, 80, 60, 40, 15],
            backgroundColor: [
                "#BCF1EC",
                "#9274E1",
                "#ADACAF",
                "#F4ED19",
                "#ADE2A0",
                "#147BAF"
            ],
            hoverBackgroundColor: [
                "#BCF1EC",
                "#9274E1",
                "#ADACAF",
                "#F4ED19",
                "#ADE2A0",
                "#147BAF"
            ]
        }]
    };     //end of data2 piechart2 col_2 in 3rd_Row

    // Circle/ Doughnut_chart_3
  this.data3 = {
    labels: ['A','B','C'],
    datasets: [
        {

            data: [27.45, 35.26, 38.07,],
            backgroundColor: [
                "#F933FF",
                "#A10B08",
                "#0A1C76",
            ],
            hoverBackgroundColor: [
                "#F933FF",
                "#A10B08",
                "#0A1C76",
            ]
        }]
    };    //end-of data3 doughnut_chart3 col_3 in 3rd_Row
   }   //  end-of-constructor

  ngOnInit():void {

this.scrollableCols = [
      { field: 'Subject', header: 'Subject' },
      { field: 'image', header: 'Action' }
];

/*
//KPI_1_initiated
let flag1=false ,flag2=false,flag3=false,flag4=false;
this.userService.getInitiatedContractsByUser().then(()=>{
 // this.allInitiatedContractsCount = this.userService.initiatedContracts.length;
  this.contracttask = this.userService.initiatedContracts;

  if(flag2 &&flag3 &&flag4){
    document.getElementById('loader').style.display='none';
  }
  flag1 = true;
})

//KPI_2_pending_signature
this.userService.getContractsByPendingSignature().then(()=>{
//this.allPendingSignaturecontractsCount = this.userService.pendingSignatureContracts.length;
this.contracttask = this.userService.pendingSignatureContracts;
if(flag1 &&flag3 &&flag4){
  document.getElementById('loader').style.display='none';
}

flag2 = true;
})

//KPI_3_pending_Approval
this.userService.getContractsByPendingApproval().then(()=>{
 // this.allPendingApprovalContractsCount = this.userService.pendingApprovalContracts.length;
   this.contracttask = this.userService.pendingApprovalContracts;
   if(flag1 && flag2 &&flag4){
    document.getElementById('loader').style.display='none';
  }
  flag3 = true;
})
this.userService.getAllContractsForReviewByLoggedInUser().then(()=>{
 // this.totalPendingReviewCount=this.userService.pendingContractsForReview.length;
  if(flag1 && flag2 &&flag3){
    document.getElementById('loader').style.display='none';
  }
  flag4 = true;
})*/
//KPI_4_Expiring
//Nothing yet

///////trying array of promises//////


///////end of trying array of promises//////
}    //end bracket of ngOnInit_void()_method




//table task
//KPI_1
/*getInitiatedData(){
  //alert('initiated data');
  this.contracttask=this.userService.initiatedContracts;
}
//KPI_2
getPendingSignData(){
  // alert('Pending Signature Data');
  this.contracttask=this.userService.pendingSignatureContracts;
}
//KPI_3
getPendingApprovalData(){
  // alert('Pending Approval Data');
  this.contracttask=this.userService.pendingApprovalContracts;
}
//KPI_4
getPendingReviewData(){
  this.contracttask=this.userService.pendingContractsForReview;
}
*/
/////////////////////////////managing dashboard tiles.........
getContractsCommanly(x:number){
  this.ActiveTileIndication=x;
      if(x==0){
         this.AllContracts=this.userService.initiatedContracts;
         this.columnmessege="Initiated Contract is";
        //  this.contracttask=this.AllContracts;
      }
       else if(x==1){
         this.AllContracts=this.userService.pendingSignatureContracts;
         this.columnmessege="Pending Signature Contract is ";
      }
       else if(x==2){
         this.AllContracts=this.userService.pendingApprovalContracts;
         this.columnmessege="Approval request assigned for";
      }
      else if(x==3){
        this.AllContracts=this.userService.pendingContractsForReview;
         this.columnmessege="Pending Review Contract is ";
      }
  }

  ///Promises Object Array///////

}    // end bracket_of_export_Oninit
