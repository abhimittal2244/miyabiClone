import { Component } from '@angular/core';

@Component({
  selector: 'app-audit-logs',
  templateUrl: './audit-logs.component.html',
  styleUrls: ['./audit-logs.component.css']
})
export class AuditLogsComponent {
  list=[
    {
      name: "Abhi"
    },
    {
      name: "Deepak"
    },
    {
      name: "Madhav"
    },
    {
      name: "ravi"
    }
  ]

  logs=[
    {
      sno: '1',
      ipAddress: '192.168.2.1',
      tableName: 'no-name',
      action: 'not required',
      createdDate: '19-06-2001',
      changes: 'no change'
     }
    //,
    // {
    //   sno: '1',
    //   ipAddress: '192.168.2.1',
    //   tableName: 'no-name',
    //   action: 'not required',
    //   createdDate: '19-06-2001',
    //   changes: 'no change'
    // },
    // {
    //   sno: '1',
    //   ipAddress: '192.168.2.1',
    //   tableName: 'no-name',
    //   action: 'not required',
    //   createdDate: '19-06-2001',
    //   changes: 'no change'
    // },
    // {
    //   sno: '1',
    //   ipAddress: '192.168.2.1',
    //   tableName: 'no-name',
    //   action: 'not required',
    //   createdDate: '19-06-2001',
    //   changes: 'no change'
    // },
    // {
    //   sno: '1',
    //   ipAddress: '192.168.2.1',
    //   tableName: 'no-name',
    //   action: 'not required',
    //   createdDate: '19-06-2001',
    //   changes: 'no change'
    // },
    // {
    //   sno: '1',
    //   ipAddress: '192.168.2.1',
    //   tableName: 'no-name',
    //   action: 'not required',
    //   createdDate: '19-06-2001',
    //   changes: 'no change'
    // },
    // {
    //   sno: '1',
    //   ipAddress: '192.168.2.1',
    //   tableName: 'no-name',
    //   action: 'not required',
    //   createdDate: '19-06-2001',
    //   changes: 'no change'
    // },
    // {
    //   sno: '1',
    //   ipAddress: '192.168.2.1',
    //   tableName: 'no-name',
    //   action: 'not required',
    //   createdDate: '19-06-2001',
    //   changes: 'no change'
    // },
    // {
    //   sno: '1',
    //   ipAddress: '192.168.2.1',
    //   tableName: 'no-name',
    //   action: 'not required',
    //   createdDate: '19-06-2001',
    //   changes: 'no change'
    // },
    // {
    //   sno: '1',
    //   ipAddress: '192.168.2.1',
    //   tableName: 'no-name',
    //   action: 'not required',
    //   createdDate: '19-06-2001',
    //   changes: 'no change'
    // },
    // {
    //   sno: '1',
    //   ipAddress: '192.168.2.1',
    //   tableName: 'no-name',
    //   action: 'not required',
    //   createdDate: '19-06-2001',
    //   changes: 'no change'
    // },
    // {
    //   sno: '1',
    //   ipAddress: '192.168.2.1',
    //   tableName: 'no-name',
    //   action: 'not required',
    //   createdDate: '19-06-2001',
    //   changes: 'no change'
    // },
    // {
    //   sno: '1',
    //   ipAddress: '192.168.2.1',
    //   tableName: 'no-name',
    //   action: 'not required',
    //   createdDate: '19-06-2001',
    //   changes: 'no change'
    // },
    // {
    //   sno: '1',
    //   ipAddress: '192.168.2.1',
    //   tableName: 'no-name',
    //   action: 'not required',
    //   createdDate: '19-06-2001',
    //   changes: 'no change'
    // },
    // {
    //   sno: '1',
    //   ipAddress: '192.168.2.1',
    //   tableName: 'no-name',
    //   action: 'not required',
    //   createdDate: '19-06-2001',
    //   changes: 'no change'
    // },
    // {
    //   sno: '1',
    //   ipAddress: '192.168.2.1',
    //   tableName: 'no-name',
    //   action: 'not required',
    //   createdDate: '19-06-2001',
    //   changes: 'no change'
    // },
    // {
    //   sno: '1',
    //   ipAddress: '192.168.2.1',
    //   tableName: 'no-name',
    //   action: 'not required',
    //   createdDate: '19-06-2001',
    //   changes: 'no change'
    // },
    // {
    //   sno: '1',
    //   ipAddress: '192.168.2.1',
    //   tableName: 'no-name',
    //   action: 'not required',
    //   createdDate: '19-06-2001',
    //   changes: 'no change'
    // },
    // {
    //   sno: '1',
    //   ipAddress: '192.168.2.1',
    //   tableName: 'no-name',
    //   action: 'not required',
    //   createdDate: '19-06-2001',
    //   changes: 'no change'
    // },
    // {
    //   sno: '1',
    //   ipAddress: '192.168.2.1',
    //   tableName: 'no-name',
    //   action: 'not required',
    //   createdDate: '19-06-2001',
    //   changes: 'no change'
    // },
    // {
    //   sno: '1',
    //   ipAddress: '192.168.2.1',
    //   tableName: 'no-name',
    //   action: 'not required',
    //   createdDate: '19-06-2001',
    //   changes: 'no change'
    // },
    // {
    //   sno: '1',
    //   ipAddress: '192.168.2.1',
    //   tableName: 'no-name',
    //   action: 'not required',
    //   createdDate: '19-06-2001',
    //   changes: 'no change'
    // },
    // {
    //   sno: '1',
    //   ipAddress: '192.168.2.1',
    //   tableName: 'no-name',
    //   action: 'not required',
    //   createdDate: '19-06-2001',
    //   changes: 'no change'
    // },
    // {
    //   sno: '1',
    //   ipAddress: '192.168.2.1',
    //   tableName: 'no-name',
    //   action: 'not required',
    //   createdDate: '19-06-2001',
    //   changes: 'no change'
    // },
    // {
    //   sno: '1',
    //   ipAddress: '192.168.2.1',
    //   tableName: 'no-name',
    //   action: 'not required',
    //   createdDate: '19-06-2001',
    //   changes: 'no change'
    // },
    // {
    //   sno: '1',
    //   ipAddress: '192.168.2.1',
    //   tableName: 'no-name',
    //   action: 'not required',
    //   createdDate: '19-06-2001',
    //   changes: 'no change'
    // },
    // {
    //   sno: '1',
    //   ipAddress: '192.168.2.1',
    //   tableName: 'no-name',
    //   action: 'not required',
    //   createdDate: '19-06-2001',
    //   changes: 'no change'
    // },
    // {
    //   sno: '1',
    //   ipAddress: '192.168.2.1',
    //   tableName: 'no-name',
    //   action: 'not required',
    //   createdDate: '19-06-2001',
    //   changes: 'no change'
    // },
    // {
    //   sno: '1',
    //   ipAddress: '192.168.2.1',
    //   tableName: 'no-name',
    //   action: 'not required',
    //   createdDate: '19-06-2001',
    //   changes: 'no change'
    // },
    // {
    //   sno: '1',
    //   ipAddress: '192.168.2.1',
    //   tableName: 'no-name',
    //   action: 'not required',
    //   createdDate: '19-06-2001',
    //   changes: 'no change'
    // },
    // {
    //   sno: '1',
    //   ipAddress: '192.168.2.1',
    //   tableName: 'no-name',
    //   action: 'not required',
    //   createdDate: '19-06-2001',
    //   changes: 'no change'
    // },
    // {
    //   sno: '1',
    //   ipAddress: '192.168.2.1',
    //   tableName: 'no-name',
    //   action: 'not required',
    //   createdDate: '19-06-2001',
    //   changes: 'no change'
    // },
    // {
    //   sno: '1',
    //   ipAddress: '192.168.2.1',
    //   tableName: 'no-name',
    //   action: 'not required',
    //   createdDate: '19-06-2001',
    //   changes: 'no change'
    // },
    // {
    //   sno: '1',
    //   ipAddress: '192.168.2.1',
    //   tableName: 'no-name',
    //   action: 'not required',
    //   createdDate: '19-06-2001',
    //   changes: 'no change'
    // },
    // {
    //   sno: '1',
    //   ipAddress: '192.168.2.1',
    //   tableName: 'no-name',
    //   action: 'not required',
    //   createdDate: '19-06-2001',
    //   changes: 'no change'
    // }
  ]
}
